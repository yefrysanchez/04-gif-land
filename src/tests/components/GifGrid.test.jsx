import { render, screen } from "@testing-library/react";
import GifGrid from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";

jest.mock(("../../hooks/useFetchGifs"))


describe("Testing GifGrid.jsx", () => {


  const category = "Dragon ball";

  test("should show the loading ", () => {

    const gifs = [{
        id: 'ABC', 
        title: 'Jon Snow',
        url: 'https://snow.com/jsg'
    }]

    useFetchGifs.mockReturnValue({
        image: [],
        isLoading: true
    })

    render( <GifGrid category={category} />)


    render(<GifGrid category={category} />);
    expect( screen.getByText("Cargando..."))
    expect( screen.getByText( category))

  });



  test('should  show items when the images are loaded', () => { 


   })
});
