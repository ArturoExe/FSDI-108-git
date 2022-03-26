import "./navBar.css";
import { gsap } from "gsap";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const timeline = gsap.timeline();

  useEffect(() => {
    const nav = document.querySelectorAll(".animation");
    timeline.from(nav, {
      opacity: 0,
      duration: 0.5,
      stagger: 0.5,
    });
  }, []);

  return (
    <div className="navBar animation">
      <Link to="/" className="logo">
        Youngster
      </Link>

      <ul>
        <li className="animation">
          <Link to="/">Home</Link>
        </li>
        <li className="animation">
          <Link to="/about">About Us</Link>
        </li>
        <li className="animation">
          <Link to="/catalog">Catalog</Link>
        </li>
        <li className="animation">
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
