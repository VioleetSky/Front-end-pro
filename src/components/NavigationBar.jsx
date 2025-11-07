import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import routerPaths from "../router/routerPaths.js";

const NavigationBar = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/">Todo list</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to={routerPaths.posts}>Posts List</Nav.Link>
                        <Nav.Link as={Link} to={routerPaths.createPost}>Create post</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;
