import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from './CompPictures/Sunrise Long.png'
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
import About from "../Pages/AboutUs"
import Contact from "../Pages/Contact"
import Login from "../Pages/Login"
import SignUp from '../Pages/SignUp';

const customClass1 = "NavBar-links1"
const customClass2 = "NavBar-links2"
const customClass3 = "Sign-Up"

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
            <Nav className='Nav1'>
                <Nav.Link as={Link} to={"/"} bsPrefix = {customClass1}>Home</Nav.Link>
                <Nav.Link as={Link} to={"/Cars"} bsPrefix = {customClass1}>Cars</Nav.Link>
                <Nav.Link as={Link} to={"/Reps"} bsPrefix = {customClass1}>Representatives</Nav.Link>
                <Nav.Link as={Link} to={"/LoanEst"} bsPrefix = {customClass1}>Loan Estimator</Nav.Link>
                <Nav.Link as={Link} to={"/Account"} bsPrefix = {customClass1}>Account</Nav.Link>
                <Nav.Link as={Link} to={"/Support"} bsPrefix = {customClass1}>Support</Nav.Link>
            </Nav>
            <Nav className='Nav2'>
                <Nav.Link as={Link} to={"/About"} bsPrefix = {customClass2}>About</Nav.Link>
                <Nav.Link as={Link} to={"/Contact"} bsPrefix = {customClass2}>Contact</Nav.Link>
                <Nav.Link as={Link} to={"/Login"} bsPrefix = {customClass2}>Login</Nav.Link>
                <Nav.Link as={Link} to={"/SignUp"} bsPrefix = {customClass3}>Sign Up</Nav.Link>
            </Nav>
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
          <Route path='/About' element={<About/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/SignUp' element={<SignUp/>}/>
        </Routes>
      </Router>
    )
  }
}
