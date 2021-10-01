import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ tags }) => {
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
