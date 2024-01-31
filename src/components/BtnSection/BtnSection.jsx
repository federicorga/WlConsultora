import "./BtnSection.css";
import { Link } from "react-router-dom";
import { scrollToTop } from "../../assets/main";
function BtnSection({url, titleBtn}) {

  return (
    <>
        <div class={`div-BtnSection-text`}>
        <Link className="BtnSection-link-text" onClick={scrollToTop} to={url}>
            <p class="BtnSection-btn-text">{titleBtn}</p>
            </Link>
        </div>
    </>
  );
}

export default BtnSection;
