import React from "react";
import PropTypes from "prop-types";
import "../style/header.css"

const Header = (props) => {
  return (
    <>
      <div className="header_home">
        <h1>
          Bonjour <span className="red">{props.firstName}</span>
        </h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </div>
    </>
  );
};
Header.propTypes = {
  firstName: PropTypes.array,
};
export default Header;
