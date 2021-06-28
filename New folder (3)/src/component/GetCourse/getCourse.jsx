import React, { Component} from 'react'
import {Nav, Navbar, NavDropdown, Form, Button,Table,Modal} from "react-bootstrap";
import axios from 'axios';
    
    export class getCourse extends Component{
    
        state = {
            courses:[],
            count:1
        }
    
        componentDidMount() {
            axios.get('http://localhost:5000/course/getCourses').
            then(res => {
                const course = res.data.getCourse;
                console.log(course);
                this.setState({courses:course});
            }).catch(err => err.message)
        }
    
        deleteCourses = (id) => {
            axios.delete(`http://localhost:5000/course/deleteCourse/${id}`).
            then(res =>{
                if(res.data.success){
                    alert(res.data.message);
                    window.location.reload(false);
                }
            })
        }
    
        render()
        {
            return(
                <div className="container" style={{paddingTop:'50px'}}>
                    <Table striped bordered hover variant="dark">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Code</th>
                            <th>Pass Mark</th>
                            <th>Lecturer In Charge</th>
                            <th>Action</th>
    
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.courses.map(course => (
                            <tr>
                                <td>{this.state.count}</td>
                                <td>{course.name}</td>
                                <td>{course.code}</td>
                                <td>{course.passmark}</td>
                                <td>{course.lecturer_in_Charge}</td>
                                <td style={{width:'200px'}}><Button variant="secondary"  onClick={this. deleteCourses.bind(this,course._id)}>Delete</Button></td>
                            </tr>
                        ))}
    
                        </tbody>
                    </Table>
                </div>
            )
        }
    
    }
   

export default getCourse;