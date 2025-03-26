# Ionic – Login & Register mit Node.js Backend

## Übersicht
In diesem Projekt wurde das Frontend einer Ionic-Anwendung mit modernen Login- und Registrier-Funktionen erweitert. Im Hintergrund läuft ein Node.js-basiertes Backend, das Datenbank-Abfragen, Authentifizierung und persistente Speicherung ermöglicht.

- **Frontend:** Verwendung des Ionic Frameworks (inklusive Angular) für die Login- und Register-Ansichten, Styling mit SCSS und responsiver Gestaltung.
- **Backend:** Implementierung mit Node.js, Express und (bei Bedarf) Anbindung an eine MySQL-Datenbank.

## Features
1. **Login & Register Views**
  - Moderne Oberfläche mit Farbverlauf-Hintergrund und animiertem Hover-Effekt.
  - Formulare mit *Reactive Forms* (Angular FormGroup) für E-Mail, Passwort, Name etc.
  - Responsives Layout für mobile Endgeräte.

2. **Benutzerverwaltung**
  - Erstellen und Einloggen von neuen Benutzern.
  - Validierung von Eingaben im Frontend (z. B. E-Mail-Format, Mindestlänge des Passworts).

3. **Backend-Anbindung (Node.js)**
  - REST-API-Endpunkte für Login/Registrierung.
  - (Optional) MySQL-Datenbank für persistente Speicherung.
  - Sicherheitsaspekte wie Hashing von Passwörtern und Grundauthentifizierung.

## Technologien
![Ionic](https://img.shields.io/badge/Ionic-5%2B-blue?logo=ionic&logoColor=white)
![Angular](https://img.shields.io/badge/Angular-v12%2B-red?logo=angular&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-v14%2B-green?logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-4.x-blue)
![MySQL](https://img.shields.io/badge/MySQL-8.x-lightblue?logo=mysql&logoColor=white)
![SCSS](https://img.shields.io/badge/SCSS-3.x-ff69b4?logo=SASS&logoColor=white)

> **Hinweis:** Sensible Daten wie DB-Zugangsdaten oder Tokens werden in `.env`-Dateien oder ähnlichen Config-Files gehalten und **nicht** im Repository abgelegt.

## Schritte zur Implementierung

1. **Frontend – Ionic**
  - **Anlegen bzw. Ergänzen der Login/Registrierungskomponenten**:  
    Die entsprechenden HTML- und TS-Dateien enthalten `FormGroup`, Validierungen und zwei Spalten (`ion-col size="6"`) für Vor- und Nachname bei der Registrierung.
  - **Styling (SCSS / CSS)**:
    - Farbverlauf mit `--primary-color` und `--secondary-color` (linearer Verlauf).
    - Hover-Effekte und Animation (`@keyframes fadeIn`).
    - Responsives Layout über Media Queries (`@media (max-width: 400px)`).

2. **Backend – Node.js / Express**
  - **Server-Grundgerüst**: Express-Server mit Routen für `POST /login` und `POST /register`.
  - **Datenbankanbindung** (optional): Verbindung zu MySQL oder einer anderen DB.
  - **Sicherheitsmaßnahmen**: Passwort-Hashing (z.B. bcrypt), grundlegende Fehlerbehandlung und Statuscodes.

3. **Integration & Testing**
  - **Formulardaten via HTTP** an das Backend senden.
  - **Rückmeldung** (Statuscode, JSON-Response) auswerten; z. B. bei erfolgreicher Registrierung oder Fehlern.
  - **Styling & Usability** optimieren und responsives Verhalten prüfen.

## Screenshots

1. **Login Screen**  
   _Zeigt das Formular mit Email & Password inkl. Spinner bei Loading und Farbübergängen._

2. **Register Screen**  
   _Layout mit zweispaltiger Eingabe (Vor- und Nachname), animierte Hover-Effekte, Farbverlauf._

3. **Backend Routes** (Terminal / Code-Ausschnitt)  
   _Darstellung, wie der Server die Routen `POST /login` und `POST /register` verarbeitet._

*(Füge hier die entsprechenden Bilder ein, falls gewünscht.)*

## Code-Referenzen

- **Frontend (Ionic)**
  - `src/app/auth/login.component.ts` / `.html` / `.scss`
  - `src/app/auth/register.component.ts` / `.html` / `.scss`
- **Backend (Node.js / Express)**
  - `backend/server.js` (Express-Startpunkt)
  - `backend/routes/auth.js` (Login- & Register-Routen)
  - `backend/models/` (Datenbankmodelle, falls Sequelize o. ä. verwendet wird)

## Installation

1. **Repository klonen**
   ```bash
   git clone https://github.com/dein-repo/ionic-auth-app.git
