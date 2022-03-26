import "./home.css";
import { gsap } from "gsap";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  const timeline = gsap.timeline();

  useEffect(() => {
    const nav = document.querySelectorAll(".animation-2");
    timeline.from(nav, {
      opacity: 0,
      duration: 2,
      x: 1000,
    });
  }, []);

  return (
    <div className="home animation-2">
      <div className="hero">
        <img src="img/hero.jpg" alt="hero" className="back-image" />

        <h1 className="centered h1">Welcome to youngster</h1>
        <h2 className="centered h2">Best deals on the web</h2>
      </div>

      <div className="bt-container">
        <Link to="/catalog" className="bt-large">
          Check our catalog!
        </Link>
      </div>
    </div>
  );
}

export default Home;
