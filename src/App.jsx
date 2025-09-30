import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./page/home/Home";
import Discover from "./page/Discover/Discover";
import NavBar from "./navigation/NavBar";
import About from "./page/About/About";
import Cart from "./page/cartpage/Cart";
import Favorites from "./page/Favorite/Favorite";
import Contact from "./page/Contact/Contact";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Discover" element={<Discover />} />
        <Route path="/About" element={<About />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Favorite" element={<Favorites />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
