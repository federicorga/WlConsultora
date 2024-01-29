import "./NavBar.css"
import LogoWL from "./LogoWL/LogoWL";
import MyMenu from "./MyMenu/MyMenu";
import { useState, useEffect } from "react";
function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Se ejecutará solo una vez al montar el componente

  return (
    
    <header className={`${scrolled ? 'scrolled' : ''}`}>
      <nav>
        <LogoWL/>
        <MyMenu/>
      </nav>
    </header>
  );
}

export default NavBar;
