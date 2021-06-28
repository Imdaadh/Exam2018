import React, { Component} from 'react'
import {Nav, Navbar, NavDropdown} from "react-bootstrap";






export class Header extends Component{
    render(){
        return(
    

<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="/getCourse">Subjects And Courses</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/Createcourse">Add Course</Nav.Link>
      <Nav.Link href="/getCourse">Get All Courses</Nav.Link>
      <NavDropdown title="Subjects" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Get Subjects for a Course</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Course Amount</NavDropdown.Item>
        
        <NavDropdown.Divider />
      </NavDropdown>
    </Nav>
   
  </Navbar.Collapse>
</Navbar>
        )
    }

}

export default Header