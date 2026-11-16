# Mokyklos geometrija (I dalis)

Šiame straipsnyje dalinuosi išsamiai aprašyta 12 kl. išplėtinio kurso matematikos BUP dalimi "Geometrija ir matavimai > Tiesės, plokštumos, kampai erdvėje". Yra keletas netikslumų (jie paminėti), nėra viskas suformalizuota, aksiomos kartais gali atrodyti netiksliai naudojamos, tačiau mokyklos lygiui to sočiai užteks.

## Neapibrėžtos sąvokos

**Terminai**: taškas, tiesė, plokštuma.

![](/images/2026-11-04-school-geometry/image.png)

**Sąryšiai**: priklausymas (taško tiesei, taško plokštumai, tiesės plokštumai), būvimas tarp (taškas tarp dviejų taškų), lygumas (atkarpų bei kampų). _Kas yra atkarpa? Kas yra kampas?_

![](/images/2026-11-04-school-geometry/image_1.png)

![](/images/2026-11-04-school-geometry/image_2.png)

## Aksiomos

**Pirmoji aksioma (A1)**. Per bet kuriuos du taškus eina vienintelė tiesė. _(Hilbert I-1)_

![](/images/2026-11-04-school-geometry/image_3.png)

**Antroji aksioma (A2)**. Per bet kuriuos tris taškus, nesančius vienoje tiesėje, eina vienintelė plokštuma. _(Hilbert I-4)_

![](/images/2026-11-04-school-geometry/image_4.png)

**Trečioji aksioma (A3)**. Jei du tiesės taškai priklauso plokštumai, tai ir tiesė priklauso plokštumai. _(Hilbert I-6)_

![](/images/2026-11-04-school-geometry/image_5.png)

**Ketvirtoji aksioma (A4)**. Jei dvi plokštumos turi bendrą tašką, tai jos turi ir bendrą tiesę, kurioje yra visi bendrieji tų plokštumų taškai. _(Hilbert I-7, I-1, I-4, I-6)_

![](/images/2026-11-04-school-geometry/image_6.png)

_Neprograminė aksioma (A5)_. Bet kokia tiesė turi bent du taškus. _(Hilbert I-2)_

![](/images/2026-11-04-school-geometry/image_7.png)

## Teorema 1

**Per tiesę ir jai nepriklausantį tašką eina vienintelė plokštuma**.

![](/images/2026-11-04-school-geometry/image_8.png)

_Trumpa įrodymo idėja_: paimkime du tiesės taškus bei tašką nesantį tiesėje, ir pagal trijų taškų aksiomą gaukime vienintelę plokštumą.

![](/images/2026-11-04-school-geometry/image_9.png)

_Įrodymas._
1. Pavadinkime tiesę $m$, tašką $A$.
2. Paimkime du tiesės $m$ taškus (A5), pavadinkime $B$ ir $C$.
3. Per $B$ ir $C$ eina tik tiesė $m$ (A1), kuriai taškas $A$ nepriklauso (t. y. $A$, $B$, $C$ nėra vienoje tiesėje).
4. Per $A$, $B$, $C$ eina vienintelė plokštuma (3, A2), pavadinkime $\alpha$ (minėti taškai priklauso šiai plokštumai).
5. Tiesė $m$ priklauso $\alpha$ (2, 4, A3). QED.

## Teorema 2

**Per dvi susikertančias tieses eina vienintelė plokštuma**.

![](/images/2026-11-04-school-geometry/image_10.png)

_Trumpa įrodymo idėja_: paimkime tašką, kur susikerta tiesės, bei dar po tašką iš tiesių, ir pagal trijų taškų aksiomą gaukime vienintelę plokštumą.

![](/images/2026-11-04-school-geometry/image_11.png)

_Įrodymas._
1. Pavadinkime susikertančias tieses $m$ ir $n$, susikirtimo tašką $A$.
2. Paimkime antrą tiesės $m$ tašką (A5), pavadinkime $B$.
3. Paimkime antrą tiesės $n$ tašką (A5), pavadinkime $C$. 
4. $C$ nepriklauso tiesei $m$, nes per $C$ ir $A$ jau eina tiesė $n$ (A1).
5. Per $A$, $B$, $C$ eina vienintelė plokštuma (4, A2), pavadinkime $\alpha$ (minėti taškai priklauso šiai plokštumai).
6. $m$ ir $n$ priklauso plokštumai $\alpha$ (2, 3, A1, 5, A3). QED.

