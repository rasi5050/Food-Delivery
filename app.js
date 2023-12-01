import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", {id: "parent"}, 
    React.createElement("div", {}, [
        React.createElement("h1", {id: "heading"}, "This is h1 tag"),
        React.createElement("h2", {id: "sub-heading"}, "This is a h2 tag")
    ])
)

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)


