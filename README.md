# Jumble - the right place for your stuff

![MIT](https://img.shields.io/badge/license-MIT-blue.svg)

<table border="0" >
 <tr>
<h2>Über das Projekt</h2>

Das Jumble-Projekt erarbeite ich, um Erfahrungen in den Bereichen CI-CD-Pipelines, Container, CRUD-Operations und Arbeiten mit einer Datenbank zu sammeln. Gestartet habe ich im Oktober 2021 und diese Idee entwickelt, das Konzept erarbeitet, ein Mock-Up mit dem Tool "Figma" erstellt und anschließend programmiert. Es kamen die Technologien zum Einsatz, die ich mir die letzten Monaten autodidaktisch angeigenet habe bzw. weiterhin aneigne.

### Learning Path / Skills for this Project

- [x] In diesem Projekt wurden ein Idee entwickelt, ein entsprechendes Mock-Up und Use-Cases erstellt.
- [x] Das Projekt wird mit Git versioniert.
- [x] Die PostgreSQL-Datenbank läuft über ein Docker-Image
- [x] Für User-Uploads wird der Firebase-Storage verwendet
- [x] Das Projekt nutzt ein Docker-Image und läuft über eine CI-CD-Pipeline via Github-Actions.
- [x] Das Projekt beinhaltet Security-Features.

### 👨🏽‍💻 Tech Stack

Built with:

- Spring-Boot
- React v16
- Node.js
- Sass und Bootstrap
- Axios, RESTful API
- JUnit5, Mockito, H2-DB for Testing
- MapBox-API
- Firebase-Storage for User-Images
- Production: Heroku PostgreSQL-Database
- Local: PostgreSQL with Docker
- JWT (Bearer Token, Local Storage Authentication)
- <a href= "https://miro.com/app/board/uXjVOXKtP3w=/?invite_link_id=877146530729">ERM via Miro-Board </a>
- <a href="https://www.figma.com/file/fFAz3ql0dams5Xqsq6an8L/Jumble-Mockup?node-id=33%3A444">Wireframe via Figma</a>

## 🔥 Die App- "Jumble"

Du willst wieder Platz in der eigenen Wohnung und dabei etwas Gutes tun?
Mit Jumble kannst du Informationen darüber erhalten, wo du dein Ausrangiertes in deiner Nähe abgeben kannst.

Auf der Startseite bekommst du den Überblick mithilfe einer Map, die die verschiedenen Orte ("Jumbles") in deiner Nähe anzeigt.
Darunter z.B. Flohmärkte, Second-Hand-Shops, Kleider-Tausch-Partys, FoodSharing/Fairteiler, Kleiderspenden (DRK-Container & Online-Angebote).
Du kannst dich bei Jumble einloggen und die Jumbles mit Sternen bewerten, um anderen Nutzern zu helfen.
(Zielgruppe, Segment: junge Menschen denen Nachhaltigkeit am Herzen liegt. z.B. Studierende)

### Requirements to get the Project running on your machine
- Java 16
- maven
- mapbox-token (https://www.mapbox.com/)
- Docker to run postgreSQL database
- npm
	 
### Steps to get the Project running on your machine
1. clone project from github by execute:
```  
git clone git@github.com:nbrownie1990/jumble.git
```  
2.start docker with postgreSQL database by:
```  
docker-compose up -d --remove-orphans
```  	 

.............
	 
### Application Structure

```  

├── src                      # Static public assets and uploads
│   ├── frontend             # Client side code
│   |   ├── build            # result of npm run build
│   |   ├── public           # Static public assets and uploads
│   |   ├── src              # Frontend src
│   │   │   ├── assets       # CSS and images
│   │   │   ├── auth         # authorization
│   │   │   ├── components   # React components
│   │   │   ├── pages        # pages/views
│   │   │   ├── scss         # Sass compile bootstrap & custom stylses
│   |   |   └── services     # Frontend Service-layer, axios apiService
│   |   ├── .gitignore       # .gitignore-file 
│   |   └── package.json     # third-party overview
|   |
│   ├── main                 # Server side code
│   |   ├── java             # 
│   │   │   ├── config       # Configuration WebMvc, JPA, MapBoxAPI
│   │   │   ├── controller   # RESTful API
│   │   │   ├── exception    # Handeling Exceptions
│   │   │   ├── model        # Models
│   │   │   ├── payload      # Payload-Requests, Response
│   │   │   ├── repo         # Repository-layer
│   │   │   ├── security     # Security, JWT
│   |   |   └── services     # Backend Service-layer
│   |   └── resources        # application.yml
|   |
│   └── test                 # Test folder
|
├── target                   # Application target folder
│   ├── classes              # copy of build via pom.xml
│   └── jar-file             # Served in a jar
├── ....                     # Other stuff
└── docker                   # docker file
```
  

### Api Endpoints

  | Endpoint                                                          | Secured | Roles                       |
  | ----------------------------------------------------------------- | ------- | --------------------------- |
  | `GET /api/jumbles/getall`  (all)                                  | Yes     | `USER`.                     |
  | `GET /api/jumbles/{jumbleId}` (one)                               | Yes     | `USER`                      |
  | `POST /api/jumbles/new`                                           | Yes     | `USER`                      |
  | `PUT /api/jumbles/edit/{jumbleId}`                                | Yes     | `OWNER`(todo)               |
  | `DELETE /api/jumbles/edit/{jumbleId}`                             | Yes     | `OWNER`(todo)               |
  | `POST /api/jumbles/{jumbleId}/{reviewId}`                         | Yes     | `USER`                      |
  | `GET /api/categories`  (all Categories)                           | Yes     | `USER`                      |
  | `GET /api/categories/{categoryId}` (one Category)                 | Yes     | `USER`                      |
  | `POST /api/user/signup`                                           | No      |                             |
  | `POST /api/user/login `                                           | No      |                             |
  | `GET /api/user/{userId}`                                          | Yes     | `OWNER`(todo)               |
  | `PUT /api/user/edit/{userId}`                                     | Yes     | `OWNER`(todo)               |
  | `DELETE /api/user/edit/{userId}`                                  | Yes     | `OWNER`(todo)               | 
  

### 📝  User Stories & Learnings

- [x] User kann sich ein Profil erstellen (Learnings: Password-Validation, Authentication)
- [x] User kann Profil bearbeiten (Learnings: Password-Validation, Authentication)
- [x] User kann Profil löschen
- [x] User kann Jumbles für die Community erstellen
- [x] User kann Jumbles für die Community bearbeiten und löschen
- [x] User kann Bilder hochladen (Learnings: How to upload to Firebase Storage)
- [x] User kann Jumbles, nach Kategorien sortiert, finden
- [x] User kann eine Liste aller Jumbles einsehen

### 📚 Was habe ich außerdem gelernt? 
- ✔ Implementierung und Customizing von Bootstrap via Sass (auch kurz Styled Components ausprobiert)
- ✔ Arbeiten mit Spring Boot und React, MapBox-Api, RESTful APIs, axios
- ✔ Arbeiten mit relationalen Datenbanken und Cloud-Storage
- ✔ Git-Commits via tig (cli-tool)
- ✔ Authorisierung & Authentifizierung
- ✔ Nur einen Port nutzen, indem Frontend über den Static-Ordner von Spring Boot eingebunden wird
- ✔ Ein Wireframe mit Figma erstellen und UML-Modell & ERM-Modell mit Miro

### 📚 Reflexion 
- Ein TDD-Projekt mit automatisierten Unit-Tests und Integration-Test wäre schöner
- Es hätte eine strukturierte Versionierung über unterschiedliche Branches geben sollen, wie z.B.:
	 - main — Eine Darstellung der Codebasis, die derzeit in Produktion ist, deren Commits den gesamten Flow  durchlaufen und nach der Überprüfung nach der Veröffentlichung zusammengeführt werden.
	- develop — Alle Feature-Branches werden in dieser Branch zusammengeführt. Hier laufen automatisierte Tests und Releases für Entwicklungsressourcen über CI/CD-Pipelines.
	- features — Jede Änderung, die in die nächste Version aufgenommen werden soll.


### 🚀 To-Dos & Ausblick
- Alle PUT, POST, DELETES funktionieren (Profile, Jumble, Images, Addresses, Categories, Review)
- Star-Component	 
- Docker Container 
- Github Actions CI-CD-Pipeline
- deployen über firebase
- CI-CD-Pipeline (Github-Actions)
- Sprache vereinheitlichen (kein denglish)
- Tests
- Form Validation (Jumbles, Login, Profile)
- Resize Image uploads
- Change Data Types (Datepicker etc.)
- Map-Component
- [ ] User kann Jumbles auf der Cluster-Map finden
- [ ] User kann Nutzernamen und Passwort ändern / Achtung Password-Hashing
- [ ] User kann Jumbles über die Suchbar suchen
- [ ] User kann Jumbles bewerten und kommentieren
- [ ] User kann seine Bewertungen löschen
- [ ] Routing-Validation
- [ ] Authorization: Admin kann Kategorien erstellen, User können nur selbst erstellte Jumbles bearbeiten...

Die App wird stetig weiterentwickelt und ich lerne jeden Tag dazu :)

📝 License
This project is under the MIT license. 

Made with 💖 by nbrownie1990 
