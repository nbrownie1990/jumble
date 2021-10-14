import "./App.scss";
import Jumbles from "./components/jumbles";

function App() {
  return (
    <main className="px-3">
      <h1> Erste Schritte </h1>
      <p className="lead">Make it your own.</p>
      <Jumbles />
      <p className="lead">
        <a
          href="http://localhost:3000/"
          class="btn btn-lg btn-secondary fw-bold border-black bg-black"
        >
          Learn more
        </a>
      </p>
    </main>
  );
}

export default App;
