import React from 'react'; //importing the react
import {render} from 'react-dom'; //render is the method is used to insert  a react application into html
import App from "./App";
render(
        <App/>
    ,
    document.getElementById('app')
);