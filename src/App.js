import "./App.css";
import About from "./components/about";
import Catalog from "./components/catalog";
import Footer from "./components/footer";
import NavBar from "./components/navBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Cart from "./components/cart";
import Admin from "./components/admin";
import GlobalState from "./context/globalState";

function App() {
  return (
    <div className="App">
      <GlobalState>
        <BrowserRouter>
          <NavBar />

          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/catalog" element={<Catalog />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/admin" element={<Admin />}></Route>
          </Routes>

          <Footer />
        </BrowserRouter>
      </GlobalState>
    </div>
  );
}

export default App;
