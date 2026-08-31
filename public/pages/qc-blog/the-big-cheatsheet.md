# The Big Cheatsheet

Unitary: $U^\dagger U = I$.

Unitary preserves inner product: $\bra{\psi}U^\dagger U \ket{\phi} = \braket{\psi}{\phi}$.

For orthonormal vectors $\braket{\psi_i}{\psi_j} = \delta_{ij}$.

Projector $P^2=P$, eigenvalues $\lambda \in \{0; 1\}$, $P = \sum_i \ketbra{\psi_i}{\psi_i}$, $P_{rank=1} = \ketbra{\psi}{\psi}$, $P_{rank=dim\mathcal H} = I$.

$P \ket\psi = \ketbra{1}{1} (\frac{1}{2} \ket0 + \frac{\sqrt3}{2} \ket1) = \frac{1}{2} \ket1\braket{1}{0} + \frac{\sqrt3}{2} \ket1\braket{1}{1} = \frac{1}{2} \ket1 \cdot 0 + \frac{\sqrt3}{2} \ket1 \cdot 1 = \frac{\sqrt3}{2} \ket1$.

$P \ket\psi = 5\ketbra{0}{0} (\frac{1}{2} \ket0 + \frac{\sqrt3}{2} \ket+) = 5\ketbra{0}{0} (\frac{1}{2} \ket0 + \frac{\sqrt3}{2} \cdot \frac{1}{\sqrt2}(\ket0 + \ket1)) = 5\ketbra{0}{0} (\frac{\sqrt6}{2\sqrt2} \ket0 + \frac{\sqrt3}{2\sqrt2} \ket1) = 5 \cdot \frac{\sqrt6}{2\sqrt2} \ket0$.


Created at: 2026-08-29

Last updated at: 2026-08-29
