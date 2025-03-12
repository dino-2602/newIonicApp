# MyIonicApp – Ionic Tabs

## Übersicht
Dieses Projekt demonstriert die Grundinstallation und Verwendung des Ionic Frameworks (in Kombination mit Angular) für eine einfache Tabs-Applikation. Die folgenden Punkte wurden im Rahmen eines Laborberichts umgesetzt:

- **Installation von Node.js** zur Bereitstellung der npm-Umgebung.
- **Globale Installation von Cordova und Ionic** via npm.
- **Erstellung einer Demo-App** mit dem `tabs` Starter-Template.
- **Testen via `ionic serve`** und Anzeigen im Browser.
- **Kurzer Hinweis** zur iOS-Entwicklung (Mac, Xcode etc.).

## Features
- **Tabs-Navigation**: Vordefiniertes Layout für eine App mit mehreren Tabs.
- **Schneller Start**: Durch das Starter-Template sind nur wenige Schritte nötig, um eine lauffähige App zu erhalten.
- **CLI-basierter Workflow**: Einfache Befehle wie `ionic start`, `ionic serve`, `ionic build`.

## Technologien
![Node.js](https://img.shields.io/badge/Node.js-16.x%2B-success?logo=node.js&logoColor=white)
![npm](https://img.shields.io/badge/npm-8.x%2B-red?logo=npm&logoColor=white)
![Angular](https://img.shields.io/badge/Angular-14.x%2B-red?logo=angular&logoColor=white)
![Ionic](https://img.shields.io/badge/Ionic-6.x%2B-blue?logo=ionic&logoColor=white)
![Cordova](https://img.shields.io/badge/Cordova-10.x%2B-lightgrey?logo=apachecordova&logoColor=white)
![phpStorm](https://img.shields.io/badge/IDE-phpStorm-purple?logo=phpstorm&logoColor=white)

⚠️**Hinweis:** Dieses Repository enthält ausschließlich das Grundgerüst der Ionic-App (z. B. `src`-, `www`- und Konfigurationsdateien). Persönliche Daten, sensible Konfigurationen oder Backend-Zugangsdaten sind hier nicht enthalten.

## Schritte zur Implementierung

1. **Node.js überprüfen bzw. installieren**
  - Mit `node -v` prüfen, ob Node.js installiert ist.
  - Falls nicht vorhanden, Node.js von [https://nodejs.org](https://nodejs.org) herunterladen und installieren.

2. **Cordova & Ionic Installation**
  - Global mit npm installieren:
    ```bash
    npm install -g cordova
    npm install -g ionic
    ```
  - Anschließend Versionen prüfen (`cordova -v`, `ionic -v`).

3. **Neues Projekt erstellen**
  - In der Konsole oder IDE:
    ```bash
    ionic start myIonicApp tabs
    ```
  - Bei der Abfrage „Pick a framework“ wurde hier **Angular** ausgewählt.

4. **Entwicklung & Test**
  - Projektverzeichnis wechseln: `cd myIonicApp`
  - App starten: `ionic serve`
  - Browser öffnet sich unter [http://localhost:8100](http://localhost:8100).

5. **Hinweis zur iOS-Entwicklung**
  - Für die Entwicklung unter iOS wird ein Mac mit Xcode benötigt.
  - Ionic/Cordova-Plattform: `ionic cordova platform add ios` (nur auf macOS).
  - Zum Testen im Simulator: `ionic cordova emulate ios`.
  - Für ein echtes Gerät und App Store-Veröffentlichung ist ein Apple Developer Account notwendig.

## Screenshots

### **Cordova-Installation**
![Cordova Installation](tA_screenshots/Teil_1_1/cordova_install1.png)  
*Globale Installation von Cordova über npm.*

---

### **Ionic-Installation**
![Ionic Installation](tA_screenshots/Teil_1_1/ionic_install2.png)  
*Globale Installation von Ionic über npm.*

---

### **Framework-Auswahl**
![Angular Framework wählen](tA_screenshots/Teil_1_1/choose_angular_install3.png)  
*Auswahl von Angular als Framework beim Erstellen des Projekts.*

---

### **Kommando `ionic serve`**
![ionic serve](tA_screenshots/Teil_1_1/ionic_serve4.png)  
*Starten des lokalen Entwicklungsservers.*

---

### **Kompilierung erfolgreich**
![Compile success](tA_screenshots/Teil_1_1/compile_successfully5.png)  
*Erfolgreiche Kompilierung der App – Server läuft auf Port 8100.*

---

### **Ansicht im Browser**
![Browser mit Tabs](tA_screenshots/Teil_1_1/browser_page6.png)  
*Die Tabs-Demo-App wird im Browser angezeigt.*

## Code-Referenzen
Da es sich hier um das Standard-Tabs-Template handelt, gibt es keine speziellen Code-Dateien, die über das Standard-Setup hinausgehen.
- `src/app/app.module.ts` (Hauptmodul)
- `src/app/app.component.ts` (Root-Komponente)
- `src/app/tab1/tab1.page.ts` (Beispiel einer Tab-Seite)

## Installation

1. **Repository klonen** (oder das Projektverzeichnis in phpStorm öffnen):
   ```bash
   git clone https://github.com/dino-2602/newIonicApp
