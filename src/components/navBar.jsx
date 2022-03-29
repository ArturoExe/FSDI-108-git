import "./navBar.css";
import { gsap } from "gsap";
import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import store from "../context/storeContext";

const NavBar = () => {
  //Controls the animation of the navbar using gsap
  const timeline = gsap.timeline();

  useEffect(() => {
    const nav = document.querySelectorAll(".animation");
    timeline.from(nav, {
      opacity: 0,
      duration: 0.5,
      stagger: 0.5,
    });
  }, []);

  const cart = useContext(store).cart; //read cart from context

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
          <Link to="/cart">{cart.length}Cart</Link>
        </li>
        <li className="animation">
          <Link to="/admin" className="secondary">
            Admin
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
