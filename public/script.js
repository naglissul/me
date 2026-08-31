const pageMap = {}; // slug -> { title, navLabel, fetchPath, parentSlug }
const topLevelPages = []; // [{ slug, navLabel }]
const childrenOrder = {}; // parentSlug -> [childSlug, ...] in declared/discovered order

function navLabel(title) {
  const i = title.indexOf("|");
  return (i === -1 ? title : title.slice(0, i)).trim();
}

async function listMarkdownFiles(dir) {
  const res = await fetch(`/pages/${dir}/`);
  if (!res.ok) return [];
  const html = await res.text();
  const doc = new DOMParser().parseFromString(html, "text/html");
  const files = new Set();
  doc.querySelectorAll("a[href]").forEach((a) => {
    const name = decodeURIComponent(a.getAttribute("href")).split("/").pop();
    if (name && name.endsWith(".md")) files.add(name);
  });
  return [...files].sort().reverse();
}

async function firstLine(fetchPath) {
  const res = await fetch(`/pages/${fetchPath}`);
  const text = await res.text();
  return text.split("\n")[0].replace(/^#+\s*/, "").trim();
}

async function resolvePages(pages, parentSlug, parentDir) {
  const explicitSlugs = new Set(pages.map((p) => p.slug).filter((s) => s !== "*"));

  for (const p of pages) {
    if (p.slug === "*") {
      const files = await listMarkdownFiles(parentDir);
      for (const file of files) {
        const slug = file.replace(/\.md$/, "");
        if (slug === "index" || explicitSlugs.has(slug) || pageMap[slug]) continue;
        const fetchPath = `${parentDir}/${file}`;
        const title = p.title.replace("<file-first-line>", await firstLine(fetchPath));
        pageMap[slug] = { title, navLabel: navLabel(title), fetchPath, parentSlug };
        if (parentSlug) (childrenOrder[parentSlug] ??= []).push(slug);
      }
      continue;
    }

    const hasChildren = Array.isArray(p.children);
    const dir = parentDir ? `${parentDir}/${p.slug}` : p.slug;
    const fetchPath = hasChildren ? `${dir}/index.md` : `${dir}.md`;
    pageMap[p.slug] = { title: p.title, navLabel: navLabel(p.title), fetchPath, parentSlug };

    if (!parentSlug) topLevelPages.push({ slug: p.slug, navLabel: navLabel(p.title) });
    else childrenOrder[parentSlug] ??= [];
    if (parentSlug) childrenOrder[parentSlug].push(p.slug);
    if (hasChildren) await resolvePages(p.children, p.slug, dir);
  }
}

function postNavButton(direction, slug) {
  if (!slug) return "<span></span>";
  const label = direction === "prev" ? "← Previous" : "Next →";
  return `<a href="/${slug}" data-slug="${slug}" class="post-nav-${direction}"><span class="post-nav-label">${label}</span><span class="post-nav-title">${pageMap[slug].navLabel}</span></a>`;
}

function updateBlogNav(slug) {
  const page = pageMap[slug];
  const parentSlug = page && page.parentSlug ? page.parentSlug : childrenOrder[slug] ? slug : null;
  const asideEl = document.getElementById("blog-aside");
  const drawerSectionEl = document.getElementById("drawer-blog-section");
  const bottomEl = document.getElementById("post-nav-bottom");

  if (!parentSlug) {
    asideEl.hidden = true;
    drawerSectionEl.hidden = true;
    document.getElementById("blog-aside-nav").innerHTML = "";
    document.getElementById("drawer-blog-nav").innerHTML = "";
    bottomEl.innerHTML = "";
    return;
  }

  const siblings = childrenOrder[parentSlug];
  const linksHtml = siblings
    .map((s) => {
      const dateMatch = s.match(/^(\d{4}-\d{2}-\d{2})/);
      return `<a href="/${s}" data-slug="${s}" class="${s === slug ? "active" : ""}"><span class="blog-aside-title">${pageMap[s].navLabel}</span>${dateMatch ? `<span class="blog-aside-date">${dateMatch[1]}</span>` : ""}</a>`;
    })
    .join("");

  asideEl.hidden = false;
  drawerSectionEl.hidden = false;
  document.getElementById("blog-aside-nav").innerHTML = linksHtml;
  document.getElementById("drawer-blog-nav").innerHTML = linksHtml;

  const idx = siblings.indexOf(slug);
  bottomEl.innerHTML =
    idx === -1
      ? ""
      : postNavButton("prev", siblings[idx - 1]) + postNavButton("next", siblings[idx + 1]);
}

function topAncestorSlug(slug) {
  let page = pageMap[slug];
  let result = slug;
  while (page && page.parentSlug) {
    result = page.parentSlug;
    page = pageMap[page.parentSlug];
  }
  return result;
}

async function loadPage(slug) {
  const page = pageMap[slug];
  const fetchPath = page ? page.fetchPath : `${slug}.md`;

  const res = await fetch(`/pages/${fetchPath}`);
  if (!res.ok) throw new Error(`Page not found: ${slug}`);
  const text = await res.text();

  const contentEl = document.getElementById("content");
  contentEl.innerHTML = marked.parse(text);

  if (page) document.title = page.title;

  renderMathInElement(contentEl, {
    delimiters: [
      { left: "$$", right: "$$", display: true },
      { left: "$", right: "$", display: false },
      { left: "\\(", right: "\\)", display: false },
      { left: "\\[", right: "\\]", display: true },
    ],
    throwOnError: false,
  });

  const activeSlug = topAncestorSlug(slug);
  document.querySelectorAll("#nav a, #drawer-nav a").forEach((a) => {
    a.classList.toggle("active", a.dataset.slug === activeSlug);
  });

  updateBlogNav(slug);
}

function currentSlug() {
  return window.location.pathname.replace(/^\//, "") || "index";
}

function navigate(slug) {
  const path = slug === "index" ? "/" : `/${slug}`;
  history.pushState(null, "", path);
  loadPage(slug);
}

function closeDrawer() {
  document.getElementById("drawer").classList.remove("open");
  document.getElementById("drawer-overlay").classList.remove("visible");
}

async function init() {
  const res = await fetch("/pages.json");
  const pages = await res.json();
  await resolvePages(pages, null, "");

  const links = topLevelPages
    .map(
      (p) =>
        `<a href="${p.slug === "index" ? "/" : "/" + p.slug}" data-slug="${p.slug}">${p.navLabel}</a>`,
    )
    .join("");

  document.getElementById("nav").innerHTML = links;
  document.getElementById("drawer-nav").innerHTML = links;

  document.getElementById("nav").addEventListener("click", (e) => {
    const a = e.target.closest("a");
    if (!a) return;
    e.preventDefault();
    navigate(a.dataset.slug);
  });

  ["drawer-nav", "drawer-blog-nav"].forEach((id) => {
    document.getElementById(id).addEventListener("click", (e) => {
      const a = e.target.closest("a");
      if (!a) return;
      e.preventDefault();
      closeDrawer();
      navigate(a.dataset.slug);
    });
  });

  document.getElementById("menu-toggle").addEventListener("click", () => {
    const drawer = document.getElementById("drawer");
    if (drawer.classList.contains("open")) {
      closeDrawer();
    } else {
      drawer.classList.add("open");
      document.getElementById("drawer-overlay").classList.add("visible");
    }
  });

  document
    .getElementById("drawer-overlay")
    .addEventListener("click", closeDrawer);

  ["blog-aside-nav", "post-nav-bottom"].forEach((id) => {
    document.getElementById(id).addEventListener("click", (e) => {
      const a = e.target.closest("a");
      if (!a) return;
      e.preventDefault();
      navigate(a.dataset.slug);
    });
  });

  loadPage(currentSlug());
}

window.addEventListener("popstate", () => loadPage(currentSlug()));

document.addEventListener("DOMContentLoaded", init);
