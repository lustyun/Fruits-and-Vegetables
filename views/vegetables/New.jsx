import React from "react";

function New() {
    return (
        <div>
            <h1>New Vegetable page</h1>
            <form action="/vegetables" method="POST">
                Name: <input type="text" name="name" />
                <br />
                Scientific Name: <input type="text" name="scientific_name" />
                <br />
                Nutritional Highlights:{" "}
                <input type="text" name="nutritional_highlights" />
                <br />
                Culinary Uses:{" "}
                <input type="text" name="culinary_uses" multiple />
                <br />
                <input type="submit" value="Create Vegetable" />
            </form>
        </div>
    );
}

module.exports = New;
