# QIT midterm recap: states

Quantum Information Theory course at UvA this year has a midterm with allowed handwritten double-sided A4 cheatsheet. So I'll take my chances. Also, that is quite a nice way to review the first 7 lectures. Reader is also encouraged to take a look at the [QC chapter 1 post](/2026-09-08-uva-qc-ch1), since it contains some quite important formal or semi-formal basics that I will try to not repeat here. For better intuition regarding (quantum) information theory basics, reader is also encouraged to take a look at (containing errors) [The Science Guild mini lecture about Holevo bound](https://drive.google.com/file/d/1kAact2i_PEO0S9HMvB_28umF9riLXJYj/view), however, I will repeat here (what I think are) the most important points. Or for intormation theory intuition you can just read the beginning of the original Shannon paper. It's quite good and easily readable. It is probably self explanatory, that this post contents are mostly based on this course lecture notes, that are not publicly accessible (or are they?).

This is part 1 of 3 for QIT midterm recap. See [part 2 (about channels) here](/2026-10-25-qit-midterm-2) and [part 3 (about information) here](/2026-10-25-qit-midterm-3).

And, of course, these 3 posts don't cover all 7 lecture content.

## Types of states

**State definition** - (hermitian) PSD operator (eigenvalues/probabilities non-negative) of trace 1 (probabilities/eigenvalues add up to 1).

(or you could call it a "PTSD operator" - haha, get it? PTSD? get it? it's... it's **PSD** but also **T**r=1... haha, get it?...... do you get it?-)

**Pure vs mixed**:
- pure is $\ket\psi \bra\psi$ (projector, rank=1),
- mixed is not pure (convex combination of pures) (1 < rank <= dim).

**Product vs separable vs entangled**:
- product is when $\rho_1 \otimes \rho_2$,
- separable (classically correlated) - convex combination of products,
- entangled (quantum correlated) - everything else (std. max. entangled is EPR).

**Examples**:

- (pure, single) $\rho = \ket{1}\bra{1} = \begin{pmatrix}0\\1\end{pmatrix} \cdot \begin{pmatrix}0 & 1\end{pmatrix} = \begin{pmatrix}0 & 0 \\ 0 & 1\end{pmatrix}$,
- (mixed, single) $\rho = 0.3\ket0\bra0 + 0.7\ket1\bra1$,
- (pure, bipartite, product) $\rho = \ket{11}\bra{11} = \ket1\bra1 \otimes \ket1\bra1 = \begin{pmatrix}0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 1\end{pmatrix}$,
- (mixed, bipartite, separable) $\rho = 0.3(\ket0\bra0 \otimes \ket+\bra+) + 0.7(\ket1\bra1 \otimes \ket-\bra-)$,
- (pure, bipartite, entangled)$\rho = \frac1{\sqrt2}(\ket{00} + \ket{11})\frac{1}{\sqrt2}(\bra{00} + \bra{11}) = \frac12 \begin{pmatrix}1 & 0 & 0 & 1 \\ 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 \\ 1 & 0 & 0 & 1\end{pmatrix}$.

This essentially captures all classical probability logic with addition of quantum entanglement ("strongly connected" states, separating which would lose information).

## Purifications

(Make pure from mixed, by extending Hilbert space - then can do Schmidt decomposition)

- (existence) $\forall \rho_A. \exists \ket\psi_{AB}. Tr_B[\ket\psi\bra\psi_{AB}]=\rho_A$,
- (standard) $\ket\psi_{AB} = (\sqrt{\rho_A} \otimes I_B) \sum_x \ket{xx}$,
- (uniqueness) all purifications are related by an isometry (if Hilbert space the same size - by a unitary).

**Example**

$\rho_A = \frac12 \ket0\bra0 + \frac12 \ket+\bra+$.

One of many purifications (by wikipedia's definition) is

$\ket\psi_{AB} = \frac{1}{\sqrt2}(\ket{00}+\ket{+1}) = \frac{1}{\sqrt2}\ket{00} + \frac12\ket{01} + \frac12\ket{11}$.

We can check.

$Tr_B (\rho_{AB}) = \sum_i (I \otimes \bra i) \rho_{AB} (I \otimes \ket i)$ (let's pick computational basis).

$Tr_B[\ket\psi\bra\psi_{AB}] = \sum_i (I \otimes \bra i) \ket\psi\bra\psi (I \otimes \ket i)$

$= (I \otimes \bra 0) \ket\psi\bra\psi (I \otimes \ket 0)$

$+ (I \otimes \bra 1) \ket\psi\bra\psi (I \otimes \ket 1)$

$= \frac12 \ket0\bra0 + \frac12 \ket+\bra+$.

## Entangled states

We can make a whole "hierarchy" of entangled states, but on that later (distillable entanglement stuff). For now let's just look at "the most entangled" state (standard maximally entangled).

**Definition**:

$\ket{\Phi^+} := \frac{1}{\sqrt d} \sum_x \ket{xx}$.

**Transpose trick**:

$(M \otimes I)\ket{\Phi^+} = (I \otimes M^T)\ket{\Phi^+}$.

For the usecase example see Ex14 (b) solution in [this QC chapter 1 post attachement](/files/2026-09-08-uva-qc-ch1.pdf).

## Decompositions

**Spectral decomposition**:
- for a normal operator - includes hermitian and unitary,
- $\sum_i \lambda_i \ket{\lambda_i}\bra{\lambda_i}$,
- (example) $X = 1\ket+\bra+ -1\ket-\bra-$.

**Singular value decomposition**:
- for any operator,
- $\sum_i s_i \ket{\psi_i}\bra{\psi_i}$,
- (example) $X = \ket0\bra1 + \ket1\bra0$.

**Schmidt decomposition**:
- for a pure state,
- $\sum_i s_i \ket{e_i f_i}$ ($e_i$ and $f_i$ pair you could say is like a "bijection"),
- (example) $\frac12(\ket{00} + \ket{01} + \ket{10} - \ket{11}) = \frac{1}{\sqrt2} \ket{0+} + \frac{1}{\sqrt2} \ket{1-}$.

## Similarity metrics

**Trace distance**:

$T(\rho, \sigma) := \frac12 ||\rho - \sigma||_1$,

where $||M||_1$ is sum of singular values, for hermitian operator sum of absolute values of eigenvalues or $Tr[\sqrt{M^\dagger M}]$.

**Fidelity**

$F(\rho, \sigma) := ||\sqrt\rho \sqrt\sigma||_1$.

Both have monotonicity and invariance under isometries, but only fidelity has Uhlmann's theorem. So basically: use trace distance, but if need to prove something - switch to fidelity, purify and apply Uhlmann to reach a contradiction.

## Other properties

Of course, this post doesn't cover all the properties of mentioned constructs. So reader is still left to do some homework.

## References

QIT course description: https://coursecatalogue.uva.nl/en/courses/2026/1/61047

QIT lecture notes: `Walter, M., & Ozols, M. (2022). Lectures notes on quantum information theory. University of Amsterdam, Tech. Rep.`

(this is APA from Google Scholar, but the notes used in this post are a little updated - last compiled 25 August 2025)

Purification: https://en.wikipedia.org/wiki/Quantum_state_purification

Created at: 2026-10-25

Last updated at: 2026-10-25
