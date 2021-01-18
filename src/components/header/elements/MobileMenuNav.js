import React, { useEffect } from 'react';
import { Link } from'react-router-dom';
import {FaBloggerB, FaFacebookF, FaTwitter} from "react-icons/fa/index";
import {GoMailRead} from "react-icons/go/index";

const MobileMenuNav = ({getActiveStatus}) => {

    useEffect(() => {
        const offCanvasNav = document.querySelector(
            "#offcanvas-mobile-menu__navigation"
        );
        const offCanvasNavSubMenu = offCanvasNav.querySelectorAll(
            ".mobile-sub-menu"
        );
        const anchorLinks = offCanvasNav.querySelectorAll("a");

        for (let i = 0; i < offCanvasNavSubMenu.length; i++) {
            offCanvasNavSubMenu[i].insertAdjacentHTML(
                "beforebegin",
                "<span class='menu-expand'><i></i></span>"
            );
        }

        const menuExpand = offCanvasNav.querySelectorAll(".menu-expand");
        const numMenuExpand = menuExpand.length;

        for (let i = 0; i < numMenuExpand; i++) {
            menuExpand[i].addEventListener("click", (e) => {
                sideMenuExpand(e);
            });
        }

        for (let i = 0; i < anchorLinks.length; i++) {
            anchorLinks[i].addEventListener("click", () => {
                getActiveStatus(false);
            });
        }
    });

    const sideMenuExpand = (e) => {
        e.currentTarget.parentElement.classList.toggle("active");
    };

    return (
        <nav
            className="offcanvas-mobile-menu__navigation"
            id="offcanvas-mobile-menu__navigation"
        >
            <ul>
                <li className="menu-item-has-children">
                    <Link to="/">
                        SECTION Ⅰ
                    </Link>
                    <ul className="mobile-sub-menu">
                        <li className="menu-item-has-children">
                            <Link to="/section/1/1">
                                INTRO
                            </Link>
                        </li>

                        <li className="menu-item-has-children">
                            <Link to="/section/1/2">
                                신년사
                            </Link>
                        </li>
                        <li className="menu-item-has-children">
                            <Link to="/section/1/3">
                                ESSAY
                            </Link>
                        </li>
                        <li className="menu-item-has-children">
                            <Link to="/section/1/4">
                                INTERVIEW
                            </Link>
                        </li>
                    </ul>
                </li>

                <li className="menu-item-has-children">
                    <Link to="/">
                        SECTION Ⅱ
                    </Link>
                    <ul className="mobile-sub-menu">
                        <li className="menu-item-has-children">
                            <Link to="/section/2/1">
                                DOCTOR 1
                            </Link>
                        </li>

                        <li className="menu-item-has-children">
                            <Link to="/section/2/2">
                                DOCTOR 2
                            </Link>
                        </li>

                        <li className="menu-item-has-children">
                            <Link to="/section/2/3">
                                TEAM
                            </Link>
                        </li>

                        <li className="menu-item-has-children">
                            <Link to="/section/2/4">
                                RESEARCH
                            </Link>
                        </li>

                        <li className="menu-item-has-children">
                            <Link to="/section/2/5">
                                TRAINING
                            </Link>
                        </li>

                        <li className="menu-item-has-children">
                            <Link to="/section/2/6">
                                CLINIC
                            </Link>
                        </li>

                        <li className="menu-item-has-children">
                            <Link to="/section/2/7">
                                MOMENT
                            </Link>
                        </li>
                    </ul>
                </li>

                <li className="menu-item-has-children">
                    <Link to="/">
                        SECTION Ⅲ
                    </Link>
                    <ul className="mobile-sub-menu">
                        <li className="menu-item-has-children">
                            <Link to="/section/3/1">
                                AROUND
                            </Link>
                        </li>

                        <li className="menu-item-has-children">
                            <Link to="/section/3/2">
                                FOOD
                            </Link>
                        </li>

                        <li className="menu-item-has-children">
                            <Link to="/section/3/3">
                                TREND
                            </Link>
                        </li>

                        <li className="menu-item-has-children">
                            <Link to="/section/3/4">
                                ISSUE
                            </Link>
                        </li>

                        <li className="menu-item-has-children">
                            <Link to="/section/3/5">
                                IH NEWS
                            </Link>
                        </li>

                        <li className="menu-item-has-children">
                            <Link to="/section/3/6">
                                IH TODAY
                            </Link>
                        </li>

                        <li className="menu-item-has-children">
                            <Link to="/section/3/7">
                                IH LETTER
                            </Link>
                        </li>

                        <li className="menu-item-has-children">
                            <Link to="/section/3/8">
                                진료일정표
                            </Link>
                        </li>
                    </ul>
                </li>

                <li className="menu-item-has-children">
                    <Link to="/">
                        SERVICE
                    </Link>
                    <ul className="mobile-sub-menu">
                        <li className="menu-item-has-children">
                            <a href="https://blog.naver.com/hello_health" target="_blank" rel="noreferrer">
                                <FaBloggerB/>
                                <span className="ml-3">BLOR</span>
                            </a>
                        </li>

                        <li className="menu-item-has-children">
                            <a href="https://www.facebook.com/nhimc.hello.health" target="_blank" rel="noreferrer">
                                <FaFacebookF/>
                                <span className="ml-3">FACEBOOK</span>
                            </a>
                        </li>

                        <li className="menu-item-has-children">
                            <a href="https://twitter.com/Hello_Health" target="_blank" rel="noreferrer">
                                <FaTwitter/>
                                <span className="ml-3">TWITTER</span>
                            </a>
                        </li>

                        <li className="menu-item-has-children">
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLScsK3i7h-PjxH9vbklEFnTtWbInzWX05VovCjXDHFA0Xv7-Fw/viewform?vc=0&c=0&w=1&flr=0" target="_blank" rel="noreferrer">
                                <GoMailRead/>
                                <span className="ml-3">독자의견 메일</span>
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
};

export default MobileMenuNav;
