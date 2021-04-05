import React from "react";

import Navbar from 'react-bootstrap/Navbar';
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";






export default function MenuBar(props) {

    function handleLogout() {
        localStorage.removeItem("token");
    }
 
  if(props.isLoggedIn) {
    return(
        <div>
            <Navbar bg="dark" variant="dark" expand="lg">
            
                <Navbar.Brand href="#">KilledByCheese's Recipes</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
    
                    <Nav className="mr-auto">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/search">Search</Nav.Link>
                        <Nav.Link href="/categories">Categories</Nav.Link>
                    </Nav>
                    
                    <Nav className="ml-auto">
                        <Nav.Link href="/login" onClick={handleLogout}>Logout</Nav.Link>
                        <Nav.Link href="/myrecipes">My Recipes</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
      
    
        </div>
      );
  }
  return(
    <div>
        <Navbar bg="dark" variant="dark" expand="lg">
        
            <Navbar.Brand href="#">KilledByCheese's Recipes</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">

                <Nav className="mr-auto">
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="/search">Search</Nav.Link>
                    <Nav.Link href="/categories">Categories</Nav.Link>
                </Nav>
                
                <Nav className="ml-auto">
                    <Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link href="/register">Register</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
  

    </div>
  );
}
  

