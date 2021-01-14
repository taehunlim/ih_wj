import React, {Fragment, useState, useEffect} from 'react';
import {
    Container,
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import {IoIosMenu} from 'react-icons/io'

import logo from '../../assets/images/logo_top.png'
import MobileMenu from "./elements/MobileMenu";
// import ScrollspyNav from "./elements/scrollSpy";

const Header = () => {

    const [ offCanvasMobileMenu, setOffCanvasMobileMenu ] = useState(false);
    const [scroll, setScroll] = useState();
    const [headerTop, setHeaderTop] = useState();
    const [headerHeight, setHeaderHeight] = useState();

    const [navItems] = useState([
        { id: 1 , idnm : "section1", navheading: "SECTION1" },
        { id: 2 , idnm : "section2", navheading: "SECTION2" },
        { id: 3 , idnm : "section3", navheading: "SECTION3" },

    ]);

    // let TargetId = navItems.map((item) => item.idnm);

    useEffect(() => {
        const header = document.querySelector("nav");
        setHeaderTop(header.offsetTop)
        setHeaderHeight(header.offsetHeight);
        window.addEventListener("scroll", handleScroll)
        scroll > headerTop
            ? (document.body.style.paddingTop = `${headerHeight}px`)
            : (document.body.style.padding = 0);

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [headerTop, headerHeight, scroll])

    const handleScroll = () => {
        setScroll(window.scrollY)
    }

    return (
        <Fragment>
            <Navbar expand="lg" fixed="top" className={`navigation sticky ${
                scroll > headerTop ? "nav-sticky" : ""
            }`}>
                <Container>
                    <NavbarBrand className="navbar-logo " href="/">
                        <img src={logo} alt="" height="19" className="logo logo-light"/>
                        <img src={logo} alt="" height="19" className="logo logo-dark"/>
                    </NavbarBrand>

                    {/*<ScrollspyNav*/}
                    {/*    scrollTargetIds={TargetId}*/}
                    {/*    scrollDuration="300"*/}
                    {/*    headerBackground="true"*/}
                    {/*    activeNavClass="active"*/}
                    {/*>*/}
                        <Nav className="ml-auto navbar-nav d-none d-lg-flex" id="topnav-menu">
                            {navItems.map((item, key) => (
                                <NavItem key={key} className={item.navheading === "COLOR of Life" ? "active" : ""}>
                                    <NavLink href={"#" + item.idnm}>{item.navheading}</NavLink>
                                </NavItem>
                            ))}
                        </Nav>
                    {/*</ScrollspyNav>*/}

                    <ul className="d-block d-lg-none">
                        <li>
                            <button
                                className="mobile-nav-btn"
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
