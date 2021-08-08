import React from 'react';
import { Navbar, Container, Nav, Form, Button } from 'react-bootstrap';

export default function SearchBar() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#">🌦 weather checker 🌦 </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="mr-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link href="#action2">Link</Nav.Link>
                    </Nav>
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="mr-2"
                        aria-label="Search"

                    />
                    <Button variant="outline-success">Search</Button>
                </Navbar.Collapse>
            </Container>

        </Navbar>
    )

}