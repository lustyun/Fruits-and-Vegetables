import React from "react";

function Show({ vegetable }) {
    return (
        <div>
            <h1>Vegetables Show Page </h1>
            {vegetable.name} is called {vegetable.scientific_name}
        </div>
    );
}

module.exports = Show;
