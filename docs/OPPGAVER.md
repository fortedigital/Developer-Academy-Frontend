# Oppgaver

## Checkpoint 1 - Start

1. List ut dummy-pizzaer på Bestill-siden (`NewOrder.tsx`) ved bruk av PizzaCard-komponenten.
   - Denne viser foreløpig kun navnet på pizzaen
2. Endre PizzaCard til å også vise prisen på pizzaen
3. Endre PizzaCard til å også vise bilde av pizzaen

`

### Ressurser

- [How to use Array.map() to render data in React](https://linguinecode.com/post/how-to-use-map-react)
- [Tailwind CSS docs](https://tailwindcss.com/)

## Checkpoint 2 - Hent pizzaer fra API

1. `fetchAllPizzas()` returnerer per nå kun dummydata. Modifiser funksjonen til å ta i bruk `fetch()` for å hente data fra APIet og returner dette istedet.
   - Endepunktet som skal tas i bruk er `https://kjetilpizzaapi.azurewebsites.net/api/pizza`

### Ressurser

- [Using the Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

## Checkpoint 3 - Legg til og fjern fra bestilling

1. Legg til en knapp på PizzaCard med teksten "Legg til" og en onClick som kaller på `onAddToOrder()`.

   - Her kan du bruke `Button`-komponenten. Denne har to props som kan brukes til styling: `variant` og `size`.
   - Eksempel:
  
     ![PizzaCard med knapp](/docs/assets/pizzacard-with-button.jpg)

2. I `NewOrder.tsx`, modifiser `handleAddToOrder()` så den oppdaterer shoppingCartItems med valgt pizza.
   - Den valgte pizzaen skal da vises i handlekurven.
3. Items'ene i handlekurven har en Fjern-knapp som allerede er koblet opp mot `handleRemoveFromOrder()`. Modifiser denne funksjonen så en item faktisk blir fjernet fra shoppingCartItems.
   - Funksjonen tar imot indexen til itemen som skal fjernes. Ved hjelp av `Array.filter()` kan man lage en filtrert kopi av shoppingCartItems, slik at den inneholder alle tidligere items minus den som skal fjernes.

### Ressurser

- [Push an element into a state Array in React](https://bobbyhadz.com/blog/react-push-to-state-array)
- [Filter array of objects by index](https://stackoverflow.com/a/55141059)

## Checkpoint 4 - Post bestilling til API

1. Legg til et `fetch()` call som poster JSON-data til APIet i `api/postOrder.ts`
   - Endepunktet som skal tas i bruk er `https://kjetilpizzaapi.azurewebsites.net/api/orders`
2. "Bestill"-knappen nederst i handlekurven kaller på `handleOrderComplete()`. Legg til logikk i denne funksjonen som kaller `postOrder()`
   - IDen til brukeren deres er 1.
   - APIet tar bare i mot pizzaIds, så map ut IDene til pizzaene i handlekurven.

### Ressurser

- [Using Fetch - Uploading JSON data](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#uploading_json_data)

## Checkpoint 5 - Vis bestillinger på mine bestillinger siden

1. Ta i bruk `fetchUserOrders` for å mappe ut bestillingene som OrderItem.
2. `fetchUserOrders()` returnerer dummy data, hent ut bestillingene til brukeren ved å fetche APIet med IDen du brukte for å poste dem tidligere.
   - Endepunktet du må fetche fra har ID-en i seg, bruk en template literal for å legge til ID-en i fetchen

### Ressurser

- [Template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)

## Checkpoint 6 - Vis detaljer om bestillinger

1. Lag en knapp i OrderCard som kaller funksjonen `onCheckDetails()` som blir sendt med som en prop. Knappen skal ha teksten 'Se detaljer'
2. Vis OrderDetails når `selectedOrder`-staten i MyOrders inneholder en gyldig ordre. Send med `selectedOrder` til OrderDetails som proppen `order`.

### Ressurser

- [Conditional Rendering in React](https://reactjs.org/docs/conditional-rendering.html#inline-if-with-logical--operator)
