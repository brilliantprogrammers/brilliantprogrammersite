import React, { Component } from 'react'
import './css/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap'
import Logo from './images/logo.png'

class Navb extends Component {

    render() { 
        return (
            <Navbar sticky="bottom" className="nav_bp" bg="light" expand="lg">
            <Navbar.Brand href="#home"><img height="40px" src={ Logo } alt="Brilliantprogrammer"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto ">
                <Nav.Link color="red" className="navlinkh" href="/">Home</Nav.Link>
                <Nav.Link className="navlinkh" href="/python">Python</Nav.Link>
                <Nav.Link className="navlinkh" href="/">Big Data</Nav.Link>
                <NavDropdown className="navlinkh" title="Topics" id="basic-nav-dropdown">
                  <NavDropdown.Item className="navlinkh" href="#action/3.1">Django</NavDropdown.Item>
                  <NavDropdown.Item className="navlinkh" href="#action/3.2">Web Development</NavDropdown.Item>
                  <NavDropdown.Item className="navlinkh" href="#action/3.3">React</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item className="navlinkh" href="#action/3.4">Tech</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link className="navlinkh" href="/">Write</Nav.Link>
              </Nav>
              <Form inline>
                <FormControl type="text" placeholder="Search Category" className="mr-sm-2" />
                <Button variant="outline-danger">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Navbar>
        )
    }
}
 
export default Navb;