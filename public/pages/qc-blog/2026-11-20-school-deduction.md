# Deduktyvūs mokyklos įrodymai

Šiame straipsnyje apžvelgimama dedukcija, supažindinama su nuosekliu ir tiksliu matematikos įrodymų pateikimu. Skirta 12 kl. pamokos vedimui [Šimtuke](https://www.simtukas.lt).

## Apšilimas

Pitagoro teoremos įrodymas

![](/images/2026-11-20-school-deduction/image.png)

Iš kur žinom, kad
- sumos kvadrato formulė teisinga,
- trikampių lygumo požymiai teisingi,
- (galime net nusigauti iki) ar trikampio visų kampų suma 180?

Kiek giliai galime "knisti" ir klausti, kaip įrodyti?

![](/images/2026-11-20-school-deduction/image_1.png)

## Aristotelis - silogizmai ir dedukcija 350 pr. Kr.

Kad atsakytume į klausimą, kaip giliai galime "knisti" - išsiaiškinkime **kaip** knisti.

Silogizmas - argumentas, kuriam pritaikytas deduktyvus aiškinimas. Deduktyvus aiškinimas - parodoma, kad iš prielaidos galima gauti išvadą, tačiau nėra klausiama, ar prielaida yra teisinga.

Standartinis silogizmo pavyzdys:

```
Visi žmonės yra mirtingi.
Sokratas yra žmogus.
Taigi, Sokratas yra mirtingas.
```

Kitas pavyzdys:

```
Vienaragiai egzistuoja.
Vienaragiai turi kailį iš blizgučių.
Taigi, egzistuoja kailis iš blizgučių.
```

Šiame pavyzdyje mūsų nedomina, ar vienaragiai iš tikro egzistuoja. Mums svarbu, kad **jei** vienaragiai egzistuoja, tuomet turėsime ir kailį iš blizgučių.

## Euklido elementai 300 pr. Kr.

Lygiašonio trikampio požymis.

![](/images/2026-11-20-school-deduction/image_2.png)

![](/images/2026-11-20-school-deduction/image_3.png)

![](/images/2026-11-20-school-deduction/image_4.png)

![](/images/2026-11-20-school-deduction/image_5.png)

![](/images/2026-11-20-school-deduction/image_6.png)

![](/images/2026-11-20-school-deduction/image_8.png)

Galiausiai viskas pasibaigė ties postulatais (aksiomomis) ir apibrėžimais.

## Matematika ir skaičiavimai

Iš esmės, matematika pati iš savęs neturi tikslaus apibrėžimo, kas yra tinkamas ar netinkamas įrodymas - įrodymas neprivalo būti formalus. Tačiau po XX a. atradimų ir sukurto kompiuterių mokslo matematika tapo tiksliai suformalizuota, ir nors nėra "įrodymo", yra priimta, kad kitokio varianto matematikos įrodymams nėra, kaip kad iš eilės atliekamų formulių skaičiavimų su sistemos aksiomomis ir skaičiavimo taisyklėmis.

Svarbu paminėti: įrodymo neegzistavimas nereiškia, kad teiginys yra klaidingas. Juolab, visuomet aksiomatinė sistema turės teiginių, kurie yra teisingi, bet jų neįmanoma įrodyti (incompleteness).

Taigi, dabar galime pagaliau žvilgtelti į tikslius aksiomatinių sistemų apibrėžimų ir taikymų pavyzdžius (eikime dabar "nuo dugno").

## Abstrakti algebra (lauko aksiomos)

Realieji skaičiai su daugyba ir sudėtimi yra laukas.

Užduotis: įrodyti, kad $(a+b)^2 = a^2 + 2ab + b^2$.

Aksiomos:
```
1. [Perstatomumas] 'a+b = b+a' bei 'a*b = b*a'
2. [Jungiamumas] '(a+b)+c = a+(b+c)' bei '(a*b)*c = a*(b*c)'
3. [Skirstomumas] 'a*(b+c) = a*b + a*c'
4. [Vienetas] egzistuoja '1' ir '0', kad 'a*1 = 1*a = a' ir 'a+0 = 0+a = a'
5. [Atvirkščias] egzistuoja '-a' ir '1/a', kad '-a + a = a + -a = 0' ir '1/a * a = a * 1/a = 1'
6. [Vienetų išskirtinumas] '0 ≠ 1'
```

_Komentaras: + ir * yra 'uždaros' operacijos, t.y. sudėjus ar sudauginus du realiuosius skaičius gausime realųjį skaičių._

Įrodymas:

$(a+b)^2 = (a+b)(a+b) =$ [skirst.]

$= (a+b)a + (a+b)b =$ [perst., perst.]

$= a(a+b) + b(a+b) =$ [skirst., skirst.]

$= (aa + ab) + (ba + bb) =$ [jung.]

$= ((aa + ab) + ba) + bb =$ [jung.]

$= (aa + (ab + ba)) + bb =$ [perst.]

$= aa + (ab + ab) + bb =$ [skirst.]

$= aa + (a+a)b + bb =$

$= ((a \cdot a) + ((a + a) \cdot b)) + (b \cdot b) = a^2 + 2ab + b^2$.

_Perstatomumas - commutativity, jungiamumas - associativity, skirstomumas - distributivity._ 

## Propozicinė logika (žemiausia)

Užduotis: sukonstruoti teiginių įrodymus, naudojantis natūraliąja dedukcija (Fitch žymėjimas).

Aksiomos (nėra idealiai tikslios, panašios į sekvencinius skaičiavimus):
```
1. [IR elim 1] Jei 'B ir C', tai 'B'
2. [IR elim 2] Jei 'B ir C', tai 'C'
3. [IR įved] Jei 'B' ir 'C', tai 'B ir C'
4. [ARBA elim] Jei 'A arba B' ir 'jei A, tai C' ir 'jei B, tai C', tai 'C'
6. [ARBA įved 1] Jei 'A', tai 'A arba B'
7. [ARBA įved 2] Jei 'A', tai 'B arba A'
```

Pavyzdys:

Įrodyti, kad jei 'A ir (B ir C)', tai '(A ir B) ir C'.

||||
|-|-|-|
| 1. | A ir (B ir C) | prielaida |
| 2. | A | IR elim 1, 1 |
| 3. | B ir C | IR elim 2, 1 |
| 4. | B | IR elim 1, 3 |
| 5. | C | IR elim 2, 3 |
| 6. | A ir B | IR įved, 2, 4 |
| 7. | (A ir B) ir C | IR įved, 6, 5 |

![](/images/2026-11-20-school-deduction/image_7.png)

Antras pavyzdys:

![](/images/2026-11-20-school-deduction/image_9.png)

## Daugiau propozicinės logikos taisyklių (įrodymo būdai)

- **Prieštaros metodas**
- Kontrapozicija

## Kitos aksiomatinės sistemos

- Peano natūraliųjų skaičių aksiomos
- Zermelo-Frankel aibių aksiomos
- Hilberto skaičiavimai
- **Hilberto geometrijos aksiomos**

## Užduotys

_Čia (galbūt) bus pridėti užduočių su sprendimais PDF failai._

## Šaltiniai

Euklido elementai: https://farside.ph.utexas.edu/Books/Euclid/Elements.pdf

Aristotel's Prior Analytics: https://classics.mit.edu/Aristotle/prior.html

Dr. Adomo Birštuno Algoritmų teorijos kursas VU: https://klevas.mif.vu.lt/~adomas/konspektai/AlgorithmTheory.pdf

Natural deduction examples: https://users.ox.ac.uk/~logicman/carr/NDpack.pdf

https://www.youtube.com/watch?v=6o1kLNEE-d4&list=PLF_J2w5w0Z3E7jZGz-23P6WrKxokXBkHC

https://proofs.openlogicproject.org/

https://www.math.uchicago.edu/~boller/IBL/M162script6.pdf

Sukurta: 2026-11-20

Atnaujinta: 2026-11-20
