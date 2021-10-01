import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (tags) => {
    const [state, setState] = useState({
        data: [],
        loading: true,
    });

    useEffect(() => {
        getGifs(tags).then((imgs) => {
            setState({
                data: imgs,
                loading: false,
            });
        });
    }, [tags]);

    return state;
};
