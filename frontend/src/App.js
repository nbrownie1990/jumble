import { useEffect } from "react";
import "./styles/App.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import Jumbles from "./components/jumbles";

function App() {
  useEffect(() => {
    AOS.init();
  });
  return (
    <main className="px-3">
      <h1> Erste Schritte </h1>
      <p className="lead">Make it your own.</p>

      <p className="lead">
        <a
          href="http://localhost:3000/"
          className="btn btn-lg btn-secondary fw-bold border-black bg-black"
        >
          Learn more
        </a>
      </p>
      <div
        className="alert alert-primary shadow-lg"
        role="alert"
        data-aos="fade-up"
      >
        <Jumbles />- From bottom!
      </div>
    </main>
  );
}

export default App;
