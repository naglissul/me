# Structural induction with Peano axioms

Proof asistants like Coq or Lean provides mathematicians with a way to verify mathematical proofs. Since it's all on a computer, it must be precise and built from ground up, the way programming is. In this post we will look at recursive sets and structural induction proofs through an example of natural numbers and their basic properties.

## Recursive sets and structural induction

Recursive definition of a set is done by specifying a base case (or multiple base cases) and an inductive step (or multiple inductive steps) and specifying exclusivity, that is no other element is in the set.

Structural induction then analyzes all these cases - base and inductive - to prove that any element of the set that is constructed would have a certain property. Mind you - to use structural induction the set doesn't have to necessarily be recursively defined. The only criteria is for all subsets of the set to have a minimal element with a (partial) order, but on that later, maybe in another post, maybe never.

For example, let's look at odd and even numbers with the following definitions.

$E$ is a set, where
- $0 \in E$ (base case),
- if $h \in E$, then $h+2 \in E$ (inductive step),
- no other element is in the set $E$ (exclusivity).

$O$ is a set, where
- $1 \in O$ (base case),
- if $h \in O$, then $h+2 \in O$ (inductive step),
- no other element is in the set $O$ (exclusivity).

And now let's prove that `even + odd = odd`, which in basic algebra would be done by noticing that `2k + (2k + 1) = 2(2k) + 1`.

Proposition: if $x \in E$ and $y \in O$ then $x + y \in O$.

Proof by structural induction on $x$:
- $x = 0$: $x+y = 0+y = y \in O$;
- $x = h+2$, where $h + y \in O$: $x + y = (h+2) + y = (h+y) +2 \in O$.

If aligning the proof somewhat with the definition mentioned in the PFPL book, it would be the following.

Proposition: $\forall x\inE. P(x)$, where $P(a) := \forall y\inO. a + y \in O$.

Proof by structural induction on $x$:
- $x = 0$ ($x$ is a variable): $P(x)$ holds;
- $x = h+2$ ($x$ is an operator `+2` with argument $h$) and $P(h)$ (since $h$ is the argument): $P(x)$ holds.

## Peano axioms

Natural numbers $\mathbb N$ are defined as (Axiom 1 and Axiom 2):
- $0 \in \mathbb N$;
- $s(n) \in \mathbb N$, where $n \in \mathbb N$ (informally $s(n) = n+1$).

Axiom 3. $\not \exists n \in \mathbb N. s(n) = 0$, or informally, there is no $-1$.

Axiom 4. If $s(x) = z$ and $s(y) = z$ then $x=y$.

Axiom 5. Any property belonging to $0$ and to $s(n)$ has also that property belong to all numbers (the mentioned induction proof).

## Basic types and Lean syntax of types

A short explanation about types. From lambda calculus we have, for example,
- $\lambda f.\lambda a. \lambda b. fba$
- or in short $\lambda fab.fba$.

Now we add type for each argument and for the return value. It is done by using implication arrows:
- $x_1 \rightarrow x_2 \rightarrow x_3 \rightarrow f(x_1, x_2, x_3)$.

In Lean that would be

```lean
def C : (α → β → γ) → β → α → γ :=
  fun f a b ↦ f b a
```
where:
- first argument type is `α → β → γ`,
- second argument type is `β`,
- third argument type is `α`,
- return type is `γ`.

## Lean proofs of basic number properties

This section will not provide extensive explanations of how everything works, intuition should be built via examples. Firstly, let's inductively define natural numbers type, using constructors `zero` and `succ`:

```lean
inductive Nat
  | zero: Nat
  | succ: Nat → Nat
```

Then let's define addition, using this newly defined `Nat` type:

```lean
def add: Nat → Nat → Nat
  | n, Nat.zero => n
  | n, Nat.succ k => Nat.succ (add n k)
```

To simplify some proofs we can have inductive predicates. Example of that:

```lean
inductive isNat : Nat → Prop where
  | zero_nat    : isNat Nat.zero
  | succ_nat : ∀k : Nat, isNat k → isNat (Nat.succ k)
```

