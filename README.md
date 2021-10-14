# Jumble - the right place for your stuff

![MIT](https://img.shields.io/badge/license-MIT-blue.svg)
![CI](https://github.com/nbrownie1990/jumble/workflows/Build%20and%20deploy/badge.svg)
[![](https://img.shields.io/docker/image-size/nbrownie/jumble)](https://hub.docker.com/r/nbrownie/jumble)

<table border="0" >
 <tr>
<h2>Über das Projekt</h2>

Das Jumble-Projekt erarbeite ich, um Erfahrungen in den Bereichen CI-CD-Pipelines, Container, CRUD-Operations und Arbeiten mit einer Datenbank zu sammeln. Gestartet habe ich am 08.10.2021 und diese Idee entwickelt, das Konzept erarbeitet, ein Mock-Up mit dem Tool "Figma" erstellt und anschließend programmiert. Es kamen die Technologien zum Einsatz, die ich mir die letzten Monaten autodidaktisch angeigenet habe bzw. weiterhin aneigne.

### Learning Path / Skills for this Project

- [ ] In diesem Projekt wurden ein Idee entwickelt, ein entsprechendes Mock-Up und Use-Cases erstellt.
- [ ] Das Projekt wird mit Git und den folgenden Branches versioniert.
  - [ ] main — Eine Darstellung der Codebasis, die derzeit in Produktion ist, deren Commits den gesamten Flow durchlaufen und nach der Überprüfung nach der  
         Veröffentlichung zusammengeführt wurden.
  - [ ] develop — Alle Feature-Branches werden in dieser Branch zusammengeführt. Hier laufen automatisierte Tests und Releases für
        Entwicklungsressourcen über CI/CD-Pipelines.
  - [ ] features — Jede Änderung, die in die nächste Version aufgenommen werden soll.
- [ ] Das Projekt nutzt ein Docker-Image und läuft über eine CI-CD-Pipeline via Github-Actions. https://www.youtube.com/watch?v=R8_veQiYBjI
- [ ] Das TDD-Projekt enthält automatisierte Unit-Tests und Integration-Test, die vor dem Code geschrieben werden.
- [ ] Das Projekt beinhaltet Security-Features .

### Tech Stack

Es handelt sich um ein xxxxxx- Backend mit Anbindung an eine MongoDB-Datenbank und einem XXXX-Frontend.
Es gibt eine Anbindung zur xxxx-API für die Ermittlung der Addresskoordinaten und zur Darstellung im Frontend.

## Die App- "Jumble"

Du willst wieder Platz in der eigenen Wohnung und dabei etwas Gutes tun?
Mit Jumble kannst du Informationen darüber erhalten, wo du dein Ausrangiertes in deiner Nähe abgeben kannst.

Auf der Startseite bekommst du den Überblick mithilfe einer Map, die die verschiedenen Orte ("Jumbles") in deiner Nähe anzeigt.
Darunter z.B. Flohmärkte, Second-Hand-Shops, Kleider-Tausch-Partys, FoodSharing/Fairteiler, Kleiderspenden (DRK-Container & Online-Angebote).
Du kannst dich bei Jumble einloggen und die Jumbles mit Sternen bewerten, um anderen Nutzern zu helfen.
(Zielgruppe, Segment: junge Menschen denen Nachhaltigkeit am Herzen liegt. z.B. Studierende)

### User Stories

- [ ] User kann sich ein Profil erstellen (Learnings: Password-Validation, Authentication & Authorization)
- [ ] User kann Jumbles auf der Cluster-Map finden
- [ ] User kann Jumbles bewerten und kommentieren
- [ ] User kann Jumbles für die Community erstellen und bearbeiten

## Ausblick

Die App wird stetig weiterentwickelt und ich lerne jeden Tag dazu :)

</td>
   <td><img src="public/appOverview.gif" alt="animated app overview"> <br> <br>
  <a href="https://www.figma.com/file/fFAz3ql0dams5Xqsq6an8L/Jumble-Mockup?node-id=33%3A444">Figma-Link</a>
  </td>
 </tr>
</table>

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
