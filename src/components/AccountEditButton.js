import React from "react";

function Edit({ field, value, onChange }) {
  return (
    <input
      type="text"
      className="form-control"
      id={`${field}Input`}
      placeholder={`Lütfen bir ${field} giriniz.`}
      value={value}
      onChange={onChange}
    />
  );
}

export default Edit;
