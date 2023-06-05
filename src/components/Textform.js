import React, { useState } from "react"; //{ useState }-Hook in Javascript used for state

export default function Textform(props) {
  const handleUpClick = () => {
    //console.log("Upper Case was clicked " +text);
    let newtext = text.toUpperCase();
    settext(newtext);
  };
  const handleonChange = (event) => {
    //used to change the text after clicking the button
    //console.log("OnChange");
    settext(event.target.value); //With the help of this we can add text after we click the button
  };
  const [text, settext] = useState(""); //usestate - default value, text-variable , settext-A function jisme changes(update) honge joki text variable m reflect hoga
  // text= "new text";//Wrong way to change the state
  // settext= ("new text");//Wrong way to change the state
  return (
    <>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleonChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="myBox"
            rows="8"
          ></textarea>
          <html lang="en">
            <head>
              <meta charset="UTF-8" />
              <meta http-equiv="X-UA-Compatible" content="IE=edge" />
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
              />
              <title>Document</title>
            </head>
            <body></body>
          </html>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Covert to UpperCase
        </button>
      </div>

      <div
        className="card-body my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>Your Text Summary</h1>
        <div className="card">
          <ul className="list-group list-group-flush">
            <li
              className="list-group-item"
              style={{
                backgroundColor: props.mode === "dark" ? "grey" : "white",
                color: props.mode === "dark" ? "white" : "black",
              }}
            >
              {text.split(" ").length} words
            </li>
            <li
              className="list-group-item"
              style={{
                backgroundColor: props.mode === "dark" ? "grey" : "white",
                color: props.mode === "dark" ? "white" : "black",
              }}
            >
              {text.length} Characters
            </li>
          </ul>
        </div>
      </div>

      <h2 style={{ color: props.mode === "dark" ? "white" : "black" }}>
        Preview
      </h2>
      <div
        className="card my-3"
        style={{
          backgroundColor: props.mode === "dark" ? "grey" : "white",
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <div className="card-body">
          <p>{text}</p>
        </div>
      </div>
    </>
  );
}
