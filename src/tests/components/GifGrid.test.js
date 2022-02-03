import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import { GifGrid } from "../../components/GifGrid.js";
import { useFetchGifs } from "../../hooks/useFetchGifs.js";
jest.mock("../../hooks/useFetchGifs.js");

describe("Tests de <GifGrid/>", () => {
    const tag = "Konosuba";

    // ============ TESTS ============ //
    /*
    test("Snapshot + Mock", () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true,
        });

        const wrapper = shallow(<GifGrid tags={tag} />);
        expect(wrapper).toMatchSnapshot();
    });

    test("Test useFetchGifs", () => {
        const gif = [
            {
                id: "123",
                url: "https://wallpapercave.com/wp/wp5942828.jpg",
                title: "Megumin",
            },
        ];

        useFetchGifs.mockReturnValue({
            data: gif,
            loading: false,
        });
        //El mockReturnValue simula la entrega de datos
        //como si el useFetch los hubiese entregado.
        //Para esto es necesario la linea 6.

        const wrapper = shallow(<GifGrid tags={tag} />);
        expect(wrapper).toMatchSnapshot();
    });
    */
});
