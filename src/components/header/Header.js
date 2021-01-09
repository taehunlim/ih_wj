import React, {Fragment, useState} from 'react';
import {
    Container,
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import {IoIosMenu} from 'react-icons/io'

import logo from '../../assets/images/logo.jpg'
import MobileMenu from "./elements/MobileMenu";

const Header = () => {

    const [ offCanvasMobileMenu, setOffCanvasMobileMenu ] = useState(false);

    const [navItems, setNavItems] = useState([
        { id: 1 , idnm : "coloroflife", navheading: "COLOR of Life" },
        { id: 2 , idnm : "ihoflife", navheading: "IH of Life" },
        { id: 3 , idnm : "ihnews", navheading: "IH News" },
        { id: 4 , idnm : "service", navheading: "SERVICE" },
    ]);

    return (
        <Fragment>
            <Navbar fixed="top" className="navigation sticky nav-sticky">
                <Container>
                    <NavbarBrand className="navbar-logo " href="/">
                        <img src={logo} alt="" height="19" className="logo logo-light"/>
                        <img src={logo} alt="" height="19" className="logo logo-dark"/>
                    </NavbarBrand>

                    <Nav className="ml-auto navbar-nav d-none d-lg-flex" id="topnav-menu">
                        {navItems.map((item, key) => (
                            <NavItem key={key} className={item.navheading === "COLOR of Life" ? "active" : ""}>
                                <NavLink href={"#" + item.idnm}>{item.navheading}</NavLink>
                            </NavItem>
                        ))}
                    </Nav>

                    <ul className="d-block d-lg-none">
                        <li>
                            <button
                                className="mobile-nav-btn"
                                style={{
                                    border: "none"
                                }}
                                onClick={() => setOffCanvasMobileMenu(true)}
                            >
                                <IoIosMenu />
                            </button>
                        </li>
                    </ul>


                </Container>
            </Navbar>

            <MobileMenu
                active={offCanvasMobileMenu}
                getActive={setOffCanvasMobileMenu}
            />
        </Fragment>
    );
};

export default Header;
