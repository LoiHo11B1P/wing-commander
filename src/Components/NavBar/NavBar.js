import { Nav, Navbar, Container} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NavBar.css"

const NavBar = () => {
    
    return (
        
            <Navbar bg="primary" className="white--text" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand id = "nav-bar-brand" href="/" >Wing Commander</Navbar.Brand>
                <Nav>
                    <Link className="nav-link" to="/dailyquote">Daily Quote</Link>
                    <Link className="nav-link" to="/planner">Planner</Link>
                    <Link className="nav-link" to="/timekeeper">Time Keeper</Link>
                </Nav>
            </Container>
            </Navbar>
        
    )
}

export default NavBar;