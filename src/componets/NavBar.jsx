import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link, Route, Routes} from 'react-router-dom';
import Player from './Player';
import Standings from './Standings';
import Fixtures from './Fixtures';
import PaltanWorld from './PaltanWorld';
import Tickets from './Tickets';
import logo from '../assets/logo.gif';
import Home from './Home';


function NavBar() {
  return (
   <>
    <Navbar expand="lg" className="bg-body-tertiary" className="nav">
      <Container>
        <Navbar.Brand as={Link} to="/" className='nav-content'>  <img src={logo}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="me-auto nav-content">
            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link> */}

            <Nav.Link as={Link} to="/player" className='nav-link' > Players </Nav.Link>
            <Nav.Link as={Link} to="/standings"> Standings </Nav.Link>
            <Nav.Link as={Link} to="/fixtures"> Fixtures </Nav.Link>
            <Nav.Link as={Link} to="/paltanworld"> Paltan World </Nav.Link>
            <Nav.Link as={Link} to="/tickets"> Tickets </Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>


    </Navbar>

       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/player' element={<Player/>}/>
        <Route path='/standings' element={<Standings/>}/>
        <Route path='/fixtures' element={<Fixtures/>}/>
        <Route path='/paltanworld' element={<PaltanWorld/>}/>
        <Route path='/tickets' element={<Tickets/>}/>
       </Routes>
 </>


  );
}

export default NavBar;