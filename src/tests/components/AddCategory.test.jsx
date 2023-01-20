import { render, screen, fireEvent } from "@testing-library/react"
import AddCategory from "../../components/AddCategory"



describe('Testing AddCategory.jsx', () => { 


    test('should change the value of the text', () => { 

        render( <AddCategory onNewCategory={()=> {}}/>)
        const input = screen.getByRole('textbox')

        fireEvent.input( input, {target: {value: "Jon Snow"}} )

        expect(input.value).toBe("Jon Snow")


     })


    test('should call onNewCategory if the input has a value', () => { 
    
        const inputValue = 'Jon Snow'
        const onNewCategory = jest.fn()

        render( <AddCategory onNewCategory={ onNewCategory} />)
        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')

        fireEvent.input( input, {target: {value: inputValue}} )
        fireEvent.submit(form);

        expect( input.value).toBe('')

        expect( onNewCategory ).toHaveBeenCalled()
        

     }) 

     test('should not call onNewCategory if the input is empty', () => { 

        render( <AddCategory onNewCategory={ onNewCategory} />)
        const form = screen.getByRole('form')
        const onNewCategory = jest.fn()

        fireEvent.submit(form);

        expect( onNewCategory ).toHaveBeenCalledTimes(0)


      })

    

 })