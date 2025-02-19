import Contacts from "./components/contacts/Contacts";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testmonials/Testimonials";
import Topbar from "./components/topbar/Topbar";
import Work from "./components/work/Work";
import './app.scss'
import { useState } from "react";
import Menu from "./components/menu/Menu";

function App() {
  const [ menuOpen, setMenuOpen ] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen = { menuOpen } setMenuOpen = { setMenuOpen } />
      <Menu menuOpen = { menuOpen } setMenuOpen = { setMenuOpen } />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Work />
        <Testimonials />
        <Contacts />
      </div>
    </div>
  );
}

export default App;
