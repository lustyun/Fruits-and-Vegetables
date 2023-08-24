import React from "react";

function Index({ vegetables }) {
    return (
        <div>
            <h1>Vegetables Index Page</h1>
            <nav>
                <a href="/vegetables/new">Create a New Vegetable</a>
            </nav>
            <ul>
                {vegetables && vegetables.map((vegetable, i) => {
                    return (
                        <li key={i}>
                            <a href={`/vegetables/${vegetable._id}`}>{vegetable.name}</a> is
                            called {vegetable.scientific_name} <br></br>
                            <br />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

module.exports = Index;
