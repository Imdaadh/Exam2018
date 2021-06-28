import { Component } from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Section from "./component/Section";
import Header from "./component/Header/Header";

export class App extends Component{
    render(){
        return(
            <Router>
              {<Header/>}
                <Section/>
                </Router>
        )
    }
}
export default App;