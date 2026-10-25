# QIT midterm recap: states

Quantum Information Theory course at UvA this year has a midterm with allowed handwritten double-sided A4 cheatsheet. So I'll take my chances. Also, that is quite a nice way to review the first 7 lectures. Reader is also encouraged to take a look at the [QC chapter 1 post](/2026-09-08-uva-qc-ch1), since it contains some quite important formal or semi-formal basics that I will try to not repeat here. For better intuition regarding (quantum) information theory basics, reader is also encouraged to take a look at (containing errors) [The Science Guild mini lecture about Holevo bound](https://drive.google.com/file/d/1kAact2i_PEO0S9HMvB_28umF9riLXJYj/view), however, I will repeat here (what I think are) the most important points. It is probably self explanatory, that this post contents are mostly based on this course lecture notes, that are not publicly accessible (or are they?).

This is part 1 of 3 for QIT midterm recap. See [part 2 (about channels) here](/2026-10-25-qit-midterm-2) and [part 3 (about information) here](/2026-10-25-qit-midterm-3).

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
- (standard)
- (uniqueness) all purifications are related by an isometry (if Hilbert space the same size - by a unitary).

## Entangled states

## Decompositions

## More properties

## References

QIT course description: https://coursecatalogue.uva.nl/en/courses/2026/1/61047

QIT lecture notes: `Walter, M., & Ozols, M. (2022). Lectures notes on quantum information theory. University of Amsterdam, Tech. Rep.`

(this is APA from Google Scholar, but the notes used in this post are a little updated - last compiled 25 August 2025)
