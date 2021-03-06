# 🌈 Capstone-Project: "Jumble - the right place for your stuff"

![MIT](https://img.shields.io/badge/license-MIT-blue.svg)

<table border="0" >
 <tr>
<h2>Über das Projekt</h2>

In vielen Coding-BootCamps gibt es ein mehrwöchiges Abschlussprojekt, ein "digitales Gesellenstück", über das die erlangten Fähigkeiten in eigenen App erprobt und dargestellt werden können. Auch wenn ich autodidaktisch unterwegs bin und kein Bootcamp besuche, finde ich diese Herangehensweise klasse und habe mich daran orientiert. Über mein eigenes Capstone-Projekt möchte ich Erfahrungen in der Entwicklung einer Full-Stack-App sammeln, speziell in den Bereichen Spring Boot, CI-CD-Pipelines, Container und CRUD-Operations. Auch das Arbeiten mit einer SQL-Datenbank möchte ich vertiefen. Gestartet mit dem Projekt, habe ich im Oktober 2021 und die Idee der "Jumbles"-Applikation entwickelt. Zuerst habe ich ein Konzept erarbeitet, ein Wireframe mit dem Tool "Figma" erstellt und anschließend direkt losgelegt und programmiert. Es kamen die Technologien zum Einsatz, die ich mir die letzten Monaten autodidaktisch angeigenet habe bzw. weiterhin aneigne.
	 
Aktuell gibt es noch einiges zu tun (Test schreiben, Performance verbessern, Post-& Delete-Review, Map-Component, Search-Bar...), trotzdem geht es <a href="https://jumbles.herokuapp.com/">hier</a> zur App. 

### 👨🏽‍💻 Built with Tech Stack:

- Spring-Boot
- React v16 (Hooks)
- Sass und Bootstrap
- Axios, RESTful API
- PostgreSQL
- JWT (Bearer Token, Local Storage Authentication)
- JUnit5, Mockito, H2-DB for Testing
- Firebase-Storage for User-Images
- MapBox-API
- Ebenfalls verwendet: Postman, DBeaver, Mockaroo, Docker Hub, GitHub Actions
- <a href= "https://miro.com/app/board/uXjVOXKtP3w=/?invite_link_id=877146530729">ERM via Miro-Board </a>
- <a href="https://www.figma.com/file/fFAz3ql0dams5Xqsq6an8L/Jumble-Mockup?node-id=33%3A444">Wireframe via Figma</a>

### Learning Path / Skills for this Project

- [x] In diesem Projekt wurden ein Idee entwickelt, ein entsprechendes Wireframe, ERM-Modell und Use-Cases (s.u) erstellt.
- [x] Das Projekt wird mit Git versioniert.
- [x] Das Frontend und Backend laufen gemeinsam in einem jar-File (Spring Boot, UI via static-folder)
- [x] Die PostgreSQL-Datenbank läuft lokal über ein Docker-Image, in Produktion über Heroku.
- [x] Für User-Image-Uploads wird der Firebase-Storage verwendet
- [x] Das Projekt beinhaltet Security-Features (Authentication via Local-Storage JWT)
- [ ] Das Projekt läuft über eine CI-CD-Pipeline via Github-Actions.
- [ ] Das Projekt verfügt über Unit- & Integration-Tests.
- [ ] Das Projekt ist mit anderen Applikationen verknüpft (Mapbox, Slack).


## 🔥 Die App- "Jumble"

Du willst wieder Platz in der eigenen Wohnung und dabei etwas Gutes tun?
Mit Jumble kannst du Informationen darüber erhalten, wo du dein Ausrangiertes in deiner Nähe abgeben kannst.

Auf der Startseite bekommst du den Überblick mithilfe einer Map, die die verschiedenen Orte ("Jumbles") in deiner Nähe anzeigt.
Darunter z.B. Flohmärkte, Second-Hand-Shops, Kleider-Tausch-Partys, FoodSharing/Fairteiler, Kleiderspenden (DRK-Container & Online-Angebote).
Du kannst dich bei Jumble einloggen, dein Profil einrichten, Jumbles nach Kategorien sortieren, erstellen und bewerten. 

<!--Gif-Einfüge-Test 1	 
![Demo](name-of-gif-file. gif) / ! [](name-of-gif-file. gif)

Test 2
![Demo JumbleApp](demo/demo.gif)	 
	 
### Requirements to get the Project running on your machine
- Java 16
- maven
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
``` --> 	 

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
  | `GET /api/jumbles/getall`                                         | Yes     | `USER`.                     |
  | `GET /api/jumbles/category/{categoryId}`                          | Yes     | `USER`.                     |
  | `GET /api/jumbles/{jumbleId}`                                     | Yes     | `USER`                      |
  | `POST /api/jumbles/new`                                           | Yes     | `USER`                      |
  | `PUT /api/jumbles/edit/{jumbleId}`                                | Yes     | `OWNER`(todo)               |
  | `DELETE /api/jumbles/edit/{jumbleId}`                             | Yes     | `OWNER`(todo)               |
  | `POST /api/jumbles/{jumbleId}/{reviewId}`                         | Yes     | `USER`                      |
  | `GET /api/reviews/getall`.                                        | Yes     | `USER`                      |
  | `GET /api/reviews/user/{userId}`.                                 | Yes     | `USER`                      |
  | `GET /api/reviews/jumble/{jumbleId}`                              | Yes     | `USER`                      |
  | `GET /api/reviews/{reviewId}`                                     | Yes     | `USER`                      |
  | `POST /api/reviews/edit/new`.                                     | Yes     | `USER`                      |
  | `DELETE /api/reviews/edit/delete/{reviewId}`                      | Yes     | `USER`                      |
  | `GET /api/categories`                                             | Yes     | `USER`                      |
  | `GET /api/categories/{categoryId}`                                | Yes     | `USER`                      |
  | `POST /api/user/signup`                                           | No      |                             |
  | `POST /api/user/signin `                                          | No      |                             |
  | `GET /api/user/{userId}`                                          | Yes     | `OWNER`(todo)               |
  | `PUT /api/user/edit/{userId}`                                     | Yes     | `OWNER`(todo)               |
  | `DELETE /api/user/edit/{userId}`                                  | Yes     | `OWNER`(todo)               | 
  

### 📝  User Stories & Learnings

- [x] User kann sich Registrieren, Einloggen und ein Profil erstellen (Learnings: Password-Validation, Authentication)
- [x] User kann Profil bearbeiten und löschen
- [x] User kann Jumbles für die Community erstellen, bearbeiten und löschen (RESTful-API)
- [x] User kann Bilder hochladen (Learnings: Firebase Storage)
- [x] User kann Jumbles, nach Kategorien sortiert, finden
- [x] User kann eine Liste aller Jumbles einsehen

### 📌 To-Dos, offene Features & Ausblick
- [ ] Testen, testen, testen...
- [ ] CI-CD-Pipeline (Docker Hub, Github-Actions, Slack) zum laufen bekommen (build.yml, deploy.yml)
- [ ] User kann Jumbles bewerten(Star-Rating), kommentieren und seine Bewertungen wieder löschen 
- [ ] Map-Component mit Datenbank verknüpfen, aktuell nur Mock-Daten
- [ ] User kann Jumbles über die Suchbar suchen
- [ ] User kann Jumbles auf der Cluster-Map finden
- [ ] Image-Upload für Mobile ermöglichen	  
- [ ] Datentypen verändern (z.B. Date, Datepicker etc.)
- [ ] User kann Nutzernamen und Passwort ändern / Achtung Password-Hashing
- [ ] Passwort vergessen/ Reset einfügen
- [ ] Frontend und Backend Validation verbessern/ einfügen (Jumbles, Login, Profile)
- [ ] Routing-Validation & Authorization(aktuell kann jeder alles bearbeiten)
- [ ] Authorization: Admin kann Kategorien erstellen, User können nur selbst erstellte Jumbles bearbeiten...
- [ ] UX/UI & Performance verbessern (Resize Image-Uploads, Responsivness, Sprache vereinheitlichen...)


### 📚 Was habe ich außerdem gelernt? 
- ✔ Die Implementierung und Customizing von Bootstrap via Sass 
- ✔ Das Arbeiten mit Spring Boot und React, MapBox-Api, RESTful APIs, Axios
- ✔ Das Arbeiten mit relationalen Datenbanken, Cloud-Storage, Heroku
- ✔ Wieviel Spaß Git-Commits via "tig (cli-tool)" machen
- ✔ Den Code durch die Anwendung von "web.dev/measure/" und "Lighthouse" zu optimieren
- ✔ Was der Unterschied zwischen Authorisierung & Authentifizierung ist
- ✔ Wie nur ein Port und ein jar-file für Frontend und Backend genutzt wird
- ✔ Wie ein Wireframe mit Figma und ein UML-Modell & ERM-Modell mit Miro erstellt wird
- ✔ Wie SourceMaps das Debuggen vereinfachen
	 
### 📓  Reflexion 
- Ein TDD-Projekt mit automatisierten Unit-Tests und Integration-Test wäre schöner
- "development" und "production" klarer trennen
- Es hätte eine strukturierte Versionierung über unterschiedliche Branches geben sollen, wie z.B.:
	 - main — Eine Darstellung der Codebasis, die derzeit in Produktion ist, deren Commits den gesamten Flow  durchlaufen und nach der Überprüfung nach der Veröffentlichung zusammengeführt werden.
	- develop — Alle Feature-Branches werden in dieser Branch zusammengeführt. Hier laufen automatisierte Tests und Releases für Entwicklungsressourcen über CI/CD-Pipelines.
	- features — Jede Änderung, die in die nächste Version aufgenommen werden soll.

Die App wird stetig weiterentwickelt und ich lerne jeden Tag dazu :)

📝 License
This project is under the MIT license. 

Made with 💖 by nbrownie1990 
