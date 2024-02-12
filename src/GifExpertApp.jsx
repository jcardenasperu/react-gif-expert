import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const onAddCategory = (NewCategory) => {
    //console.log(NewCategory);
    //setCategories([...categories,'Valorant']);
    if (categories.includes(NewCategory)) return;
    setCategories([NewCategory, ...categories]);
    //setCategories( cat =>[...cat,'Valorant'] );
  };

  //console.log(categories);

  return (
    <>
      {/* titulo */}
      <h1>GifExpertApp</h1>
      {/* Input */}
      <AddCategory
        //setCategories={ setCategories }
        onNewCategory={(event) => onAddCategory(event)}
      ></AddCategory>
      {/*<button onClick={onAddCategory}>Agregar</button>
       Listado de Gif */}
      {/* Gif Item */}
      {/*<ol>
             {categories.map((category) => {
          return <li key={category}>{category}</li>;
          //return <li >Hola</li>
        })} 
      {categories.map((category) => (
        <div key={category}>
            <h3>{category}</h3>
            <li>{category}</li>
          </div> 
        ))} 
       
        
      </ol>*/}
      {categories.map((category) => (
        <GifGrid key={category} category={category}></GifGrid>
      ))}
    </>
  );
};
