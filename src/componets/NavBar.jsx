import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link, Route, Routes} from 'react-router-dom';
import Players from './Home';
import Standings from './Standings';
import Fixtures from './Fixtures';
import PaltanWorld from './PaltanWorld';
import Tickets from './Tickets';
import logo from '../assets/logo.gif';


function NavBar() {
  return (
   <>
    <Navbar expand="lg" className="bg-body-tertiary" className="nav">
      <Container>
        <Navbar.Brand href="#home" className='nav-content'>  <img src={logo}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="me-auto nav-content">
            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link> */}

            <Nav.Link as={Link} to="/" className='nav-link' > Players </Nav.Link>
            <Nav.Link as={Link} to="/standings"> Standings </Nav.Link>
            <Nav.Link as={Link} to="/fixtures"> Fixtures </Nav.Link>
            <Nav.Link as={Link} to="/paltanworld"> Paltan World </Nav.Link>
            <Nav.Link as={Link} to="/tickets"> Tickets </Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>


    </Navbar>

       <Routes>
        <Route path='/' element={<Players/>}/>
        <Route path='/standings' element={<Standings/>}/>
        <Route path='/fixtures' element={<Fixtures/>}/>
        <Route path='/paltanworld' element={<PaltanWorld/>}/>
        <Route path='/tickets' element={<Tickets/>}/>
       </Routes>
 </>


  );
}

export default NavBar;