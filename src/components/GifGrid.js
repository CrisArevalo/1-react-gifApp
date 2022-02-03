import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";
import PropTypes from "prop-types";

export const GifGrid = ({ tags }) => {
    //"tags" solo es la categoria del inputs
    const { data } = useFetchGifs(tags);

    return (
        <>
            <h3>{tags}</h3>
            {data.map(({ id, title, url }) => {
                return <GifGridItem key={id} url={url} title={title} />;
            })}
        </>
    );
};

GifGrid.propTypes = {
    tags: PropTypes.string.isRequired,
};
