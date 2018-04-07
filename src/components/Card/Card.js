import React from "react";
import "./Card.css"

const Card = props => (
    <div className="cardDiv">
        <a onClick={() => props.selectCard(props.character)} className = { props.currentScore === 0 } >
            <img alt={ props.name } src={ props.image } className="cardImg" />
        </a>
    </div>
)

export default Card;