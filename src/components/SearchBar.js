import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { Navbar, Container, Nav, Form, Button } from 'react-bootstrap';
import { addCity } from '../action/index';

export default function SearchBar() {

    const [name, setName] = useState(""); // 첫 시작은 빈값
    const dispatch = useDispatch()

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
                        type="text"
                        placeholder="Add"
                        className="mr-2"
                        aria-label="Add"
                        value={name}
                        onChange={(event) => {
                            setName(event.target.value);
                        }}
                        onKeyDown={(event) => {
                            if (event.keyCode === 13) {
                                dispatch(addCity(name));
                                event.preventDefault();
                                setName(""); // searchBar initialization
                                return false;
                            }
                        }}
                    />
                    <Button
                        variant="outline-success"
                        type="button"
                        onClick={() => {
                            dispatch(addCity(name));
                            setName("");
                        }}>ADD</Button>
                </Navbar.Collapse>
            </Container>

        </Navbar>
    )
}