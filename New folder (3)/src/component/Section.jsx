import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Createcourse from './AddCourse/createCourse';
import Home from './Home/Home';
import getCourse from './GetCourse/getCourse'



export class Section extends Component{

    render(){
        return(
             <section>
              {<Route path="/Home" component={Home} exact />}
              <Route path="/Createcourse" component={Createcourse} exact />
              <Route path="/getCourse" component={getCourse} exact />


              </section>
           
        )
    }


}

export default Section