import LogoWL from "../NavBar/LogoWL/LogoWL";
import "./SectionFooter.css"

function SectionFooter() {
  return (
    <footer>
      <div className="div-footer-copyright"><p>©Copyright WL Wilhelm Leifermann Consultora, 2024</p></div>
      <div className="div-footer-logo">
      <LogoWL size={"200px"} />
      </div>
      <div><p>LinkedIn:</p></div>
    </footer>
  );
}

export default SectionFooter;