## Teorema 3

**Per dvi lygiagrečias tieses eina vienintelė plokštuma**.

![](/images/2026-11-04-school-geometry/image_12.png)

_Trumpa įrodymo idėja_: paimkime du taškus ant vienos tiesės bei vieną tašką ant kitos tiesės, ir pagal trijų taškų aksiomą gaukime vienintelę plokštumą.

![](/images/2026-11-04-school-geometry/image_13.png)

_Įrodymas._
1. Pavadinkime tieses $m$ ir $n$, jos neturi bendrų taškų, turi bendrą plokštumą.
2. Paimkime du tiesės $m$ taškus (A5), pavadinkime $A$ ir $B$.
3. Paimkime vieną (iš dviejų galimų) tiesės $n$ tašką (A5), pavadinkime $C$.
4. $C$ nepriklauso tiesei $m$, nes priklauso tiesei $n$, o $m$ ir $n$ neturi bendrų taškų.
5. $A$ ir $B$ sudaro vienintelę tiesę $m$ (A1), todėl $A$, $B$, $C$ nėra vienoje tiesėje (4).
6. Per $A$, $B$, $C$ eina vienintelė plokštuma (5, A2), pavadinkime $\alpha$ (minėti taškai priklauso šiai plokštumai).
7. $m$ priklauso plokštumai $\alpha$ (2, A1, 5, A3). _Kodėl $n$ priklauso šiai plokštumai?_

## Padėčių apibrėžimai

**Erdvės tiesės gali sutapti, kirstis, būti lygiagrečios, prasilenkiančios**:
- sutampa - yra ta pati tiesė,
- kertasi - turi bendrą tašką,
- lygiagrečios - neturi bendrų taškų, turi bendrą plokštumą,
- prasilenkiančios - neturi bendrų taškų, neturi bendros plokštumos.

![](/images/2026-11-04-school-geometry/image_15.png)

_Kitų variantų, žinoma, nėra._

**Plokštumos gali sutapti, būti lygiagrečios, susikertančios**:
- sutampa - yra ta pati plokštuma,
- lygiagrečios - neturi bendrų taškų,
- susikertančios - turi bendrą tašką.

![](/images/2026-11-04-school-geometry/image_16.png)

_Kitų variantų, žinoma, nėra._

**Plokštuma ir tiesė gali būti lygiagrečios, tiesė gali kirsti plokštumą, priklausyti plokštumai**:
- lygiagrečios - neturi bendrų taškų,
- kerta - turi vieną ir tik vieną bendrą tašką,
- priklauso plokštumai.

![](/images/2026-11-04-school-geometry/image_17.png)

_Kitų variantų nėra (priklauso plokštumai, kai yra bent du bendri taškai; įrodoma remiantis A3)._

## Atstumų ir kampų apibrėžimai

**Atstumai tarp**:
- dviejų taškų - atkarpos nuo vieno iki kito taško ilgis,
- taško ir tiesės - atstumas tarp taško iki tiesės statmens\*, einančio per duotą tašką, ir tiesės susikirtimo taško,
- taško ir plokštumos - atstumas tarp taško iki plokštumos statmens\*\*, einančio per duotą tašką, ir plokštumos susikirtimo taško,tiesės
- dviejų lygiagrečių tiesių - atstumas tarp bet kurio vienos tiesės tašo iki kitos tiesės,
- dviejų prasilenkiančių tiesių - atstumas tarp statmens abiems tiesėms ir tš tiesių susikirtimo taškų,
- tiesės ir su ja lygiagrečios plokštumos - atstumas tarp bet kurio tiesės taško ir plokštumos,
- dviejų lygiagrečių plokštumų - atstumas tarp bet kurio vienos plokštumos taško ir kitos plokštumos.

![](/images/2026-11-04-school-geometry/image_18.png)

_\* Tiesės statmuo - tiesė, kertanti duotąją tiesę stačiu kampu._

_\*\* Plokštumos statmuo - tiesė, kertanti plokštumą, sudaranti statų kampą su visomis plokštumos tiesėmis (įskaitant prasilenkiančias). Požymis - tiesė statmena (ir kertasi su) dviems besikertančioms plokštumos tiesėms. Šio požymio įrodymas žemiau._

