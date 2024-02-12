import { useState } from "react";
export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, SetinputValue] = useState("");
  const onInputChange = (event) => {
    SetinputValue(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;
    onNewCategory(inputValue.trim());
    SetinputValue("");
  };
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
