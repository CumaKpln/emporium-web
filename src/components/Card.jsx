import React from "react";

function Card({ name, description, image }) {
    return <div className="Card">
        {image && <img src={image} />}
        <h1>{name}</h1>
        <p>{description}</p>
    </div>;
}

export default Card;