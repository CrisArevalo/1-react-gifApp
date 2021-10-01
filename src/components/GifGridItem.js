import React from "react";

export const GifGridItem = ({ url, title, id }) => {
    //En los parametros lo vuelvo a desestructurar.

    return (
        <>
            <img
                className="GifGrid animate__animated animate__bounce animate__bounceInRight"
                src={url}
                alt={id}
            />
        </>
    );
};
