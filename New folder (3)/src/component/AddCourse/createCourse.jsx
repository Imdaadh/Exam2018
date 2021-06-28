import React, { Component} from 'react'
import {Nav, Navbar, NavDropdown, Form, Button} from "react-bootstrap";
import axios from 'axios';
import Select from 'react-select';


const initialState = {
    courseName: '',
    code: '',
    passMark: '',
    lecture: '',
    subjects: [],
    options: [],
    selectedSubjects: []
   
    }

export class createCourse extends Component{

 constructor(props) {

        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onSubjectSelect = this.onSubjectSelect.bind(this);
        this.state = initialState;
       
        }

onChange(e) {
this.setState({ [e.target.name]: e.target.value })
}
           
           
onSubjectSelect(e) {
this.setState({ selectedSubjects: e ? e.map(item => item.value) : [] });
}


componentDidMount() {
    axios.get('http://localhost:5000/subject/getSubjects').then(response => {
       this.setState({subjects: response.data}, ()=> {
       console.log('subjects',this.state.subjects);
       let data = []; //options [] are captured
       this.state.subjects.map((item, index) => {
     let subject = {
                value: item._id,
                label: item.name
                    }
                data.push(subject)
                 });
                this.setState({ options: data });
       })

    })
}

onSubmit(e) {
e.preventDefault();
let course = {
name: this.state.courseName,
code: this.state.code,
passmark: this.state.passMark,
lecturer_in_Charge: this.state.lecture,
subjects: this.state.selectedSubjects
};
console.log('DATA TO SEND', course)
axios.post('http://localhost:5000/course/Course', course)
.then(response => {
   alert('Course Data successfully inserted')
   })
   .catch(error => {
   console.log(error.message);
   alert(error.message)
   })
}

    render(){
        return(
    <div className='container' style={{paddingTop:'30px'}}>

<Form onSubmit={this.onSubmit}>
  <Form.Group controlId="formBasicEmail">
  <Form.Label>Name</Form.Label>

         <Form.Control type="text" 
         placeholder="Enter Course Name"
         name="courseName"
         value={this.state.courseName}
         onChange={this.onChange}
         />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
         <Form.Label>Code</Form.Label>
                <Form.Control type="text" 
                placeholder="Enter Course Code" 
                name="code"
                value={this.state.code}
                onChange={this.onChange}
/>
                </Form.Group>
        

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Pass mark</Form.Label>
    <Form.Control type="text"
     placeholder="Enter the Pass Mark"
     name="passMark"
     value={this.state.passMark}
     onChange={this.onChange}/>
  </Form.Group>
  

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Lecturer In Charge</Form.Label>
    <Form.Control type="text" 
    placeholder="Enter the Lecturer In Charge"
    name="lecture"
    value={this.state.lecture}
    onChange={this.onChange}
     />
  </Form.Group>

  <Form.Group>
    <Form.Label>Select the Subjects: </Form.Label>
    <Select
        options={this.state.options}
        onChange={this.onSubjectSelect}
        className="basic-multi-select"
        isMulti
    />
</Form.Group>

 

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</div>
)
}

}


export default createCourse;