**Kampai tarp**:
- susikertančių tiesių - mažiausias susidaręs kampas susikirtus,
- prasilenkiančių tiesių - kampas tarp vienos tiesės ir kitai tiesei lygiagrečia pirmosios kirstinės,
- tiesės ir plokštumos - jei tiesė yra statmena, kampas tarp tiesės ir bet kurios plokštumos tiesės; jei tiesė nėra statmena (pasviroji), kampas tarp tiesės ir jos projekcijos\* plokštumoje,
- dviejų plokštumų (**dvisienis kampas**) - kampas tarp atitinkamų plokštumų tiesių, statmenų bendrai plokštumų tiesei.

![](/images/2026-11-04-school-geometry/image_20.png)

_\* Pasvirosios (statmenoji) projekcija plokštumoje - tiesė, einanti per pasvirosios ir plokštumos susikirtimo tašką bei per plokštumos statmens, kertančio pasvirąją, ir plokštumos susikirtimo tašką (nesutampantį su pirmoju tašku)._

## Tiesės statmenumo plokštumai požymis (P1)

_Požymis (pakartota)._ Jei tiesė statmena dviems besikertančioms plokštumos tiesėms, ji statmena plokštumai.

_Šiam įrodymui naudoju daug prielaidų, visų čia neįvardinu..._

![](/images/2026-11-04-school-geometry/image_19.png)

_Įrodymas._
1. Pavadinkime plokštumą kertančią tiesę $k$, plokštumą $\alpha$, dvi tieses plokštumoje $a$, $b$.
2. WLOG galime sakyti, kad $a$ ir $b$ susikirtimo taškas sutampa su $k$ ir $\alpha$ bendru tašku - pavadinkime $O$.
3. WLOG pakanka parodyti, kad bet kokia $\alpha$ tiesė, einanti per $O$, yra statmena $k$ - nubrėžkime ir pavadinkimę tą tiesę $c$.
4. Nubrėžkime tiesę, kertančią $a$, $b$, $c$ taškuose $B$, $C$, $D$ atitinkamai.
5. Pažymėkime vienodai nuo $O$ nutolusius $k$ tiesės taškus $A$ ir $A'$.
6. $\triangle AOB = \triangle A'OB$ bei $\triangle AOC = \triangle A'OC$ pagal dvi kraštines ir kampą tarp jų.
7. $\triangle ABC = \triangle A'BC$ pagal tris kraštines.
8. $\triangle ABD = \triangle A'BD$ pagal dvi kraštines ir kampą tarp jų.
9. $\triangle AOD = \triangle A'OD$ pagal tris kraštines.
10. $\angle AOD = \angle A'OD$ (9), bei $\angle AOD + \angle A'OD = 180^\circ$ (gretutiniai), todėl $c \perp k$. QED.

![](/images/2026-11-04-school-geometry/image_21.png)

## Tiesės ir plokštumos lygiagretumo požymis (P2)

_Požymis._ Jei tiesė, nepriklausanti plokštumai, yra lygiagreti vienai plokštumos tiesei, tai ji yra lygiagreti plokštumai.

![](/images/2026-11-04-school-geometry/image_22.png)

_Įrodymas._
1. Pavadinkime plokštumą $\alpha$, plokštumos tiesę $a$, nepriklausančią plokštumai tiesę $k$.
2. Tarkime, $k$ ir $\alpha$ turi bendrą tašką (prieštaros metodas), nepriklausantį $a$  - pavadinkime $N$.
3. $k$ ir $a$ sudaro vienintelę plokštumą - pavadinkime $\gamma$ (T3).
4. $a$ yra vienintelė bendra $\alpha$ ir $\gamma$ tiesė su visais bendrais plokštumų taškais (A4).
5. $N$ taškas priklauso ir plokštumai $\alpha$ (2) ir plokštumai $\gamma$ (3), bet ne bendrai plokštumų tiesei $a$ (2).
6. Prieštara tarp 4 ir 5. QED.

_Antras įrodymo būdas._

![](/images/2026-11-04-school-geometry/image_23.png)

## Trijų statmenų abiejų teoremų santrauka

![](/images/2026-11-04-school-geometry/image_24.png)

## Trijų statmenų teorema

_Teorema._ Jei pasvirosios projekcija statmena tiesei plokštumoje, toji tiesė yra statmena ir pasvirajai.

![](/images/2026-11-04-school-geometry/image_25.png)

