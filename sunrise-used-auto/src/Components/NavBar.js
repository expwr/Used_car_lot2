import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from './Sunrise Long.png'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import Home from "../Pages/Home";
import Cars from "../Pages/Cars";
import Reps from "../Pages/Reps";
import LoanEst from "../Pages/LoanEst";
import Account from "../Pages/Account";
import Support from "../Pages/Support";

export default class NavBarComp extends Component {
  render() {
    return (
      <Router>
      <div>
        <Navbar bg="info" expand="md">
            <Container>
            <Navbar.Brand href="/">
                <img 
                src = {logo} 
                width="150"
                height="50"
                className='d-inline-block'
                alt='Logo'
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-10">
                <Nav.Link as={Link} to={"/"} color='white'>Home</Nav.Link>
                <Nav.Link as={Link} to={"/Cars"} color='white'>Cars</Nav.Link>
                <Nav.Link as={Link} to={"/Reps"} color='white'>Representatives</Nav.Link>
                <Nav.Link as={Link} to={"/LoanEst"} color='white'>LoanEst</Nav.Link>
                <Nav.Link as={Link} to={"/Account"} color='white'>Account</Nav.Link>
                <Nav.Link as={Link} to={"/Support"} color='white'>Support</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                    Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                    Separated link
                </NavDropdown.Item>
                </NavDropdown>
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
      </div>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Cars' element={<Cars/>}/>
          <Route path='/Reps' element={<Reps/>}/>
          <Route path='/LoanEst' element={<LoanEst/>}/>
          <Route path='/Account' element={<Account/>}/>
          <Route path='/Support' element={<Support/>}/>
        </Routes>
      </Router>
    )
  }
}
