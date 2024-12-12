import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Header(){
    return(
            <Navbar expand="lg" className=" headernaver">
        <Container fluid>
            <Navbar.Brand href="#" className='ms-5 nametitle'>Mukesh Kumar</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll " className='togcol' />
            <Navbar.Collapse id="navbarScroll">
            <Nav
                className="me-auto my-1 my-lg-0 navtog "
                style={{ maxHeight: '100px', borderBottom:"2px solid gray" }}
                navbarScroll>  
            </Nav>
                <Nav.Link href="#hero" className='me-5 namenav' >Home</Nav.Link>
                <Nav.Link href="#about" className='me-5 namenav'>About</Nav.Link>
                <Nav.Link href="#pro" className='me-5 namenav'>Project</Nav.Link>
                <Nav.Link href="#contact" className='me-5 namenav'>Contact</Nav.Link>
            
            </Navbar.Collapse>
        </Container>
    </Navbar>
    )
}
export default Header