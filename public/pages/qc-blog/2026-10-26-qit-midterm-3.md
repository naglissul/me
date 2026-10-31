# QIT midterm recap: information

This is part 3 of 3 for QIT midterm recap. See [Part 1 (about states) here](/2026-10-25-qit-midterm-1) and [Part 2 (about channels) here](/2026-10-25-qit-midterm-2).

For better intuition regarding (quantum) information theory basics, reader is also encouraged to take a look at (containing errors) [The Science Guild mini lecture about Holevo bound](https://drive.google.com/file/d/1kAact2i_PEO0S9HMvB_28umF9riLXJYj/view), however, I will repeat here (what I think are) the most important points. Or for intormation theory intuition you can just read the beginning of the original Shannon's paper. It's quite good and easily readable.

## Classical information

**Shannon entropy**:
- $H(p) := -\sum_x p_x \log p_x$,
- how chaotic is the distribution, how much information we gain on average,
- nonnegative, upperbounded by a log of the amount of nonzero probabilities, strictly concave,
- monotonous ($H(XY) \geq H(Y)$), subadditive ($H(X) + H(Y) \geq H(XY)$).

**Example**

(marginals)

<div style="display: flex; gap: 10px"><div>

|x|p(x)|
|--|--|
|0|0.6|
|1|0.1|
|2|0.3|
</div><div>

|y|p(y)|
|--|--|
|0|0.75|
|1|0.25|
</div></div>

(joint)

|x|y|p(x,y)|
|--|--|--|
|0|0|0.5|
|0|1|0.1|
|1|0|0|
|1|1|0.1|
|2|0|0.25|
|2|1|0.05|

$H(X,Y) = - (0.5 \log 0.5 + 0.1 \log 0.1 + 0 + 0.1 \log 0.1 + 0.25 \log 0.25 + 0.05 \log 0.05) \approx 1.88$ (bits per symbol pair),

$H(X) = -(0.6 \log 0.6 + 0.1 \log 0.1 + 0.3 \log 0.3) \approx 1.30$ (bits per symbol),

$H(Y) = -(0.75 \log 0.75 + 0.25 \log 0.25) \approx 0.81$ (bits per symbol).

Indeed
- $1.88 \leq \log 5 \approx 2.32$,
- $1.88 \geq 1.30$, $1.88 \geq 0.81$,
- $1.88 \leq 1.30 + 0.81 = 2.11$.

**Shannon's source coding theorem**

We can compress "asymptotically big" ($\exists n_0. n \geq n_0 \implies $ can compress) blocks of data iff compression rate  exceeds entropy (for whatever error) ($R > H(p)$, $n \rightarrow_{compress} nR$).

Using example above:
- choose $R = 2 > 1.88$ (bits per symbol),
- choose random $\delta = 0.1 \in (0;1)$ (probability that encoding lose info),
- have encoding for this, when $n$ is very big.

But if we pick $R = 1.5 < 1.88$, then we wouldn't have a compression scheme for a very big $n$.

**Typical sets**

_Used for source coding theorem proof._

Set of $n$-sized blocks, whose average symbol "information gain" is close to $H(p)$. Or in other words, probability of the typical sequence is "close to" $2^{-nH(p)}$.

We basically pick from out distribution the more likely symbols, and throw out the less likely (that gives us the error).

Not epanding here much with formalisms.

## Quantum information

**Von Neumann entropy**:
- $H(\rho) = - Tr[\rho log \rho]$,
- entropy of a quantum state, treating eigenvalues as a probability distribution, measurement as sampling,
- nonnegative, upper bounded by the rank (number of non zero eigenvalues), strictly concave,
- (continuous, invariant under isometries).

**Example**

$\rho = 0.5\ket{00}\bra{00} + 0.1\ket{01}\bra{01} + 0.35\ket{10}{10} + 0.05\ket{11}\bra{11}$.

$H(\rho) = - Tr[(0.5\ket{00}\bra{00} + 0.1\ket{01}\bra{01} + 0.35\ket{10}{10} + 0.05\ket{11}\bra{11})$

$(\log 0.5\ket{00}\bra{00} + \log 0.1\ket{01}\bra{01} + \log 0.35\ket{10}{10} + \log 0.05\ket{11}\bra{11})]$

$= H(\{0.5, 0.1, 0.35, 0.05\}) \approx 1.58$ (qubits per state).

**Shumacher's compression**

We can compress (using quantum channels) "asymptotically big" ($\exists n_0. n \geq n_0 \implies $ can compress) set of state copies iff compression rate (qubits per state) exceeds entropy (for whatever error) ($R > H(\rho)$, $n$ states $\rightarrow_{compress} nR$ qubits).

To prove this we use projectors on typical subspaces (whatever that is).

## Other properties and proofs

Of course, there's A LOT of stuff more to this, than I mentioned, but these, I think, are the most important points.

## References

The Science Guild mini lecture about Holevo bound: https://drive.google.com/file/d/1kAact2i_PEO0S9HMvB_28umF9riLXJYj/view (based on Nielsen and Chuang and original Shannon's paper)

`Walter, M., & Ozols, M. (2022). Lectures notes on quantum information theory. University of Amsterdam, Tech. Rep.`

Created at: 2026-10-26

Last updated at: 2026-10-26
