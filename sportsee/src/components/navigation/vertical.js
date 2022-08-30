import "../../style/navigation/Vertical.css";
import muscu from "../../assets/muscu.png";
import nat from "../../assets/nat.png";
import velo from "../../assets/velo.png";
import yoga from "../../assets/yoga.png";

function Vertical() {
  return (
    <nav className="nav_vertical">
      <ol>
        <li>
          <img src={yoga} className="nav_vertical-yoga" alt="yoga" />
        </li>
        <li>
          <img src={nat} className="nav_vertical-nat" alt="natation" />
        </li>
        <li>
          <img src={velo} className="nav_vertical-velo" alt="velo" />
        </li>
        <li>
          <img src={muscu} className="nav_vertical-muscu" alt="muscu" />
        </li>
      </ol>
      <span className="nav_vertical-copyright" style={{ color: "white" }}>
        Copiryght, SportSee 2020
      </span>
    </nav>
  );
}

export default Vertical;
