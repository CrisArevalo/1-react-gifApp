import React from "react";
import { GifGridItem } from "../../components/GifGridItem.js";
import { shallow } from "enzyme";

describe("Tests en <GifGridItem/>", () => {
    const title = "Megumin";
    const id = "123";
    const url = "https://wallpapercave.com/wp/wp5942828.jpg";

    const wrapper = shallow(<GifGridItem id={id} url={url} />);

    // ============ TESTS ============ //
    /*
    test("Test Component - GifGridItem", () => {
        expect(wrapper).toMatchSnapshot();
    });

    test("Test de las propiedades", () => {
        const imagen = wrapper.find("img");
        const srcLocal = imagen.prop("src"); // Si pongo props me trae todo
        // Equivalente a .props().src
        const idLocal = imagen.prop("alt");
        const clases = imagen.prop("className");

        expect(srcLocal).toBe(url);
        expect(idLocal).toBe(id);
        expect(clases.includes("GifGrid")).toBe(true);
    });

    */
});
