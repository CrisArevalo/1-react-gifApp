import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
/*const apiKey = "wYSQ9FXFZIjyOfD57moAlX5dTOuMLzsQ";
const peticion = fetch(
    `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
);*/

export default function App() {
    const [tags, setTags] = useState([]);

    return (
        <>
            {/* Aca iria todo el navbar (Titulo, input, y hr) */}
            <AddCategory setTags={setTags} />

            {/* Seccion de los Gifs */}
            <ol>
                {tags.map((t) => (
                    <GifGrid key={t} tags={t} />
                ))}
            </ol>
        </>
    );
}
