//1) Import the React and ReactDom bibraries
import React from 'react';
import  ReactDOM  from 'react-dom/client';

//2)get a refernce to div with id root
const el = document.getElementById('root');

//3)tell react to take control of that element
const root = ReactDOM.createRoot(el);

//4)Create a component
function App() {
    return <input style = {{border:'3px solid red'}} type = "number" min={5}/>
}

root.render(<App/>);