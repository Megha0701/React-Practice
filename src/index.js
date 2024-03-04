//1) Import the React and ReactDom bibraries
import React from 'react';
import  ReactDOM  from 'react-dom/client';
import App from './App';

//2)get a refernce to div with id root
const el = document.getElementById('root');

//3)tell react to take control of that element
const root = ReactDOM.createRoot(el);

//4)Create a component
//5)show the component on the screen
root.render(<App/>);