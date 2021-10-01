import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
/*
const apiKey = "wYSQ9FXFZIjyOfD57moAlX5dTOuMLzsQ";
const peticion = fetch(
    `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
);
*/

export default function App() {
    const [tags, setTags] = useState([]);

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setTags={setTags} />
            <hr />

            <ol>
                {tags.map((t) => (
                    <GifGrid key={t} tags={t} />
                ))}
            </ol>
        </>
    );
}
