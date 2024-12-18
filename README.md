
# Tumi Mundo: Interactie Story Active

## Beschrijving

### Eind product:

<img width="274" alt="image" src="https://github.com/user-attachments/assets/258013db-288b-4ecf-b2c7-2a40fc9e699a" />

### Interactie

<img width="278" alt="image" src="https://github.com/user-attachments/assets/ba1701bd-17d3-4251-8e84-6ff646507b25" />

Drie belangrijke buttons bepalen de interactie tussen de gebruiker en de site.

<img width="204" alt="image" src="https://github.com/user-attachments/assets/02096882-2ed5-46e0-8324-86664c40c180" />

- De play/pause button: De play/pause button speelt de audio/tekst zodat de gebruiker het verhaaltje op stop kan zetten wanneer zij/hij vind dat dat nodig is. 

Feedback: Wisselt van kleur en schakelt daarna door naar de pauze knop, andersom kan je dus weer hierop klikken om weer terug te wisselen naar de play knop. Daarnaast stopt het dus en speelt het de tekst.

- De volume knop: Met het klikken op de volume knop opent de browser een slider, die het geluid van de browser aanpast. 

Feedback: Opent een slider die het mogelijk maakt om van volume te wisselen. 

#### De back button 

<img width="282" alt="image" src="https://github.com/user-attachments/assets/616ee160-eb55-455f-a10f-890a52b8ddb7" />
<img width="88" alt="image" src="https://github.com/user-attachments/assets/bfbb81fb-4c56-46ed-9621-b5438ffe0a02" />

- De back button: De button zorgt ervoor dat je een ander verhaaltje kan kiezen

Feedback: Veranderd van kleur tijdens hoveren, Eenmaal na klikken ga je naar de vorige pagina.

#### Video van interactie:


https://github.com/user-attachments/assets/c2c6cdfe-0848-48c6-8798-c18a2cb0242e


### User test

Tijdens het testen van de volume knop, leken mensen vooral te neigen naar dat dit het geluid zou muten en weer unmuten. Pas na erop klikken zagen mensen dat het een slider was.

Een kleine tip tijdens de user-test: Mensen klikken vaak weer ergens op het scherm om de slider weer te verwijderen, en vaak zagen ze deze niet helemaal. Mis dus een interactie toevoegen waarbij alleen tikken op het scherm weer nodig is, evenals weer klikken op de button.

## Kenmerken

- Mobile first: Met mobile first heb ik dit keer niet gewerkt met media queries, maar ik heb alles absolute units gegeven. Units als '%' of 'vh' enzovoort. Vele componenten hadden ook
  een absolute of fixed potition waarbij ik bijvoorbeeld top en bottom gebruik.
  
> header {
    position: fixed;
    top: 5%;
    left: 2%;
    grid-area: header;
}

- In javascript wisselt hij tussen de hidden en niet hidden state, hij zet deze tussen true en false.

- In css worden de buttons als niks gestyld, en worden de images binnen deze buttons geplaatst, zodat de functie van de button word behouden.

- Gebruik van grid areas voor een goede flow.

## Bronnen
