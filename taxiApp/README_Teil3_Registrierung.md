# Ionic Taxi App – Erweiterte Registrierung

## Übersicht
Dieses Projekt erweitert die Taxi-App um eine **erweiterte Registrierung**. Neben Benutzername, E-Mail und Passwort werden nun zusätzliche Felder wie Vorname, Nachname und Telefonnummer erfasst und in der MySQL-Datenbank gespeichert.  

- **Ionic** als Frontend (Formular mit erweiterten Feldern)  
- **Node.js + Express + Sequelize** als Backend  
- **MySQL** als Datenbank zur Speicherung der Benutzer

## Features
- **Erweitertes Registrierungsformular:** Zusätzliche Felder wie `firstName`, `lastName`, `phone`, `type`, `area`.
- **API-Aufruf mit Angular HttpClient:** Daten werden an `POST /api/register` gesendet.
- **MySQL-Datenbank:** Alle Felder werden in der Tabelle `Users` gespeichert.
- **Konsole & Terminal:** Debugging-Informationen in Browserkonsole und Node-Konsole.

## Technologien
![Ionic](https://img.shields.io/badge/Ionic-6.x-blue?logo=ionic&logoColor=white)
![Angular](https://img.shields.io/badge/Angular-15%2B-red?logo=angular&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-14%2B-green?logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express-4.x-lightgrey?logo=express&logoColor=white)
![Sequelize](https://img.shields.io/badge/Sequelize-6.x-blue?logo=sequelize&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-8.0-orange?logo=mysql&logoColor=white)

---

## Schritte zur Implementierung

1. **Erweiterung der Datenbank**  
   - Neue Spalten in der `Users`-Tabelle (z. B. `firstName`, `lastName`, `phone`, `type`, `area`).   
   - ![Eintrag in der DB](tA_screenshots/Teil_3/eintrag_db3.png)

2. **Anpassen des Backend-Codes (Part 2)**  
   - In der `routes/login.js` (oder entsprechendem Router) wird `POST /api/register` erweitert, um die neuen Felder (z. B. `firstName`, `lastName`, `phone`) in der Datenbank zu speichern.  
   - ![Terminal Log](tA_screenshots/Teil_3/ideterminal4.png)

3. **Ionic-Frontend (Part 3)**  
   - Erweitertes Formular in `register.page.html` mit Feldern `firstName`, `lastName`, `phone` usw.  
   - `register.page.ts` schickt die zusätzlichen Felder an den AuthService.
   - ![Browser Konsole](tA_screenshots/Teil_3/konsole2.png)

4. **Registrierungsformular (UI)**
   - ![Register Page UI](tA_screenshots/Teil_3/register_page1.png)

5. **Testen**  
   - `node index.js` im Ordner `backend` → Backend auf Port 3000 starten  
   - `ionic serve` im Ordner `taxiApp` → Ionic-Frontend auf Port 8100 starten  
   - `http://localhost:8100/register` aufrufen, Formular ausfüllen, „Register“ klicken.  
   - Erfolgreiche Einträge in der DB prüfen (z. B. phpMyAdmin oder MySQL Workbench).

---

## Screenshots

1. **Eintrag in der Datenbank**
- ![Eintrag DB](tA_screenshots/Teil_3/eintrag_db3.png)
   
2. **Terminal Log**
- ![Terminal Log](tA_screenshots/Teil_3/ideterminal4.png)

3. **Browser-Konsole**
- ![Konsole](tA_screenshots/Teil_3/konsole2.png)

4. **Register-Page UI**
- ![Register Page](tA_screenshots/Teil_3/register_page1.png)

### Code-Referenzen
- Backend-Routen (z. B. [api/register](https://github.com/dino-2602/newIonicApp/blob/master/taxiApp/src/app/register/register-routing.module.ts)
- User-Model (Sequelize)
- RegisterPage (Frontend)
- AuthService (Frontend)
- Installation & Start

### Backend
cd backend
npm install
node index.js
Server läuft auf http://localhost:3000/.

### Frontend
cd ../taxiApp
npm install
ionic serve
App läuft auf http://localhost:8100/.

### Test
Gehe in den Browser: http://localhost:8100/register
Fülle alle Felder aus und klicke „Register“
Überprüfe die Datenbank, ob der neue Eintrag erstellt wurde.
