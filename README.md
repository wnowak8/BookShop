# Księgarnia Webowa - README

## Spis treści
 1. [Opis projektu](https://github.com/wnowak8/BookShop#opis-projektu)<br>
 2. [Technologie](https://github.com/wnowak8/BookShop#technologie)<br>
 3. [Instalacja](https://github.com/wnowak8/BookShop#instalacja)<br>
 4. [Uruchomienie](https://github.com/wnowak8/BookShop#uruchomienie)<br>
 5. [API](https://github.com/wnowak8/BookShop#API)<br>
 6. [Struktura projektu](https://github.com/wnowak8/BookShop#struktura-projektu)<br>
 7. [Przyszłe rozszerzenia](https://github.com/wnowak8/BookShop#przyszłe-rozszerzenia)<br>

## Opis projektu
Księgarnia Webowa to aplikacja internetowa umożliwiająca zarządzanie bazą książek poprzez operacje CRUD (Create, Read, Update, Delete). Aplikacja składa się z backendu stworzonego w Nest.js oraz frontendu zbudowanego przy użyciu Angulara. Dane są przechowywane w bazie MongoDB hostowanej na MongoDB Atlas.

## Technologie
- Backend: Nest.js
- Frontend: Angular
- Baza danych: MongoDB Atlas
- Inne: Node.js, TypeScript, Mongoose (dla Nest.js), Bootstrap

## Instalacja
Wymagania wstępne
- Node.js (wersja LTS)
- npm (menedżer pakietów Node.js)
- Konto MongoDB Atlas

### Kroki instalacyjne
1. Klonowanie repozytorium

```bash
git clone https://github.com/wnowak8/BookShop
cd BookShop
```

### Instalacja zależności dla backendu

```bash
cd book-store
npm install
```

### Instalacja zależności dla frontendu

```bash
cd ../book-store-ui
npm install
```
## Uruchomienie

Backend
W katalogu book-store uruchom:

```bash
npm run start:dev
```
Frontend
W katalogu book-store-ui uruchom:

```bash
ng serve
```

Aplikacja będzie dostępna pod adresem http://localhost:4200.

## API
### Endpoints
- GET /books - Pobiera listę wszystkich książek
- GET /books/:id - Pobiera szczegóły książki o danym ID
- POST /books - Tworzy nową książkę
- PUT /books/:id - Aktualizuje książkę o danym ID
- DELETE /books/:id - Usuwa książkę o danym ID

### Model książki
```json
{
  "title": "string",
  "author": "string",
  "genre": "string"
}
```
## Struktura projektu
### Backend
src/</br>
app.module.ts - Główny moduł aplikacji</br>
books/</br>
books.module.ts - Moduł książek</br>
books.service.ts - Serwis książek</br>
books.controller.ts - Kontroler książek</br>
schemas/</br>
book.schema.ts - Schemat Mongoose dla książki</br>
### Frontend
src/</br>
app/</br>
app.module.ts - Główny moduł aplikacji</br>
books/</br>
all-books/ - Komponent listy książek</br>
add-books/ - Komponent dodawania książki</br>
edit-books/ - Komponent edycji książki</br>
book.service.ts - Serwis książek</br>

## Przyszłe rozszerzenia
- Dodanie autoryzacji i uwierzytelniania użytkowników
- Wyszukiwanie i filtrowanie książek
- Recenzje i oceny książek
- Integracja z zewnętrznymi API (np. Google Books)