_Įrodymas._
1. $PA$ statmena $m$ ($PA$ yra $\alpha$ statmuo ir $m \in \alpha$).
2. $AB$ statmena $m$ (prielaida).
3. $A$, $B$, $P$ sudaro vienintelę plokštumą $\beta$ (A2), kurioje yra tiesės $AB$, $AP$, $PB$ (A3).
4. $m$ statmena plokštumai $\beta$ (P1, 3), todėl ir statmena $PB$. QED.

## Trijų statmenų teoremai atvirkštinė teorema

_Teorema._ Jei pasviroji statmena tiesei plokštumoje, toji tiesė statmena ir pasvirosios projekcijai.

![](/images/2026-11-04-school-geometry/image_26.png)

_Įrodymas._
1. $PA$ statmena $m$ ($PA$ yra $\alpha$ statmuo ir $m \in \alpha$).
2. $PB$ statmena $m$ (prielaida).
3. $A$, $B$, $P$ sudaro vienintelę plokštumą $\beta$ (A2), kurioje yra tiesės $AB$, $AP$, $PB$ (A3).
4. $m$ statmena plokštumai $\beta$ (P1, 3), todėl ir statmena $AB$. QED.

## Nepaminėti dalykai, esantys programoje

- Nagrinėjami ir braižomi stereometrijos brėžiniai bei sprendžiami įvairūs uždaviniai.
- Mokomasi rasti ir pavaizduoti brėžinyje dvisienį kampą.

## Ateičiai

Ateityje bus patikslintas turinys, remiantis daugiau šaltinių, padaroma mini literatūros analizė. Taip pat viskas formalizuojama su Lean.

## Šaltiniai

Daug įrodymų ir apibrėžimų yra tiesiog sugalvota Naglio, remiantis NŠA patvirtintais VBE užduočių sprendimais, bei neįvardintais mokykliniais vadovėliais.

David Hilbert aksiomos iš Geometrijos pagrindų (1899) bei šių aksiomų apžvalgos: https://en.wikipedia.org/wiki/Hilbert%27s_axioms

_Tiksli BUP kopija paimta iš https://emokykla.lt/bendrosios-programos/visos-bendrosios-programos/5?types=7&ct=6 puslapio 2026-11-04:_

```
Mokoma(si) stereometrijos aksiomų:

    per bet kuriuos du taškus eina vienintelė tiesė; 
    per bet kuriuos tris taškus, nesančius vienoje tiesėje, eina vienintelė plokštuma; 
    jei du tiesės taškai priklauso plokštumai, tai ir tiesė priklauso plokštumai; 
    jei dvi plokštumos turi bendrą tašką, tai jos turi ir bendrą tiesę, kurioje yra visi bendrieji tų plokštumų taškai.

Mokoma(si) įrodyti teoremas:

    per tiesę ir jai nepriklausantį tašką eina vienintelė plokštuma; 
    per dvi susikertančias tieses eina vienintelė plokštuma; 
    per dvi lygiagrečias tieses eina vienintelė plokštuma.

Aptariamos erdvės tiesių ir plokštumų tarpusavio padėtys:

    erdvės tiesės gali sutapti, kirstis, būti lygiagrečios, prasilenkiančios; 
    plokštumos gali sutapti, būti lygiagrečios, susikertančios; 
    plokštuma ir tiesė gali būti lygiagrečios, tiesė gali kirsti plokštumą, priklausyti plokštumai.

Nagrinėjami atstumai ir kampai erdvėje:

    atstumai tarp dviejų taškų, taško ir tiesės, taško ir plokštumos, dviejų lygiagrečių ir prasilenkiančių tiesių, tiesės ir su ja lygiagrečios plokštumos, dviejų lygiagrečių plokštumų; 
    kampai tarp susikertančių ir tarp prasilenkiančių tiesių, tarp tiesės ir plokštumos.

Apibrėžiamas dvisienis kampas, mokoma(si) jį rasti bei pavaizduoti brėžinyje.

Apibrėžiama, kokia tiesė vadinama statmeniu plokštumai, įrodomas tiesės ir plokštumos statmenumo požymis.

Apibrėžiama pasviroji plokštumai ir jos statmenoji projekcija plokštumoje.

Įrodomas tiesės ir plokštumos lygiagretumo požymis. 

Įrodomos trijų statmenų ir jai atvirkštinė teoremos.

Nagrinėjami ir braižomi stereometrijos brėžiniai bei sprendžiami įvairūs uždaviniai.
```

Sukurta: 2026-11-16

Atnaujinta: 2026-11-16
