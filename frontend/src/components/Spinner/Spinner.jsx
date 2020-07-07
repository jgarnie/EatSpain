import React from "react";
import "./Spinner.scss"


const Spinner = () => {
    return (
    <div className="spinner">
        <img className="spinner__img" src={require("../../../src/img/logo.png")} alt="logo"/>
    </div>
    );
};

export default Spinner;
