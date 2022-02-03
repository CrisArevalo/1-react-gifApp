import React from "react";
import PropTypes from "prop-types";
import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";

describe("Tests en el <AddCategory/>", () => {
    const mock = jest.fn(); //Funcion vacia que ofrece Jest
    let wrapper = shallow(<AddCategory setTags={mock} />);

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setTags={mock} />);
    });

    // ============ TESTS ============ //
    /*
    test("Test de Snapshot", () => {
        expect(wrapper).toMatchSnapshot();
    });

    test("Test en el input", () => {
        const input = wrapper.find("input");
        const value = "Hello Me";

        input.simulate("change", { target: { value } });
    });

    test("Test del submit", () => {
        wrapper.find("form").simulate("submit", { preventDefault() {} });
        // Simulando el envio de datos al submit.

        expect(mock).toHaveBeenCalled();
    });

    test("Ejercicio 1", () => {
        const value = "Hello Me";

        // 1. simular el inputChange
        wrapper.find("input").simulate("change", { target: { value } });
        // 2. simular el submit
        wrapper.find("form").simulate("submit", { preventDefault() {} });
        // 3. mock debe ser llamado
        expect(mock).toHaveBeenCalled(); //toHaveBeenCalledTimes(1) <- Otra forma
        // 4. el valor del input debe estar "" (vacio).
        expect(wrapper.find("input").prop("value")).toBe("");
    });
    */
});
