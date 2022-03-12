import React from "react";

const style = {
  backgroundColor: "#849f9f",
  height: "30px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px"
};

export const InputTodo = (props) => {
  const { todoText, onChange, onClick, disabled } = props;
  return (
    <div style={style}>
      <input
        disabled={disabled}
        placeholder="I have to do.."
        value={todoText}
        onChange={onChange}
      />
      <button diabled={disabled} onClick={onClick}>
        add
      </button>
    </div>
  );
};
