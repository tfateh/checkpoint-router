import React, { useState } from 'react';
import {Navbar,Container,Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';
import { Rating } from 'react-simple-star-rating'

function Header({filterMovies}) {
    const [search, setSearch] = useState("");
    const [rating, setRating] = useState();
    
  return (
    <Navbar bg="light" expand="lg">
    <Container fluid>
      <Navbar.Brand href="#">Checkpoint Hooks</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <LinkContainer to="/">
          <Nav.Link href="/">Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/AddNewMovie">
          <Nav.Link href="/">add New Movies</Nav.Link>
          </LinkContainer>
          <NavDropdown title="Link" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#" disabled>
            Link
          </Nav.Link>
        </Nav>
        <Form className="d-flex">
        <Rating onClick={(rate)=>setRating(rate/20)} />
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            onChange={(e)=>setSearch(e.target.value)}
          />
          <Button onClick={()=>filterMovies(search,rating)} variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default Header;

