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

const customClass = "NavBar-links"

export default class NavBarComp extends Component {
  render() {
    return (
      <Router>
      <div>
        <Navbar className='NavBar' variant='light' fixed='top'>
            <Container>
            <Navbar.Brand href="/">
                <img 
                src = {logo} 
                width="150"
                height="50"
                className='Logo'
                alt='Logo'
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className='NavBar-col'>
            <Nav>
                <Nav.Link as={Link} to={"/"} bsPrefix = {customClass}>Home</Nav.Link>
                <Nav.Link as={Link} to={"/Cars"} bsPrefix = {customClass}>Cars</Nav.Link>
                <Nav.Link as={Link} to={"/Reps"} bsPrefix = {customClass}>Representatives</Nav.Link>
                <Nav.Link as={Link} to={"/LoanEst"} bsPrefix = {customClass}>LoanEst</Nav.Link>
                <Nav.Link as={Link} to={"/Account"} bsPrefix = {customClass}>Account</Nav.Link>
                <Nav.Link as={Link} to={"/Support"} bsPrefix = {customClass}>Support</Nav.Link>
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
