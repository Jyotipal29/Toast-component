import "./styles.css";
import React, { useState } from "react";

export default function Toast() {
  const [isShow, setShow] = useState(true);

  const toggleToast = () => {
    setShow(!isShow);
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Toast</h1>

      <div>
        <button
          style={{
            padding: "10px",
            height: "10vh",
            width: "25vh",
            backgroundColor: "black",
            color: "white",
            borderRadius: "0.5rem",
            margin: "1rem 4rem"
          }}
          onClick={toggleToast}
        >
          {isShow ? "Hide" : "Show"} Toast{" "}
        </button>

        <div
          style={{
            border: "solid 1px green",
            padding: "10px",
            display: isShow ? "" : "none",
            height: "5vh",
            width: "20vh",
            borderRadius: "0.5rem",
            color: "white",
            backgroundColor: "blue",
            margin: "1rem 4rem"
          }}
        >
          <div>Toasted!</div>
        </div>
      </div>
    </div>
  );
}
