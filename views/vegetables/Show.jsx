import React from "react";

function Show({ vegetable }) {
    return (
        <div>
            <h1>Vegetables Show Page</h1>
            <p>Name: {vegetable.name}</p>
            <p>Scientific Name: {vegetable.scientific_name}</p>
            <p>Nutritional Highlights: {vegetable.nutritional_highlights}</p>
            <p>Culinary Uses:</p>
            <ul>
                {vegetable.culinary_uses.map((use, index) => (
                    <li key={index}>{use}</li>
                ))}
            </ul>
        </div>
    );
}

module.exports = Show;
