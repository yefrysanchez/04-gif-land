import React, { useState } from "react";
import propTypes from 'prop-types'

const AddCategory = ({onNewCategory}) => {
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
  };


    
    const onSubmit = (e) => {
        e.preventDefault()

        if( input.trim().length <= 1) return 

        onNewCategory(input.trim())
        setInput('')
        
    }

  return (
    <form onSubmit={onSubmit} aria-label ="form"> 
      <input type="text" value={input} placeholder="Search Gif" onChange={handleInput} />
    </form>
  );
};

AddCategory.propTypes= {
  onNewCategory: propTypes.func.isRequired
}



export default AddCategory;
