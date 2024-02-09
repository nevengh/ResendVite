import { Container, Nav, Navbar } from 'react-bootstrap'
import './NavBar.css'
import logo from '../../assets/images/logo.svg'
import arrow from '../../assets/images/arrow_btn.svg'
const NavBar = () => {
    
    return (
        <Navbar fixed="top"    expand="lg" className='navbar'>
            <Container>
                <Navbar.Brand href="#home" className='nav-logo'>
                    <img src={logo} alt="" />
                </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="m-auto">
                            <Nav.Link href="#home" className='nav_Link'>About</Nav.Link>
                            <Nav.Link href="#link" className='nav_Link'>Blog</Nav.Link>
                            <Nav.Link href="#home" className='nav_Link'>Customers</Nav.Link>
                            <Nav.Link href="#link" className='nav_Link'>Pricng</Nav.Link>
                            <Nav.Link href="#home" className='nav_Link'>Enterprise</Nav.Link>
                            <Nav.Link href="#link" className='nav_Link'>Changelog</Nav.Link>
                            <Nav.Link href="#home" className='nav_Link'>Docs</Nav.Link>
                        </Nav>
                        <Nav.Link href="#home" className='nav_Link'>Sign in</Nav.Link>
                        
                    </Navbar.Collapse>
                    <div className="nav-btn nav-bttn-started">
                            <a href="#">
                                Get Started
                                <span className='arrow'>
                                    <img src={arrow} alt="" />
                                </span>
                            </a>
                    </div>
            </Container>
    </Navbar>
    )
}

export default NavBar