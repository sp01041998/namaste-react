const parent = React.createElement(
    "div", 
    {id : "parent"}, 
    [   React.createElement("div", {id : "child"}, 
    [React.createElement("h1", {id : "tag"}, "Thi is shreyash patel"), React.createElement("h2", {id : "tag"}, "Hi Shreyash how are you")]), React.createElement("div", {id : "child2"}, 
    [React.createElement("h1", {id : "tag"}, "Thi is shreyash patel"), React.createElement("h2", {id : "tag"}, "Hi Shreyash how are you")])]
    )
const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(root)
root.render(parent)