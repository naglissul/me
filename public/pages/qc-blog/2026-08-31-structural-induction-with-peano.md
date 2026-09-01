# Structural induction with Peano axioms

Proof asistants like Coq or Lean provides mathematicians with a way to verify mathematical proofs. Since it's all on a computer, it must be precise and built from ground up, the way programming is. In this post we will look at recursive sets and structural induction proofs through an example of natural numbers and their basic properties.

## Recursive sets and structural induction

Recursive definition of a set is done by specifying a base case (or multiple base cases) and an inductive step (or multiple inductive steps) and specifying exclusivity, that is no other element is in the set.

Structural induction then analyzes all these cases - base and inductive - to prove that any element of the set that is constructed would have a certain property.

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

Now we add type for each argument and for the return value. It is done by usign implication arrows:
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

...

## Attachements

For Lean setup (and learning) would recommend just cloning this repo: https://github.com/lean-forward/logical_verification_2024

## References

Structural induction tutorial: https://eng.libretexts.org/Bookshelves/Computer_Science/Programming_and_Computation_Fundamentals/Delftse_Foundations_of_Computation/03%3A_Sets_Functions_and_Relations/3.01%3A_Basic_Concepts/3.1.07%3A_Structural_Induction

PFPL book: `Harper, R. (2012). Practical foundations for programming languages (Vol. 2). New York, New York: Cambridge University Press.`

Simplified version of Peano axioms: https://mathshistory.st-andrews.ac.uk/SH/peano_sh.pdf

Created at: 2026-08-31

Last updated at: 2026-08-31
