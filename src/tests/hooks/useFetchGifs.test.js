import React from "react";
import "@testing-library/jest-dom";
import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from "@testing-library/react-hooks";

describe("Test de <useFetchGifs/>", () => {
    // ============ TESTS ============ //
    test("Test 1", async () => {
        const { result, waitForNextUpdate } = renderHook(() =>
            useFetchGifs("Konosuba")
        );
        const { data, loading } = result.current;

        await waitForNextUpdate();
        expect(data).toEqual([]);
        expect(loading).toBe(true);
    });

    test("Test 2", async () => {
        const { result, waitForNextUpdate } = renderHook(() =>
            useFetchGifs("Konosuba")
        );
        await waitForNextUpdate();
        const { data, loading } = result.current;

        expect(data.length).toEqual(6);
        expect(loading).toBe(false);
    });
});
