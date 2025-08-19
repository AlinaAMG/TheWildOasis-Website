# The Wild Oasis

**The Wild Oasis** is een full-stack Next.js project gebouwd met de **App Router**, waarin gebruikers cabines kunnen bekijken, reserveren en beheren. Het project combineert server- en clientcomponenten, data fetching met Supabase, en gebruikersauthenticatie met NextAuth.


## Functionaliteiten

### Home Page
- Hero sectie met een actieknop **"Explore Cabins"** die naar de cabinespagina leidt.

### Cabins Page
- Overzicht van alle cabines met:
  - Prijs
  - Aantal gasten
  - Knop voor **Details** & **Reservation**

### Cabin Details Page (`/cabins/[cabinId]`)
- Toont alle details van een geselecteerde cabine.
- Kalender om een reservering te maken (inloggen vereist).

### Account
- **/account/reservations**:
  - Gebruikers kunnen hun reserveringen bekijken.
  - Reserveringen verwijderen of aanpassen.
- **/account/profile**:
  - Gebruikers kunnen hun profielgegevens updaten.



## Technologieën
  - **Next.js (App Router)** met server- en clientcomponenten
  - **React** (inclusief Context API voor state management)  
  - **Supabase**:
  - Data fetching
  - Data mutation (create, update, delete)
   - **NextAuth**:
  - Inloggen en uitloggen
  - Autorisatie
  -**date-fns** voor datumfunctionaliteiten en kalenderweergave;
  - **Heroicons** voor iconen
  - **Tailwind CSS** voor styling
  - **Server Actions** voor:
  - Profiel bijwerken
  - Reserveringen maken, updaten en verwijderen
  - **Caching** en **shared states** tussen server- en clientcomponenten


## Screenshots

### Home Page
![Home Page]([thewildoasis-homepage.jpg](https://github.com/AlinaAMG/TheWildOasis-Website/blob/master/public/thewildoasis-homepage.jpg)

### Cabins Page
![Cabins Page](https://github.com/AlinaAMG/TheWildOasis-Website/blob/master/public/thewildoasis-cabins.jpg)

### Cabin Details
![Cabin Details Page](https://github.com/AlinaAMG/TheWildOasis-Website/blob/master/public/thewildoasis-cabins-cabinId.jpg)


### Login Page
![Login Page]([thewildoasis-loginpage.jpg](https://github.com/AlinaAMG/TheWildOasis-Website/blob/master/public/thewildoasis-loginpage.jpg)
