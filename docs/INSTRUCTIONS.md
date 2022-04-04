# The web is for everyone - Progressive Enhancement CRUD form

Leren wat Progressive Enhancement is en hoe je dit kan toepassen

## Context

Deze leertaak hoort bij sprint 9 "The Web is for Everyone". Dit is een deeltaak die je individueel uitvoert.

In het college S09W2-01-Progressive-Enhancement wordt behandeld wat Progressive Enhancement is.


## Doel van deze opdracht

Één van de mooiste [principes](https://www.w3.org/DesignIssues/Principles.html) van het web is dat iedereen met een computer en een browser het web kan gebruik. [Het web is voor iedereen](https://www.youtube.com/watch?v=UMNFehJIi0E). Het is geen gecontroleerde (programmeer) omgeving, je kan er gerust van uit gaan dat niemand precies hetzelfde te zien krijgt als wat jij in je browser ziet. Er zijn technische beperkingen, zoals afmetingen van de browser, grootte van het apparaat, manier van interactie, kwaliteit van de hardware, kwaliteit van het netwerk en er zijn mensen, allemaal verschillende mensen ...

In deze opdracht ga je leren wat Progressive Enhancement is en hoe je dit kan toepassen om goede, robuuste, toegankelijke websites te maken. 

## Werkwijze

Opdracht: Voor deze opdracht ga je een CRUD formulier ontwerpen en bouwen volgens het principe van Progressive enhancement. 

<img width="1359" alt="image" src="https://user-images.githubusercontent.com/1391509/161481223-0d6982b3-324c-4b6d-a40e-fd08dcbcea2c.png">


Eerst ga je je verdiepen in wat Progressive enhancement is en hoe je dit kan toepassen voor je opdracht. Daarna ga je een Breakdown schets maken en alle technieken die je wil gebruiken onderzoeken. Vervolgens ga je je ontwerp bouwen.

Deze opdracht gaat over de [analyse](#analyseren), [ontwerp](#ontwerpen) en [bouw](#bouwen) fase van de DLC.

### Analyseren

Eerst ga je je verdiepen in wat _Progressive enhancement_ is en hoe je dit kan toepassen voor je opdracht. 

<details>
<summary>Aanpak</summary>

1. Lees het artikel [Responsive Enhancement](https://24ways.org/2014/responsive-enhancement/) van Jeremy Keith
2. Schrijf wat de _core functionality_ is van het CRUD formulier. 

#### Materiaal analysefase

- [Responsive Enhancement](https://24ways.org/2014/responsive-enhancement/) Jeremy Keith schrijft "Progressive enhancement isn’t a technology. It’s more like a way of thinking." In dit artikel laat hij met een voorbeeld zien hoe je Progressive enhancement kan toepassen. 
- [A minimum viable experience makes for a resilient, inclusive website or app](https://piccalil.li/blog/a-minimum-viable-experience-makes-for-a-resilient-inclusive-website-or-app)
- [The power of progressive enhancement](https://archive.hankchizljaw.com/wrote/the-power-of-progressive-enhancement/) Een voorbeed van het toepassen van _Progressive enhancement_ 


</details>

### Ontwerpen

Als je weet wat de _core functionality_ is van het CRUD formulier kun je een Wireflow teken voor je ontwerp en een Breakdown maken van hoe je dit in 3 lagen kan opbouwen.

<details>
<summary>Aanpak</summary>

1. Schets een Wireflow van jouw CRUD form. Teken alle schermen, met een loading state en succes state die een gebruiker te zien moet krijgen.
2. Maak per scherm een Breakdown met pseudo-code van de 3 lagen die je nodig hebt: HTML en server side, CSS layout en het versturen van het formulier met JS.
3. Onderzoek per techniek wat de ondersteuning is door verschillende browsers met Can I Use. Bv JS Fetch, querySelector, CSS Flexbox en Grid, worden alle HTML elementen altijd ondersteund?

#### Materiaal ontwerpfase

- [The Role of Enhancement in Web Design](https://www.nngroup.com/articles/enhancement/), een goed artikel over waarom een _feature_ een _enhancement_ is.
- [Can I use](https://caniuse.com/) "Can I use" provides up-to-date browser support tables for support of front-end web technologies on desktop and mobile web browsers.

</details>

### Bouwen

Als je weet wat de 3 lagen zijn en hoe de verschillende technieken worden ondersteund kun je beginnen met bouwen.

<details>
<summary>Aanpak</summary>

1. Schrijf eerst de HTML en test wat er gebeurt als elementen niet worden ondersteund
2. Voeg CSS toe, gebruik de cascade voor fallback
3. Voeg de JS toe die je nodig hebt en gebruik _feature detection_ om ervoor te zorgen dat je geen errors krijgt in browsers die bepaalde code niet ondersteunen. 

#### Materiaal bouwfase

- [Learn CSS: The cascade](https://web.dev/learn/css/the-cascade/)
- [Implementing feature detection](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Feature_detection)

</details>



## Criteria

Focus sprint 9 - De focus van deze sprint ligt op gebruiksvriendelijkheid, toegankelijkheid, testen en de testresultaten gebruiken voor het verbeteren van een ontwerp. Server site rendering leren. Progressive enhancement leren. Core functionaliteit kunnen bepalen en implementeren				

Deze leertaak hoort bij het gedragscriterium:

M: Past aangeboden principes en conventies op het gebied van frontend, interface design en vormgeving toe.

Deze opdracht is done als:

- [ ] Er is een Wireflow van het CRUD form met de loading state en succes state
- [ ] Er is een Breakdown met pseudo code waarin duidelijk wordt hoe het CRUD form in de vershillende lagen moet gaan werken
- [ ] Er is gedocumenteerd hoe de verschillende technieken door browsers worden ondersteunden hoe je dit met de CSS cascade en/of JS feature detect kan coderen
- [ ] De schetsen en hhet onderzoek is gedocumenteerd in de Readme en Wiki van de leertaak

