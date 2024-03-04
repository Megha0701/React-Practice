//1) Import the React and ReactDom bibraries
import React from 'react';
import  ReactDOM  from 'react-dom/client';

//2)get a refernce to div with id root
const el = document.getElementById('root');

//3)tell react to take control of that element
const root = ReactDOM.createRoot(el);

//4)Create a component
function App() {
    let message = "bye there"
    if(Math.random()>0.5)
    message = "hi there";
    return <h1>{message}</h1>
}

root.render(<App/>);