import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Navbar, Container, Nav, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

import { searchCity } from '../action/index';

const StyledFormControl = styled(Form.Control)`
    margin-right: 10px;
`;

export default function SearchBar() {

    const [name, setName] = useState(""); // 첫 시작은 빈값
    const dispatch = useDispatch();
    const loading = useSelector(state => state.loading)

    return (
        <Navbar bg="success" variant="dark">
            <Container>
                <Navbar.Brand href="#">🌦 weather checker 🌦 </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="mr-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                    </Nav>
                    <StyledFormControl
                        type="text"
                        placeholder="Please enter city name"
                        className="mr-2"
                        aria-label="Search"
                        value={name}
                        onChange={(event) => {
                            setName(event.target.value);
                        }}
                        onKeyDown={(event) => {
                            if (event.keyCode === 13) {
                                if (!loading) { // If it's not loading
                                    dispatch(searchCity(name));
                                    setName(""); // searchBar initialization
                                }
                                event.preventDefault();
                                return false;
                            }
                        }}
                    />
                    <Button
                        disabled={loading}
                        variant="danger"
                        type="button"
                        onClick={() => {
                            dispatch(searchCity(name));
                            setName("");
                        }}>
                        {loading && (<FontAwesomeIcon icon={faSpinner} spin />)}
                        {/* loading 이 없을 때 */}
                        {!loading && "Search"}
                    </Button>
                </Navbar.Collapse>
            </Container>

        </Navbar>
    )
}