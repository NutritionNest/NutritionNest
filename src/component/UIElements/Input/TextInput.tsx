import React from "react";

export const TextInput = (props) => {
  const { name, type, placeholder, label } = props;
  return (
    <>
      {label && <label for={label} />}
      <input
        className="input-primary"
        name={name}
        type={type}
        placeholder={placeholder}
      />
    </>
  );
};
