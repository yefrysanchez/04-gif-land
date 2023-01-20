import { render, screen } from "@testing-library/react"
import { Cards } from "../../components/Cards"



describe('Cards Testing', () => { 

    const title = 'Jon'
    const url = 'https://www.testingmyproject.pass'
    
    test('should match with the snapshot', () => { 

        const {container} = render( <Cards title={title} url={url} />)

        expect( container ).toMatchSnapshot()
       
        

     })


    // test('should show the img with the url and ALT indicated', () => { 
    
    //     render( <Cards title={title} url={url} />)
    //     // screen.debug();
    //    expect( screen.getByRole('img').src).toBe(url)
    //    expect( screen.getByRole('img').alt).toBe(title)

    // })

    test("should show component's name", () => { 
    
        render( <Cards title={title} url={url} />)
        expect(screen.getByText( title)).toBeTruthy()

    })
 })

 