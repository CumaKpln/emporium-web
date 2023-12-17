import React from "react";

function Owner() {
  return (
    <div
      className="mt-5"
      style={{
        maxHeight:"200px",
        minWidth:"250px",
        border: "1px solid gray",
        borderRadius: "15px",
        padding: "15px",
      }}
    >
      <h5>Cuma KAPLAN</h5>
      <a href="/#">Tüm ilanları</a>
      <div className="mt-2"
        style={{
          backgroundColor: "lightGray",
          borderRadius: "15px",
          padding: "10px",
        }}
      >
        <div>
          İş :{" "}
          <span className="float-end" style={{ marginRight: "50px" }}>
            0545 545 54 54
          </span>
        </div>
        <hr />
        <div>
          Cep :
          <span className="float-end" style={{ marginRight: "50px" }}>
                0545 545 54 54
          </span>
        </div>
      </div>
    </div>
  );
}

export default Owner;
