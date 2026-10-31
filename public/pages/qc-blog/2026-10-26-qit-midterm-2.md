# QIT midterm recap: channels

This is part 2 of 3 for QIT midterm recap. See [part 1 (about states) here](/2026-10-25-qit-midterm-1) and [part 3 (about information) here](/2026-10-25-qit-midterm-3).

## Quantum channel definition

CPTP map (superoperator):
- (complete positive) $(\Phi \otimes \mathcal I)[\rho] \geq 0$ (adding environment keeps PSD),
- (trace preserving) $Tr(\Phi[\rho]) = Tr(\rho)$.

## Kraus representation

$\Phi[\rho] = \sum_i X_i \rho X_i^\dagger$ (CP), $\sum_i X_i^\dagger X_i = I$ (TP).

## Steinspring representation

$\Phi[\rho] = Tr_E[VMV^\dagger]$ (CP), $V^\dagger V = I$ isometry (TP).

## Derived Choi operator

_Kinda like channel input-output matrix_

$J^\Phi := \sum_{xy} \ket x \bra y \otimes \Phi[\ket x \bra y]$.

$J^\Phi$ is PSD (CP), $Tr_B[J^\Phi_{AB}] = I$ (TP).

## Examples: Kraus

**Bit-flip (X-dephasing)**: $\Phi[\rho] = p X \rho X^\dagger + (1-p) \rho$.

$J^\Phi = p \ket\psi\bra\psi + (1-p)\ket\phi\bra\phi$, where

$\psi = \ket{01} + \ket{10}$ and $\phi = ket{00} + \ket{11}$.

**Phase-flip (Z-dephasing)**: $\Phi[\rho] = p Z \rho Z^\dagger + (1-p) \rho$.

**Depolarizing**: $\Phi[\rho] = p \frac{I}{2} + (1-p) \rho$.

**Amplitude damping**: $\Phi[\rho] = K_0 \rho K_0^\dagger + K_1 \rho K_1^\dagger$, where

$K_0 = \begin{pmatrix} 1 & 0 \\ 0 & \sqrt{1-p} \end{pmatrix}$,

$K_1 = \begin{pmatrix} 0 & \sqrt p \\ 0 & 0 \end{pmatrix}$.

**Phase damping**: $\Phi[\rho] = K_0 \rho K_0^\dagger + K_1 \rho K_1^\dagger$, where

$K_0 = \begin{pmatrix} 1 & 0 \\ 0 & \sqrt{1-p} \end{pmatrix}$,

$K_1 = \begin{pmatrix} 0 & 0 \\ 0 & \sqrt p \end{pmatrix}$.

## Examples: Stinespring

**Amplitude damping**: $\Phi[\rho] = Tr_E[V \rho V^\dagger]$, where

$V\ket0 = \ket{00}$,

$V\ket1 = \sqrt{1-p}\ket{01} + \sqrt p \ket{10}$.

**Phase damping**: $\Phi[\rho] = Tr_E[V \rho V^\dagger]$, where

$V\ket0 = \ket{00}$,

$V\ket1 = \sqrt{1-p}\ket{01} + \sqrt p \ket{11}$.

## Other channel examples

_Left for practise to write Kraus, Steinspring and derive Choi. Might be updated later with solutions._

**Time evolution**: $\Phi[\rho] = U \rho U^\dagger$.

**Instrument** (this one for later, when discussing LOCC channels).

**Trace**: $\Phi[\rho]=Tr[\rho]$.

**Add pure state**: $\Phi[\rho] = \rho \otimes \ket\psi\bra\psi$.

**Completely dephasing channel**: $\Phi[\rho] = \sum_x \bra x M ket x \ket x \bra x$.

**Partial trace**: $\Phi[\rho_{AE}] = Tr_E[\rho_{AE}]$.

**Add state**: $\Phi[\rho] = \rho \otimes \sigma$.

**Measure and prepare**: $\Phi[\rho] = \sum_x \bra x \rho \ket x \sigma_x$ (generalized measurement via expectation value).

## References

`Walter, M., & Ozols, M. (2022). Lectures notes on quantum information theory. University of Amsterdam, Tech. Rep.`

https://en.wikipedia.org/wiki/Quantum_channel

https://felixleditzky.info/teaching/ST23/Felix%20Leditzky%20-%20Math%20595%20Quantum%20channels.pdf

Nielsen and Chuang

https://en.wikipedia.org/wiki/Amplitude_damping_channel

Created at: 2026-10-26

Last updated at: 2026-10-26
