import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Navbar, Container, Nav, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

import { addCity } from '../action/index';

const StyledFormControl = styled(Form.Control)`
    border: 1px solid #ff9800;
    margin-right: 10px;
`;

export default function SearchBar() {

    const [name, setName] = useState(""); // 첫 시작은 빈값
    const dispatch = useDispatch();
    const loading = useSelector(state => state.loading)

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
                    <StyledFormControl
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
                                if (!loading) { // If it's not loading
                                    dispatch(addCity(name));
                                    setName(""); // searchBar initialization
                                }
                                event.preventDefault();
                                return false;
                            }
                        }}
                    />
                    <Button
                        disabled={loading}
                        variant="outline-success"
                        type="button"
                        onClick={() => {
                            dispatch(addCity(name));
                            setName("");
                        }}>
                        {loading && (<FontAwesomeIcon icon={faSpinner} spin />)}
                        {/* loading 이 없을 때 */}
                        {!loading && "ADD"}
                    </Button>
                </Navbar.Collapse>
            </Container>

        </Navbar>
    )
}