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

# Implementierung der Benutzerregistrierung mit Sequelize, Express und Ionic

## Backend: User Model Implementierung (Sequelize)

### **Datei:** `backend/models/user.js`

Hier wird mit Sequelize das Schema für den Benutzer definiert. Die Felder umfassen:
- `username` (eindeutig, erforderlich)
- `password` (erforderlich)
- `email` (eindeutig, erforderlich)
- `firstName`, `lastName`, `phone` (optionale Felder)

```javascript
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    phone: DataTypes.STRING,
  });
  return User;
};
```

### **Warum?**
Dieses Model stellt sicher, dass alle Benutzerinformationen korrekt strukturiert in der MySQL-Datenbank gespeichert werden.

---

## Backend: API-Endpunkt für Registrierung

### **Datei:** `backend/routes/login.js` (oder in separater Datei für Benutzer-Routen)

Hier wird der Registrierung-Endpunkt erweitert, um neben `username`, `password` und `email` auch `firstName`, `lastName` und `phone` zu speichern.

```javascript
const express = require('express');
const router = express.Router();
const { User } = require('../models');

router.post('/register', async (req, res) => {
  try {
    const { username, password, email, firstName, lastName, phone } = req.body;
    const user = await User.create({ username, password, email, firstName, lastName, phone });
    res.status(201).json({ success: true, data: user });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
```

### **Warum?**
Dieser Endpunkt ermöglicht die Registrierung eines neuen Benutzers mit allen erforderlichen Daten in der Datenbank.

---

## Frontend: Registrierungsformular anpassen (Ionic)

### **Datei:** `taxiApp/src/app/pages/register/register.page.html`

Das Formular wird um zusätzliche Eingabefelder erweitert:

```html
<ion-item>
  <ion-label position="floating">First Name</ion-label>
  <ion-input [(ngModel)]="firstName" name="firstName"></ion-input>
</ion-item>
<ion-item>
  <ion-label position="floating">Last Name</ion-label>
  <ion-input [(ngModel)]="lastName" name="lastName"></ion-input>
</ion-item>
<ion-item>
  <ion-label position="floating">Phone</ion-label>
  <ion-input [(ngModel)]="phone" name="phone" type="tel"></ion-input>
</ion-item>
```

### **Datei:** `taxiApp/src/app/pages/register/register.page.ts`

Die neuen Variablen müssen in `register.page.ts` definiert und in der `onRegister()`-Methode an den `AuthService` übergeben werden:

```typescript
export class RegisterPage {
  username: string = '';
  email: string = '';
  password: string = '';
  firstName: string = '';
  lastName: string = '';
  phone: string = '';

  constructor(private authService: AuthService) {}

  onRegister() {
    this.authService.register(this.username, this.password, this.email, this.firstName, this.lastName, this.phone)
      .subscribe({
        next: (res: any) => { console.log('Register success:', res); },
        error: (err: any) => { console.error('Register error:', err); }
      });
  }
}
```

### **Warum?**
Diese Änderungen stellen sicher, dass alle Benutzerinformationen in der UI erfasst und an das Backend gesendet werden.



5. **Testen**  
   - `node index.js` im Ordner `backend` → Backend auf Port 3000 starten  
   - `ionic serve` im Ordner `taxiApp` → Ionic-Frontend auf Port 8100 starten  
   - `http://localhost:8100/register` aufrufen, Formular ausfüllen, „Register“ klicken.  
   - Erfolgreiche Einträge in der DB prüfen (z. B. phpMyAdmin oder MySQL Workbench).

---

## Screenshots

1. **Eintrag in der Datenbank**
- ![Eintrag DB](tA_screenshots/Teil_3_Registrierung/eintrag_db3.png)
   
2. **Terminal Log**
- ![Terminal Log](tA_screenshots/Teil_3_Registrierung/ideterminal4.png)

3. **Browser-Konsole**
- ![Konsole](tA_screenshots/Teil_3_Registrierung/konsole2.png)

4. **Register-Page UI**
- ![Register Page](tA_screenshots/Teil_3_Registrierung/register_page1.png)

### Code-Referenzen
- Backend-Routen (z. B. [api/register](https://github.com/dino-2602/newIonicApp/blob/master/taxiApp/src/app/register/register-routing.module.ts))
- User-Model [Sequelize](https://github.com/dino-2602/newIonicApp/blob/master/taxiBackend/models/user.js)
- RegisterPage [Frontend](https://github.com/dino-2602/newIonicApp/blob/master/taxiApp/src/app/register/register.page.html)
- Installation & Start

### Backend
cd backend
node index.js
Server läuft auf http://localhost:3000/.

### Frontend
cd ../taxiApp
ionic serve
App läuft auf http://localhost:8100/.

### Test
Gehe in den Browser: http://localhost:8100/register
Fülle alle Felder aus und klicke „Register“
Überprüfe die Datenbank, ob der neue Eintrag erstellt wurde.
