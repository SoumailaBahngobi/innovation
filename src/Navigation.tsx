

import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";

export default function Navigate() {
    const navigate = useNavigate();

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand key={0} href="/homepage">
                    @Shoes Store
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="">
                    <Nav className="w-100 justify-content-end">
                        <NavLink
                            key={1}
                            className={({ isActive, isPending }) =>
                                isPending
                                    ? "pending"
                                    : isActive
                                        ? "nav-link active"
                                        : "nav-link"
                            }
                            to="/homepage"
                        >
                            Homepage
                        </NavLink>
                        <NavLink
                            key={2}
                            className={({ isActive, isPending }) =>
                                isPending
                                    ? "pending"
                                    : isActive
                                        ? "nav-link active"
                                        : "nav-link"
                            }
                            to="/products"
                        >
                            Products
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}