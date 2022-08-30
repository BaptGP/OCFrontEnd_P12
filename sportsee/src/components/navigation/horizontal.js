import "../../style/navigation/Horizontal.css";
import logo from "../../assets/logo.png";

function Horizontal() {
  return (
    <nav className="nav_horizontal">
      <img src={logo} className="App-logo" alt="logo" />
      <ol>
        <li>
          <a href="#">Accueil</a>
        </li>
        <li>
          <a href="#">Profil</a>
        </li>
        <li>
          <a href="#">Réglage</a>
        </li>
        <li>
          <a href="#">Communauté</a>
        </li>
      </ol>
    </nav>
  );
}

export default Horizontal;