And with it we can now prove that 2 is a natural number. 

```lean
lemma two_is_Nat: isNat (Nat.succ (Nat.succ Nat.zero)) :=
  by
    apply isNat.succ_nat
    apply isNat.succ_nat
    exact isNat.zero_nat
```

This above is called a backwards proof (following some kind of proof goal you could see in Lean InfoView) using tactics mode. What it is behind the curtains? Propositions are types, proofs are terms that inhabit the proposition type (the `by` thing is just a easy to understand notation of a term - you can check the actual term definition using `#print` command). Like there is a possibility of having multiple proofs for a proposition, we can have, obviously, multiple terms of the given type. Sadly, type inhabitation problem is not decidable, so we cannot build a general computer that would proof any theorem, and we have to figure out (most) proofs by ourselves...

Finally, we can prove some basic properties about natural number addition:

```lean

theorem add_zero (n : Nat) :
  add Nat.zero n = n := -- theorem: 0 + n = n
  by
    induction n with -- does (structural) induction
    | zero       =>
      unfold add -- uses the "add" definition
      apply Eq.refl -- uses equation reflexivity
    | succ n' ih =>
      unfold add
      apply congrArg Nat.succ -- theorem for equality that if a=b then f(a)=f(b)
      exact ih -- the goal is exactly in context

theorem add_succ (m n : Nat) :
  add (Nat.succ m) n = Nat.succ (add m n) := -- theorem: (m+1) + n = (m + n)+1
  by
    induction n with
    | zero       =>
      unfold add
      apply Eq.refl
    | succ n' ih =>
      unfold add
      apply congrArg Nat.succ
      exact ih

theorem add_comm (m n : Nat) :
  add m n = add n m := -- theorem: m + n = n + m
  by
    induction n with
    | zero       =>
      rw [add_zero] -- shorthand for using Eq.trans, this time rewriting RHS
      unfold add
      rfl -- shorthand for Eq.refl
    | succ n' ih =>
      rw [add_succ]
      rw [add]
      apply congrArg Nat.succ
      exact ih

theorem add_assoc (l m n : Nat) :
  add (add l m) n = add l (add m n) := -- theorem: (l + m) + n = l + (m + n)
  by
    induction n with
    | zero       =>
      rw [add]
      apply congrArg (add l)
      rw [add] -- here automaticly skipped the rfl
    | succ n' ih =>
      rw [add]
      rw [add]
      rw [add]
      apply congrArg Nat.succ
      exact ih
```

These are some extensively written proofs, but, of course, Lean has tons of shorthands, so you don't need to explicitly write everything down like in the examples. One of the best tools (in my view) is `simp`. For example, the commutativity proof with `simp` becomes this:

```lean
theorem add_comm (m n : Nat) :
  add m n = add n m :=
  by
    induction n with
    | zero       => simp [add, add_zero]
    | succ n' ih => simp [add, add_succ, ih]
```

The simplification tactic "throws all stuff" that Lean has, trying to simplify the expression. Also we haven't defined the `Eq` relation, but for now let's leave it be.

And this is it for this introductiory post about proof assistant basics.

P.S. motivation is from the Logical Verification course at Vrije Universiteit, but the content of this post barely overlaps.

## Attachments

For Lean setup (and learning) would recommend just cloning this repo: https://github.com/lean-forward/logical_verification_2024

## References

Structural induction tutorial: https://eng.libretexts.org/Bookshelves/Computer_Science/Programming_and_Computation_Fundamentals/Delftse_Foundations_of_Computation/03%3A_Sets_Functions_and_Relations/3.01%3A_Basic_Concepts/3.1.07%3A_Structural_Induction

PFPL book: `Harper, R. (2012). Practical foundations for programming languages (Vol. 2). New York, New York: Cambridge University Press.`

Simplified version of Peano axioms: https://mathshistory.st-andrews.ac.uk/SH/peano_sh.pdf

Created at: 2026-09-13

Last updated at: 2026-09-13
