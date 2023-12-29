import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';

import Home from './Home';
import About from './About';
import Blog from './Blog';

const App = () => (
    <Router>
        <div>
            <Navbar bg="light" expand="lg">
                <div className={"container"}>
                    <Navbar.Brand href="#home">MadeForCSTU</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Link to="/" className="nav-link">Home</Link>
                            <Link to="/about" className="nav-link">About</Link>
                            <Link to="/blog" className="nav-link">Blog</Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/blog" element={<Blog/>}/>
            </Routes>
        </div>
    </Router>
);

export default App;
