import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../hooks/useFetchGifs";

describe("Testing hook FetchGif.js", () => {
  test("should return initial state", () => {
    const { result } = renderHook(useFetchGifs("dragon ball"));
    const { images, isLoading } = result.current;

    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test("should return an array of imgs and isLoading is false", async () => {
    const { result } = renderHook(useFetchGifs("dragon ball"));
    await waitFor(() => {
      expect(result.current.images.length).toBeGreaterThan(0);
    });

    const { images, isLoading } = result.current;

    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });
});
