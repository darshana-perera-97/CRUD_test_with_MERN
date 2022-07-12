import React from "react";

export default function SingleToDo() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          margin: "5%",
          width: "50%",
          justifyContent: "space-between",
          background:"rgba(0,0,0,0.2)",
          padding:"2%"
        }}
      >
        <p style={{ margin: "0px" }}>Buy a cofee</p>
        <div>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
}
