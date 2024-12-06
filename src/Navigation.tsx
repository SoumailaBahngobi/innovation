

import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { Kitchen } from './Component/Kitchen/Kitchen';

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
                            to="../Component/AboutUs"
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
                            to="../Component/Kitchen"
                        >
                            Kitchen
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}



// <Routes>
//   <Route path="/Component/AboutUs" element={<AboutUs />} />
//   <Route path="/Component/LivingRoom" element={<LivingRoom />} />
//   <Route path="/Component/Kitchen" element={<Kitchen />} />
//   <Route path="/Component/Outdoors" element={<Outdoors />} />
//   <Route path="/Component/Contact" element={<Contact />} />
// </Routes>