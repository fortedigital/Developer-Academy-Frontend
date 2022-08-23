# Oppgaver

## Checkpoint 1 - Start

1. List ut dummy-pizzaer på _Bestill_-siden (`pages/NewOrder.tsx`) ved bruk av PizzaCard-komponenten (denne viser foreløpig kun navnet på pizzaen).
   - `pizzas`-staten inneholder et array med objekter av typen `IPizza` - disse må mappes ut med Array.map()
2. Endre PizzaCard til å også vise prisen på pizzaen (bruk en `<p>`-tag). Fremhev prisen ved å sette følgende klasser i `className`:
   - `text-lg` - øker font-størrelsen til 18px
   - `font-bold` - gjør teksten fet
3. Endre PizzaCard til å også vise bilde av pizzaen (bruk en `<img>`-tag). Sett følgende klasser i `className`:
   - `basis-1/2` - gjør at bildet fyller opp halve kortet
   - `object-cover` - gjør at bildet dekker hele containeren uten å miste aspect ratio

### Ressurser

- [How to use Array.map() to render data in React](https://linguinecode.com/post/how-to-use-map-react)
- [Tailwind CSS docs](https://tailwindcss.com/)
- [Typescript Interfaces](https://www.typescriptlang.org/docs/handbook/interfaces.html)

## Checkpoint 2 - Hent pizzaer fra API

1. `fetchAllPizzas()` returnerer per nå kun dummydata. Modifiser funksjonen til å ta i bruk `fetch()` for å hente data fra APIet og returner dette istedet.
   - Endepunktet som skal tas i bruk er `https://kjetilpizzaapi.azurewebsites.net/api/pizza`

_Bestill_-siden skal nå vise de nye pizzaene fra APIet.

### Ressurser

- [Using the Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

## Checkpoint 3 - Legg til og fjern fra bestilling

1. Legg til en knapp på PizzaCard med teksten "Legg til" og en onClick som kaller på `onAddToOrder()`.

   - Her kan du bruke `Button`-komponenten. Denne har to props som kan brukes til styling: `variant` og `size`.
   - Eksempel: `variant="outlined"` og `size="small"`

     ![PizzaCard med knapp](/docs/assets/pizzacard-with-button.jpg)

2. I `NewOrder.tsx`, modifiser `handleAddToOrder()` så den oppdaterer `shoppingCartItems` med valgt pizza.
   - Pizzaer du har valgt skal nå automatisk vises i handlekurven
3. Items'ene i handlekurven har en Fjern-knapp som allerede er koblet opp mot `handleRemoveFromOrder()`. Ferdigstill denne funksjonen slik at man kan fjerne en item fra `shoppingCartItems`.
   - Tips: Funksjonen tar imot `itemIndex` som parameter. Ved hjelp av `Array.filter()` kan man lage en filtrert kopi av `shoppingCartItems`, slik at den inneholder alle tidligere items som har en index som ikke er lik `itemIndex`.

### Ressurser

- [Push an element into a state Array in React](https://bobbyhadz.com/blog/react-push-to-state-array)
- [Filter array of objects by index](https://stackoverflow.com/a/55141059)
- [Using the State Hook - React](https://reactjs.org/docs/hooks-state.html)

## Checkpoint 4 - Post bestilling til API

1. Modifiser `postOrder()`-funksjonen i `api/postOrder.ts` slik at den kan poste en bestilling til APIet ved hjelp av en `fetch()` call
   - Endepunktet som skal tas i bruk er `https://kjetilpizzaapi.azurewebsites.net/api/orders`
2. "Bestill"-knappen nederst i handlekurven kaller på `handleCompleteOrder()`. Legg til følgende logikk i denne funksjonen:

   - Generer et body-objekt av typen `IPostOrder`. Dette objektet forventer to properties: `userId` og `pizzaIds`
     - Sett `userId` til **1**. Vanligvis hadde man hentet dette fra innlogget session, men her hardkoder vi en bruker-ID isteden.
     - Siden `pizzaIds` forventer et array med kun IDer, må IDene til pizzaene i `shoppingCartItems` mappes ut til et nytt array. Sett dette arrayet som `pizzaIds`.
   - Kall på `postOrder()`-funksjonen fra steg 1 og gi den body-objektet som parameter.
   - Tøm handlekurven etter at en bestilling er gjennomført (sett state til å være et tomt array)

**_Ekstraoppgave_**

- Vis en alert til brukeren som sier at bestillingen er gjennomført med `alert()`

### Ressurser

- [Using Fetch - Uploading JSON data](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#uploading_json_data)
- [Window.alert()](https://developer.mozilla.org/en-US/docs/Web/API/Window/alert)

## Checkpoint 5 - Vis liste over alle bestillinger

1. List ut dummy-bestillinger på _Mine bestillinger_-siden (`pages/MyOrders.tsx`) ved bruk av OrderItem-komponenten
   - `orders`-staten inneholder et array med objekter av typen `IOrder` - disse må mappes ut med Array.map()
2. `fetchUserOrders()` returnerer per nå kun dummydata. Modifiser funksjonen til å ta i bruk `fetch()` for å hente data fra APIet og returner dette istedet.
   - Endepunktet som skal tas i bruk er `https://kjetilpizzaapi.azurewebsites.net/api/orders/BRUKER_ID` (_BRUKER_ID_ er en placeholder)
   - Funksjonen tar imot parameteret `userId`. Kombiner `userId` med endepunktsadressen ved hjelp av f.eks. en template literal (bytt ut _BRUKER_ID_-placeholderen).

Bestillingene fra APIet skal nå vises på _Mine bestillinger_-siden.

### Ressurser

- [Template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)

## Checkpoint 6 - Vis detaljer om en bestilling

1. Legg til en knapp i OrderItem-komponenten med teksten "Se detaljer" og en onClick som kaller på `onCheckDetails()`.

   - Her kan du bruke Button-komponenten, f.eks:

     ![OrderItem](/docs/assets/orderitem.jpg)

2. I `MyOrders.tsx`, sett OrderItem sin `onCheckDetails`-prop til å sette valgt bestilling som `selectedOrder`.
3. Vis OrderDetails-komponenten når en bestilling er valgt, altså når `selectedOrder` ikke er undefined. OrderDetails tar inn `order` som prop - her skal du sette `selectedOrder`.

Bestillingsdetaljer skal nå vises på siden når du trykker på "Se detaljer"-knappen.

### Ressurser

- [Conditional Rendering in React](https://reactjs.org/docs/conditional-rendering.html#inline-if-with-logical--operator)
