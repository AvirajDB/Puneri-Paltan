import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';


function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">LOGO</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="ms-auto">

            <Nav.Link as={Link} to="/"> Players </Nav.Link>
            <Nav.Link as={Link} to="/standings"> Standings </Nav.Link>
            <Nav.Link as={Link} to="/fixtures"> Fixtures </Nav.Link>
            <Nav.Link as={Link} to="/paltanworld"> Paltan World </Nav.Link>
            <Nav.Link as={Link} to="/tickets"> Tickets </Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;