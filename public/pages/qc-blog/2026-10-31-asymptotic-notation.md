# Asymptotic notation in algorithm complexity

This post contains a short summary of big O and other asymptotic functions (based on the references mentioned on the bottom). This is targeted for DSA II second year CS course students at Vrije Universiteit.

## Definitions

**Upper bound**

$f(n) \in \mathcal O(g(n))$ is when

$\Exists c. \Exists n_0. n > n_0 \implies$

$g(n) \leq c \cdot f(n)$.

_f(n) grows no faster than g(n)._

![graphical](/images/big-o-graphical.png)

And also can be defined by the ratio limit going to a constant.

**Lower bound**

$f(n) \in \Omega(g(n))$ is when

$\Exists c. \Exists n_0. n > n_0 \implies$

$g(n) \geq c \cdot f(n)$.

_f(n) grows no slower than g(n)._

![graphical](/images/big-omega-graphical.png)

**Tight bound**

$f(n) \in \Theta(g(n))$ is when

$\Exists c_1, c_2. \Exists n_0. n > n_0 \implies$

$c_1 cdot f(n) \leq g(n) \leq c_2 \cdot f(n)$.

_f(n) grows at the same rate as g(n)._

That means, is both Big O and Big Omega.

![graphical](/images/big-theta-graphical.png)

**Loose upper bound**

$f(n) \in o(g(n))$ is when

$\Forall c. \Exists n_0. n > n_0 \implies$

$g(n) < c \cdot f(n)$.

_f(n) grows slower than g(n)._

That means, is a strict version of Big O, and little o implies Big O. And also can be defined by the ratio limit going to zero.

**Loose lower bound**

$f(n) \in \omega(g(n))$ is when

$\Forall c. \Exists n_0. n > n_0 \implies$

$g(n) > c \cdot f(n)$.

_f(n) grows faster than g(n)._

That means, is a strict version of Big Omega, and little omega implies Big Omega. And also can be defined by the ratio limit going to infinity.

**All summarized (except theta)**

![all graphical](/images/asymptotic-all.png)

## Rigorous examples

$f(n) = 2n^2 + 3n + 1$ is 
- $\mathcal O(n^2)$,
- also $\mathcal O(n^3)$,
- $\Omega(n^2)$,
- also $\Omega(n)$,
- hence $\Theta(n^2)$;
- $o(n^2 \log n)$,
- $\omega(n)$.

_$2n^2 + 3n + 1$ vs $n^3$:_

![image](/images/cube-and-square.png)

_$2n^2 + 3n + 1$ vs $n^2 \log n$:_

![image](/images/square-and-square-log.png)

## Realistic examples

Big O is the most used notation for time complexity in algorithms, probably the only one you will actually use in practise. It tells the upper bound, up to a constant, used for estimating how good the algorithm is, for example, in the technical software engineering interview. We can always take a "bigger one", but we care more about minimizing.

_Binary search is $\mathcal O(\log n)$._

_Algorithm below (which is not meaningful) is $\mathcal O(n) \cdot (\mathcal O(1) + \mathcal O(n)) = \mathcal O(n^2)$._

```
for i=0 to n:
  if (A[i] == 1):
    A[i] swap A[1]
  for j=0 to n:
    A[i] = A[j]
```

Little O is usually used in real analysis, when computing limits by using Peano form of Taylor expansion.

_$\ln(1+x) = x - \frac12 x^2 + \frac13 x^3 + o(x^3)$, where $\frac{o(x^3)}{x^3} \rightarrow 0$._

Big Omega you can see in algorithms, that you want to show are bad, for example, when showing quantum advantage. Or when we just want to show, that our Big O upper bound is really the best we can do. But for basic time complexity estimation for "everyday life" you would probably see just separated best/average/worst cases all in Big O notation.

_Insertion sort is $\Omega(n)$, since we need to go though the whole array either way, but $\mathcal O(n^2)$, since we might have completely shuffled list._

And when we have both Big O and Big Omega, it becomes Big Theta, which is better to have in the algorithmn analysis, since we know that we did the best possible in estimating time complexity.

_Linear search of undetermined amount of items is $\Theta(n)$, since it's $\Omega(n)$ (we need to check all) and $\mathcal O(n)$ (we will need to check more than all)._

Little omega doesn't seem to be used that much, but we could use it in cryptography, for example, when we want to say that there's no way to break this code, because it takes strictly more time than "a lot".

_Brute-forcing a key is $\omega(n^k)$, that is, superpolynomial._

## References

p. 50 `CLRS` Introduction to Algorithms, Fourth Edition, by Thomas Cormen, Charles Leiserson, Ronald Rivest and Clifford Stein

p. 36 `KT` Algorithm Design, by Jon Kleinberg and Eva Tardos

DSA-II lecture slides by Yasamin Nazari.

Examples are not based on any literature, is more of a "googling" result.

https://stackoverflow.com/questions/1364444/difference-between-big-o-and-little-o-notation

https://www.scribd.com/document/839585397/7-Little-oh-and-omega

https://www.geeksforgeeks.org/dsa/asymptotic-notations-and-how-to-calculate-them/

https://learnengineeringforu.blogspot.com/2018/12/analysis-of-algorithms-little-o-and.html

Created on: 2026-10-31

Last updated on: 2026-10-31
