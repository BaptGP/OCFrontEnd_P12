import React from "react";
import "../../style/Recharts/Constante.css";
import calories from "../../assets/calories-icon.png";
import proteine from "../../assets/protein-icon.png";
import glucide from "../../assets/carbs-icon.png";
import lipide from "../../assets/fat-icon.png";
import PropTypes from "prop-types";

function Constante(props) {
  return (
    <div style={{display:"flex", flexDirection:"column", justifyContent:"space-between"}}>
      <div className="card_keyinfo">
        <img className="icon" src={calories} alt="" />
        <div className="keyinfo_content">
          <p>{props.keyData.calorieCount / 1000}kCal</p>
          <span>Calories</span>
        </div>
      </div>
      <div className="card_keyinfo">
        <img className="icon" src={proteine} alt="" />
        <div className="keyinfo_content">
          <p>{props.keyData.proteinCount}g</p>
          <span>Proteines</span>
        </div>
      </div>
      <div className="card_keyinfo">
        <img className="icon" src={glucide} alt="" />
        <div className="keyinfo_content">
          <p>{props.keyData.carbohydrateCount}g</p>
          <span>Glucides</span>
        </div>
      </div>
      <div className="card_keyinfo">
        <img className="icon" src={lipide} alt="" />
        <div className="keyinfo_content">
          <p>{props.keyData.lipidCount}g</p>
          <span>Lipides</span>
        </div>
      </div>
    </div>
  );
}

Constante.propTypes = {
  keyData: PropTypes.object,
};

export default Constante;
