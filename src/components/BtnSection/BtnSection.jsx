import "./BtnSection.css";
import { Link } from "react-router-dom";

function BtnSection({url, titleBtn}) {
  return (
    <>
        <div class="div-BtnSection-text">
        <Link className="BtnSection-link-text" to={url}>
            <p class="BtnSection-btn-text">{titleBtn}</p>
            </Link>
        </div>
    </>
  );
}

export default BtnSection;
