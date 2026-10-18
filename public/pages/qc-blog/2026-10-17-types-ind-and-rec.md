# Type theory: inductor and recursor

In the context of Logical Verification master course at Vrije Universiteit, let's look at:
- inductor and recursor comparison on different types,
- example of definition and proof of Ackermann function and Star construct,
- Tarski and Russel universe differences (Tarski used in class, Russel used in Lean).

For introduction into structural induction and Lean proofs see [this post](/qc-blog/2026-09-13-structural-induction-with-peano).

## Recursor and Ackermann function

We have `recNat` term for natural numbers

$$ recNat[\tau](e; e_{zero}; n.ih.e_{succ}), $$

with types $recNat: \tau$, $e:Nat$, $e_{zero} : \tau$, $\Gamma, n: Nat, ih: \tau \vdash e_{succ}: \tau$,

that can be used to recursively define functions on natural number. For example, the doubling function could be defined as

$$ double : Nat -> Nat,$$

$$ double := \lambda n. recNat[Nat](n; zero; x.ih.succ(succ ih)).$$

It's like writing a proof `by induction on n`, but not really, since `Nat -> Nat` is not a theorem.

An example, where motive (the type inside `[...]`) is not plain `Nat`, would be the Ackermann function (Peter and Robinson version of definition follows)

```
A(0, n) = n + 1
A(m+1, 0) = A(m, 1)
A(m+1, n+1) = A(m, A(m+1, n))
```

which would be defined using `recNat` like this:

```
ackermann : Nat -> Nat -> Nat
ackermann := fun m => recNat[Nat -> Nat](m;
  fun n => succ n;
  x.ih.fun n => recNat[Nat](n;
    ih (succ zero);
    y.ih2. ih ih2
  )
)
```

To understand what's happening here, think of it this way - you are making a function, that makes functions:

```
A(m):
  A(0) = fun n => n+1
  A(m+1) = fun n => if (n=0) {A(m) applied with 1} 
                    if (n=k+1) {A(m) applied with A(m+1) applied with k}
```

With this general strategy, recursor can be defined for any inductive type `T` as
```
recT[Q](t : T;
        args.base_case_1 : Q; args.base_case_2 : Q; ...;
        args.args_that_are_of_type_T_repeated_as_ihs.inductive_case_1 : q; ...
): Q
```

## Inductor and reflexive transitive closure Star

Inductor is just a generalized recursor, where motive can have a free form with it's own dependencies. For natural numbers the motive depends on n, and the whole `indNat` therefore is of tipe `motive[e:=n]`.

So `indNat` is a term, defined on natural numbers as

$$ indNat[n.motive](e; e_{zero}; x.ih.e_{succ}), $$

with types $indNat: motive[n:=e]$, $e:Nat$, $e_{zero} : motive[n:=zero]$, $\Gamma, x: Nat, ih: motive[n:=x] \vdash e_{succ}: motive[n:=succ(x)]$,

and can now be used for proofs (together with definitional equality (bidirectional beta reduction)) like for type `forAll m : Nat, Eq(mult(m; zero); zero)`, where `Eq` has the only constructor refl:

```
fun m:Nat => indNat[n. Eq(mult(n; zero); zero)](m; refl(zero); x.ih.ih)
```

Here we can see that the motive is nothing more than a proposition that we have to prove for n (that's why it depends on n). And then we provide the proof for the base case (`refl(zero) : Eq(mult(zero; zero); zero)` or definitionally equally `refl(zero) : Eq(zero; zero)`) and for the inductive case (`ih : Eq(mult(x; zero); zero)` is also `ih : Eq(mult(succ(x); zero); zero)` by definitional equality).

Like the recursor can be defined for every inductive type, so can inductor (in Lean it always automatically is) in analogous way. So let's take a look at the inductive predicate Star that is a smallest relation with possibly additional "junctions" to make given R reflexive and transitive. Let's define it in Lean syntax:

```lean
inductive Star (σ : Type) (R : σ -> σ -> Prop) : σ -> σ -> Prop
  | refl : (a : σ) -> Star σ R a a
  | chain : (a b c : σ) -> Star σ R a b -> R b c -> Star σ R a c
```

Now by writing `#print Star.rec` we will see the automatically generated definition of Star inductor (I know the naming is confusing, but that's how it is used in Logical Verification lectures). It looks like this (with `set_option pp.proofs true`):

```
recursor Star.rec : ∀ {σ : Type} {R : σ → σ → Prop} {a : σ} {motive : (a_1 : σ) → Star σ R a a_1 → Prop},
  motive a (Star.refl a) →
    (∀ (b c : σ) (a_1 : Star σ R a b) (a_2 : R b c), motive b a_1 → motive c (Star.chain a b c a_1 a_2)) →
      ∀ {a_1 : σ} (t : Star σ R a a_1), motive a_1 t
```

or to put more nicely

```
indStar :
  (σ : Type) →
  (R : σ → σ → Prop) →
    (motive : (a : σ) → (b : σ) → Star σ R a b → Prop) →
      ((a : σ) → motive a a (refl σ R a)) →

      ((a : σ) → (b : σ) → (c : σ) →
        (p : Star σ R a b) → (q : R b c) →
        motive a b p → motive a c (chain σ R a b c p q)) →
        (e₁ : σ) → (e₂ : σ) → (p : Star σ R e₁ e₂) →
        motive e₁ e₂ p
```

Now we can use it to prove, for example, Star transitivity:

```lean
lemma Star_trans (σ : Type) (R: σ -> σ -> Prop): (a b c : σ) -> Star σ R a b -> Star σ R b c -> Star σ R a c :=
  fun a _ _ hab hbc =>
    Star.rec
      (motive := fun y _ => Star σ R a y)
      hab
      (fun x y _ r ih => Star.chain a x y ih r)
      hbc
```

That is actually what is happening under the hood in Lean when we write this

```lean
lemma Star_trans (σ : Type) (R: σ -> σ -> Prop): (a b c : σ) -> Star σ R a b -> Star σ R b c -> Star σ R a c :=
  by
    intro a b c hab hbc
    induction hbc with
      | refl => exact hab
      | chain x y _ r ih => exact Star.chain a x y ih r
```

and is actually equally "legal" way to make proofs, just maybe less convenient.

## Tarski and Russel universes

Now, the boundary between terms and types got really thing with that inductor definition, where `motive` type depends on a term. So now it is not enough to just define terms and types separately as independent of each other, and write judgements `context |- term : type`. So let's introduce some rigorousness.

In Logical Verification lecture we use Tarski universes, while Lean uses Russel universes (again, sorry for the confusion, but this is not for me to decide). But overall it's the same Martin L:of intuitionistic type theory.

Actually, on the other hand, this is not exam material, so let's keep it for the future posts, if ever, having here it just mentioned.

## References

This post is mostly based on the Logical Verification course lecture notes, TA's consultations/explanations and Lean proof assistant tool implementation.

Also note about Star proofs - they are vibecoded, but working. Yet to be analyzed thouroughly.

Created at: 2026-10-17

Last updated at: 2026-10-17
