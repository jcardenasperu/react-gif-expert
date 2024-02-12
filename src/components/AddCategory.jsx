import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, SetinputValue] = useState("");

  const onInputChange = (event) => {
    SetinputValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    ///setCategories([...categories,'Valorant']);
    //if (inputValue.trim().length <= 1) return;
    //setCategories((categories) => [inputValue, ...categories]);
    //console.log(inputValue);
    //SetinputValue("");

    if (inputValue.trim().length <= 1) return;
    onNewCategory(inputValue.trim());
    SetinputValue("");
  };

  //onChange={ (event) => onInputChange(event)}
  //<form onSubmit={(event) => onSubmit(event)}>
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar gif"
        value={inputValue}
        onChange={onInputChange}
      ></input>
    </form>
  );
};
