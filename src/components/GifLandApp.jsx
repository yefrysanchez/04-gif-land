import { useState } from "react";
import AddCategory from "./AddCategory";
import GifGrid from "./GifGrid";

const GifLandApp = () => {
  const [categories, setCategories] = useState(["Dragon ball"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) {
      return;
    }
    setCategories([newCategory, ...categories]);
  };



  return (
    <>
      <h1 className="logo">GiFL'ND</h1>

      <AddCategory onNewCategory= {value => onAddCategory(value)} />
        {categories.map((category) => {
          return <GifGrid key={category} category={category} />
        })}
    </>
  );
};

export default GifLandApp;
