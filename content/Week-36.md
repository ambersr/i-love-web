---
sprint: Sprint 13
---

### 3 september 2025

#### Leervragen

* Welke verschillen merk je tussen het ophalen van data in Node+Liquid (jaar 1) en in Svelte+SvelteKit?

Bij Node en Liquid wordt data altijd eerst op de server opgehaald en in een template geplaatst, waarna de server de kant-en-klare pagina naar de gebruiker stuurt. De pagina zelf verandert daarna nauwelijks en alles wat interactief moet zijn, zoals knoppen of dynamische updates, moet je apart met JavaScript toevoegen. Bij Svelte en SvelteKit werkt het anders omdat data zowel op de server als in de browser kan worden opgehaald en de componenten automatisch reageren op veranderingen. Hierdoor passen updates zich direct aan in de interface en zit interactiviteit standaard ingebouwd, waardoor de pagina veel dynamischer en interactiever aanvoelt.

* Waar liep je vast, en hoe heb je dat opgelost?

Ik liep vast bij het live bekijken van de pagina. In node JS/Liquid wist ik dat dit `npm start` was. Ook de installatie hiervan werd op gegeven moment automatisme. Ik had SvelteKit geïnstalleerd en toen de terminal afgesloten. Alleen toen ik opnieuw de pagina live wilde bekijken kwam er een error. Ik heb samen met Julia gekeken en uiteindelijk kwamen we tot de conclusie dat ik eerst nog `npm i` moest doen voordat ik uiteindelijk `npm run dev -- --open` kon doen.

### 5 september 2025

#### Leervragen

* Hoe bereid je een degelijke feedbacksessie voor?

Eerst zorg ik ervoor dat ik mijn werk op orde heb. Dit houdt in een repo met een livelink naar de website. Daarna lees ik aandachtig de instructies door, als er onduidelijkheden zijn overleg ik dit met mede studenten of met een docent. Zodra ik de instructies helder overleg met verschillende studenten uit mijn squad wie ik feedback kan geven.

* Hoe geef je jouw feedback?

Ik zorg ervoor dat mijn feedback duidelijk maar wel vriendelijk is. Ik probeer eerst uit te leggen wat mijn bevindingen zijn en daarna hoe je dit kunt verbeteren met eventueel nog informatieve bronnen.


* Hoe verwerk je ontvangen feedback?

Eerst inventariseer ik welke feedback ik heb ontvangen en voeg ik moscow labels toe om de taken te prioritiseren. Als ik alleen werk dan assign ik de issue gelijk aan mezelf. Als het in groepsverband is worden de issues in overleg verdeeld en assigned aan de teamleden. Uiteindelijk wordt dit in het projectboard verwerkt en wordt er een deadline aangekoppeld.
