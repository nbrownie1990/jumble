# Jumble - the right place for your stuff

![MIT](https://img.shields.io/badge/license-MIT-blue.svg)

<table border="0" >
 <tr>
<h2>Über das Projekt</h2>

Das Jumble-Projekt erarbeite ich, um Erfahrungen in den Bereichen CI-CD-Pipelines, Container, CRUD-Operations und Arbeiten mit einer Datenbank zu sammeln. Gestartet habe ich am 08.10.2021 und diese Idee entwickelt, das Konzept erarbeitet, ein Mock-Up mit dem Tool "Figma" erstellt und anschließend programmiert. Es kamen die Technologien zum Einsatz, die ich mir die letzten Monaten autodidaktisch angeigenet habe bzw. weiterhin aneigne.

### Learning Path / Skills for this Project

- [x] In diesem Projekt wurden ein Idee entwickelt, ein entsprechendes Mock-Up und Use-Cases erstellt.
- [x] Das Projekt wird mit Git und den folgenden Branches versioniert.
  - main — Eine Darstellung der Codebasis, die derzeit in Produktion ist, deren Commits den gesamten Flow durchlaufen und nach der Überprüfung nach der  
     Veröffentlichung zusammengeführt wurden.
  - develop — Alle Feature-Branches werden in dieser Branch zusammengeführt. Hier laufen automatisierte Tests und Releases für
    Entwicklungsressourcen über CI/CD-Pipelines.
  - features — Jede Änderung, die in die nächste Version aufgenommen werden soll.
- [x] Das Projekt nutzt ein Docker-Image und läuft über eine CI-CD-Pipeline via Github-Actions. https://www.youtube.com/watch?v=R8_veQiYBjI
- [x] Das TDD-Projekt enthält automatisierte Unit-Tests und Integration-Test, die vor dem Code geschrieben werden.
- [x] Das Projekt beinhaltet Security-Features.

### 👨🏽‍💻 Tech Stack

Built with:

- Spring-Boot
- React v16
- Node.js
- Sass und Bootstrap
- Axios, RESTful API
- MapBox-API
- JWT (Bearer Token, Local Storage Authentication)
- PostgreSQL
- Firebase.io

## 🔥 Die App- "Jumble"

Du willst wieder Platz in der eigenen Wohnung und dabei etwas Gutes tun?
Mit Jumble kannst du Informationen darüber erhalten, wo du dein Ausrangiertes in deiner Nähe abgeben kannst.

Auf der Startseite bekommst du den Überblick mithilfe einer Map, die die verschiedenen Orte ("Jumbles") in deiner Nähe anzeigt.
Darunter z.B. Flohmärkte, Second-Hand-Shops, Kleider-Tausch-Partys, FoodSharing/Fairteiler, Kleiderspenden (DRK-Container & Online-Angebote).
Du kannst dich bei Jumble einloggen und die Jumbles mit Sternen bewerten, um anderen Nutzern zu helfen.
(Zielgruppe, Segment: junge Menschen denen Nachhaltigkeit am Herzen liegt. z.B. Studierende)

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
│   |   └── resources        # Universal code
|   |
│   └── test                 # Test folder
|
├── target                   # Application target folder
│   ├── classes              # copy of build via pom.xml
│   └── jar-file             # Served in a jar
├── ....                     # Other stuff
└── docker.                  # docker file
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
  | `GET /api/categories/{categoryId}` (one Category)                 | Yes     | `USER                       |
  | `POST /api/user/signup`                                           | No      |                             |
  | `POST /api/user/login `                                           | No      |                             |
  | `GET /api/user/{userId}`                                          | Yes     | `OWNER`(todo)               |
  | `PUT /api/user/edit/{userId}`                                     | Yes     | `OWNER`(todo)               |
  | `DELETE /api/user/edit/{userId}`                                  | Yes     | `OWNER`(todo)               | 
  
### 📝  User Stories && Learning

- [x] User kann sich ein Profil erstellen (Learnings: Password-Validation, Authentication)
- [x] User kann Profil bearbeiten (Learnings: Password-Validation, Authentication)
- [x] User kann Profil löschen
- [x] User kann Jumbles für die Community erstellen
- [x] User kann Jumbles für die Community bearbeiten und löschen
- [x] User kann Bilder hochladen (Learnings: How to upload to Firebase Storage 

- [x] User kann Jumbles nach Kategorien sortiert finden
  
### 📚 Was habe ich außerdem gelernt? 

✔ Implement Bootstrap and modify it via Sass, tried out Styled Components
✔ Custom Hooks to manage Storage and Firestore
✔ Design a Wireframe with Figma:  <a href="https://www.figma.com/file/fFAz3ql0dams5Xqsq6an8L/Jumble-Mockup?node-id=33%3A444">Figma-Link</a>


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
- Map-Component
- [ ] User kann Jumbles auf der Cluster-Map finden
- [ ] User kann Nutzernamen und Passwort ändern / Achtung Password-Hashing
- [ ] User kann Jumbles über die Suchbar suchen
- [ ] User kann Jumbles bewerten und kommentieren
- [ ] User kann seine Bewertungen löschen
- [ ] Routing-Validation
- [ ] Authorization: Admin kann Kategorien erstellen, User können nur selbst erstellte Jumbles bearbeiten...


Comments:
ESLint implementieren? https://www.youtube.com/watch?v=St1YSNoB36Y

  
Die App wird stetig weiterentwickelt und ich lerne jeden Tag dazu :)

📝 License
This project is under the MIT license. 

Made with 💖 by nbrownie1990 
  
  

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
