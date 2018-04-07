import React from "react";
import "./Jumbotron.css";

const Jumbotron = props => (
    <div className="jumbotron">
        <h1 className="text-center">Game of Thrones Card Game</h1>
        <p className="text-center">Select an image to begin, every image you select you earn one point. However select a duplicate image and Game Over!</p>
    </div>
);

export default Jumbotron;