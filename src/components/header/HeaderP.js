import React, {Fragment, useState, useEffect} from 'react';
import {
    Container,
    Navbar,
    NavbarBrand,
    Nav,
    Row,
    Col
} from 'reactstrap';

import { FaFacebookF, FaBloggerB, FaTwitter } from "react-icons/fa";
import {GoMailRead} from 'react-icons/go'

import {IoIosMenu, IoIosArrowDown} from 'react-icons/io'

import logo from '../../assets/images/logo_top.png'
import MobileMenu from "./elements/MobileMenu";

import sec101 from '../../assets/images/section1/1.png'
import sec102 from '../../assets/images/section1/2.png'
import sec103 from '../../assets/images/section1/3.1.png'
import sec104 from '../../assets/images/section1/4.jpg'

import sec201 from '../../assets/images/section2/1.jpg'
import sec202 from '../../assets/images/section2/2.jpg'
import sec203 from '../../assets/images/section2/3.jpg'
import sec204 from '../../assets/images/section2/4.png'
import sec205 from '../../assets/images/section2/5.jpg'
import sec206 from '../../assets/images/section2/6.png'
import sec207 from '../../assets/images/section2/7.jpg'

import sec301 from '../../assets/images/section3/1.jpg'
import sec302 from '../../assets/images/section3/2.jpg'
import sec303 from '../../assets/images/section3/3.png'
import sec304 from '../../assets/images/section3/4.JPG'
import sec305 from '../../assets/images/section3/5.JPG'
import sec306 from '../../assets/images/section3/6.jpg'
import sec307 from '../../assets/images/section3/7.jpg'
import sec308 from '../../assets/images/section3/8.jpg'

const Header = () => {

    const [ offCanvasMobileMenu, setOffCanvasMobileMenu ] = useState(false);
    const [scroll, setScroll] = useState();
    const [headerTop, setHeaderTop] = useState();
    const [headerHeight, setHeaderHeight] = useState();



    useEffect(() => {
        const header = document.querySelector("nav");
        setHeaderTop(header.offsetTop)
        setHeaderHeight(header.offsetHeight);
        window.addEventListener("scroll", handleScroll)

        document.body.style.paddingTop = `${headerHeight}px`


        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [headerTop, headerHeight, scroll])

    const handleScroll = () => {
        setScroll(window.scrollY)
    }

    return (
        <Fragment>
            <Navbar expand="lg" fixed="top" className={`navigation__page sticky ${
                scroll > headerTop ? "nav-sticky" : ""
            }`}>
                <Container>
                    <NavbarBrand className="navbar-logo " href="/">
                        <img src={logo} alt="" height="19" className="logo logo-light"/>
                        <img src={logo} alt="" height="19" className="logo logo-dark"/>

                        <h5 style={{color: "white", marginTop: "10px"}}>
                            vol.21 2021 winter 신년호
                        </h5>
                    </NavbarBrand>

                    <Nav className="ml-auto navbar-nav d-none d-lg-flex header-content__navigation space-pr--15 d-none d-lg-block">
                        <ul>

                            <li>
                                <a
                                    href="/"
                                >
                                    SECTION Ⅰ
                                </a>
                                <IoIosArrowDown />

                                <ul className="sub-menu sub-menu--mega sub-menu--mega--column-row">

                                    <li className="sub-menu--mega__title">
                                        <a href="/section/1/1">
                                            <Row className="align-items-center">
                                                <Col lg={1}>
                                                    <div
                                                        className="sub-menu--mega__title__img"
                                                        style={{backgroundImage : `url(${sec101})`}}
                                                    >
                                                    </div>

                                                </Col>
                                                <Col lg={11}>
                                                    INTRO
                                                    <div>
                                                        따뜻한 마음을 담아 2021년을 바라봅니다
                                                    </div>
                                                </Col>

                                            </Row>
                                        </a>
                                    </li>

                                    <li className="sub-menu--mega__title">
                                        <a href="/section/1/2">
                                            <Row className="align-items-center">
                                                <Col lg={1}>
                                                    <div
                                                        className="sub-menu--mega__title__img"
                                                        style={{backgroundImage : `url(${sec102})`}}
                                                    >

                                                    </div>

                                                </Col>
                                                <Col lg={11}>
                                                    신년사
                                                    <div>
                                                        2021년 희망찬 새해가 밝았습니다
                                                    </div>
                                                </Col>
                                            </Row>
                                        </a>
                                    </li>

                                    <li className="sub-menu--mega__title">
                                        <a href="/section/1/3">
                                            <Row className="align-items-center">
                                                <Col lg={1}>
                                                    <div
                                                        className="sub-menu--mega__title__img"
                                                        style={{backgroundImage : `url(${sec103})`}}
                                                    >

                                                    </div>

                                                </Col>
                                                <Col lg={11}>
                                                    ESSAY
                                                    <br/>
                                                    인간이 ‘본다’는 것은 일차원적이며 최고의 사고행위
                                                </Col>

                                            </Row>
                                        </a>
                                    </li>

                                    <li className="sub-menu--mega__title">
                                        <a href="/section/1/4">
                                            <Row className="align-items-center">
                                                <Col lg={1}>
                                                    <div
                                                        className="sub-menu--mega__title__img"
                                                        style={{backgroundImage : `url(${sec104})`}}
                                                    >

                                                    </div>

                                                </Col>
                                                <Col lg={11}>
                                                    INTERVIEW
                                                    <br/>
                                                    병원에서 ‘보다’의 의미를 찾다
                                                </Col>

                                            </Row>
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <a
                                    href="/"
                                >
                                    SECTION Ⅱ
                                </a>
                                <IoIosArrowDown />

                                <ul className="sub-menu sub-menu--mega sub-menu--mega--column-row">

                                    <li className="sub-menu--mega__title">
                                        <a href="/section/2/1">
                                            <Row className="align-items-center">
                                                <Col lg={1}>
                                                    <div
                                                        className="sub-menu--mega__title__img"
                                                         style={{backgroundImage : `url(${sec201})`}}
                                                    >

                                                    </div>

                                                </Col>
                                                <Col lg={11}>
                                                    DOCTORS 1
                                                    <br/>
                                                    끊임없이 연구하고 노력하다
                                                    영상의학과 김태환 교수
                                                </Col>
                                            </Row>
                                        </a>
                                    </li>

                                    <li className="sub-menu--mega__title">
                                        <a href="/section/2/2">
                                            <Row className="align-items-center">
                                                <Col lg={1}>
                                                    <div
                                                        className="sub-menu--mega__title__img"
                                                        style={{backgroundImage : `url(${sec202})`}}
                                                    >
                                                    </div>
                                                </Col>
                                                <Col lg={11}>
                                                    DOCTORS 2
                                                    <br/>
                                                    환자에게 새 삶을 선물하는 장기이식센터
                                                </Col>
                                            </Row>
                                        </a>
                                    </li>

                                    <li className="sub-menu--mega__title">
                                        <a href="/section/2/3">
                                            <Row className="align-items-center">
                                                <Col lg={1}>
                                                    <div
                                                        className="sub-menu--mega__title__img"
                                                        style={{backgroundImage : `url(${sec203})`}}
                                                    >
                                                    </div>
                                                </Col>
                                                <Col lg={11}>
                                                    TEAM
                                                    <br/>
                                                    맛과 영양, 안전까지 더한 최고의 식단을 위하여 영양팀
                                                </Col>
                                            </Row>
                                        </a>
                                    </li>

                                    <li className="sub-menu--mega__title">
                                        <a href="/section/2/4">
                                            <Row className="align-items-center">
                                                <Col lg={1}>
                                                    <div
                                                        className="sub-menu--mega__title__img"
                                                        style={{backgroundImage : `url(${sec204})`}}
                                                    >
                                                    </div>
                                                </Col>
                                                <Col lg={11}>
                                                    RESEARCH
                                                    <br/>
                                                    중이염과 연관된 의료 이용에 대한 편도 및 아데노이드 절제술의 효과
                                                </Col>

                                            </Row>
                                        </a>
                                    </li>

                                    <li className="sub-menu--mega__title">
                                        <a href="/section/2/5">
                                            <Row className="align-items-center">
                                                <Col lg={1}>
                                                    <div
                                                        className="sub-menu--mega__title__img"
                                                        style={{backgroundImage : `url(${sec205})`}}
                                                    >
                                                    </div>
                                                </Col>
                                                <Col lg={11}>
                                                    TRAINING
                                                    <br/>
                                                    새로운 연구와 소중한 경험의 시간
                                                </Col>
                                            </Row>
                                        </a>
                                    </li>

                                    <li className="sub-menu--mega__title">
                                        <a href="/section/2/6">
                                            <Row className="align-items-center">
                                                <Col lg={1}>
                                                    <div
                                                        className="sub-menu--mega__title__img"
                                                        style={{backgroundImage : `url(${sec206})`}}
                                                    >
                                                    </div>
                                                </Col>
                                                <Col lg={11}>
                                                    CLINIC
                                                    <br/>
                                                    손발 저림, 혈액순환이 아니라 신경이 문제

                                                </Col>
                                            </Row>
                                        </a>
                                    </li>

                                    <li className="sub-menu--mega__title">
                                        <a href="/section/2/7">
                                            <Row className="align-items-center">
                                                <Col lg={1}>
                                                    <div
                                                        className="sub-menu--mega__title__img"
                                                        style={{backgroundImage : `url(${sec207})`}}
                                                    >
                                                    </div>
                                                </Col>
                                                <Col lg={11}>
                                                    MOMENT
                                                    <br/>
                                                    코로나19로부터 안전한 세상 일산병원이 함께합니다
                                                </Col>
                                            </Row>
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <a
                                    href="/"
                                >
                                    SECTION Ⅲ
                                </a>
                                <IoIosArrowDown />

                                <ul className="sub-menu sub-menu--mega sub-menu--mega--column-row">

                                    <li className="sub-menu--mega__title">
                                        <a href="/section/3/1">
                                            <Row className="align-items-center">
                                                <Col lg={1}>
                                                    <div
                                                        className="sub-menu--mega__title__img"
                                                        style={{backgroundImage : `url(${sec301})`}}
                                                    >

                                                    </div>

                                                </Col>
                                                <Col lg={11}>
                                                    AROUND
                                                    <br/>
                                                    2021년 1월 1일의 해가 떠오르다. 한강에서 본 일출
                                                </Col>
                                            </Row>
                                        </a>
                                    </li>

                                    <li className="sub-menu--mega__title">
                                        <a href="/section/3/2">
                                            <Row className="align-items-center">
                                                <Col lg={1}>
                                                    <div
                                                        className="sub-menu--mega__title__img"
                                                        style={{backgroundImage : `url(${sec302})`}}
                                                    >
                                                    </div>
                                                </Col>
                                                <Col lg={11}>
                                                    FOOD
                                                    <br/>
                                                    지금이 제철! 영양 가득한 바다 맛, 굴
                                                </Col>
                                            </Row>
                                        </a>
                                    </li>

                                    <li className="sub-menu--mega__title">
                                        <a href="/section/3/3">
                                            <Row className="align-items-center">
                                                <Col lg={1}>
                                                    <div
                                                        className="sub-menu--mega__title__img"
                                                        style={{backgroundImage : `url(${sec303})`}}
                                                    >
                                                    </div>
                                                </Col>
                                                <Col lg={11}>
                                                    TREND
                                                    <br/>
                                                    당근에서 겟한 물건 나에겐 N차 신상
                                                </Col>
                                            </Row>
                                        </a>
                                    </li>

                                    <li className="sub-menu--mega__title">
                                        <a href="/section/3/4">
                                            <Row className="align-items-center">
                                                <Col lg={1}>
                                                    <div
                                                        className="sub-menu--mega__title__img"
                                                        style={{backgroundImage : `url(${sec304})`}}
                                                    >
                                                    </div>
                                                </Col>
                                                <Col lg={11}>
                                                    ISSUE
                                                    <br/>
                                                    ‘코로나19 확진자 전담 치료병동’ 운영
                                                </Col>
                                            </Row>
                                        </a>
                                    </li>

                                    <li className="sub-menu--mega__title">
                                        <a href="/section/3/5">
                                            <Row className="align-items-center">
                                                <Col lg={1}>
                                                    <div
                                                        className="sub-menu--mega__title__img"
                                                        style={{backgroundImage : `url(${sec305})`}}
                                                    >
                                                    </div>
                                                </Col>
                                                <Col lg={11}>
                                                    IH NEWS
                                                    <br/>
                                                    김성우 병원장, 공로상 수상 외
                                                </Col>
                                            </Row>
                                        </a>
                                    </li>

                                    <li className="sub-menu--mega__title">
                                        <a href="/section/3/6">
                                            <Row className="align-items-center">
                                                <Col lg={1}>
                                                    <div
                                                        className="sub-menu--mega__title__img"
                                                        style={{backgroundImage : `url(${sec306})`}}
                                                    >
                                                    </div>
                                                </Col>
                                                <Col lg={11}>
                                                    IH TODAY
                                                    <br/>
                                                    일산병원 소식
                                                </Col>
                                            </Row>
                                        </a>
                                    </li>

                                    <li className="sub-menu--mega__title">
                                        <a href="/section/3/7">
                                            <Row className="align-items-center">
                                                <Col lg={1}>
                                                    <div
                                                        className="sub-menu--mega__title__img"
                                                        style={{backgroundImage : `url(${sec307})`}}
                                                    >
                                                    </div>
                                                </Col>
                                                <Col lg={11}>
                                                    IH LETTER
                                                    <br/>
                                                    독자의견
                                                </Col>
                                            </Row>
                                        </a>
                                    </li>

                                    <li className="sub-menu--mega__title">
                                        <a href="/section/3/8">
                                            <Row className="align-items-center">
                                                <Col lg={1}>
                                                    <div
                                                        className="sub-menu--mega__title__img"
                                                        style={{backgroundImage : `url(${sec308})`}}
                                                    >
                                                    </div>
                                                </Col>
                                                <Col lg={11}>
                                                    진료일정표
                                                </Col>
                                            </Row>
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <a
                                    href="/"
                                >
                                    SERVICE
                                </a>
                                <IoIosArrowDown />

                                <ul className="sub-menu sub-menu--mega sub-menu--mega--column-row">

                                    <li className="sub-menu--mega__title">
                                        <a href="https://blog.naver.com/hello_health" target="_blank" rel="noreferrer">
                                            <Row className="align-items-center">
                                                <Col lg={1}>
                                                    <div className="text-center">
                                                        <FaBloggerB/>
                                                    </div>

                                                </Col>
                                                <Col lg={11}>
                                                    BLOG
                                                </Col>
                                            </Row>
                                        </a>
                                    </li>

                                    <li className="sub-menu--mega__title">
                                        <a href="https://www.facebook.com/nhimc.hello.health" target="_blank" rel="noreferrer">
                                            <Row className="align-items-center">
                                                <Col lg={1}>
                                                    <div className="text-center">
                                                        <FaFacebookF/>
                                                    </div>

                                                </Col>
                                                <Col lg={11}>
                                                    FACEBOOK
                                                </Col>
                                            </Row>
                                        </a>
                                    </li>

                                    <li className="sub-menu--mega__title">
                                        <a href="https://twitter.com/Hello_Health" target="_blank" rel="noreferrer">
                                            <Row className="align-items-center">
                                                <Col lg={1}>
                                                    <div className="text-center">
                                                        <FaTwitter/>
                                                    </div>

                                                </Col>
                                                <Col lg={11}>
                                                    TWITTER
                                                </Col>
                                            </Row>
                                        </a>
                                    </li>

                                    <li className="sub-menu--mega__title">
                                        <a href="https://docs.google.com/forms/d/e/1FAIpQLScsK3i7h-PjxH9vbklEFnTtWbInzWX05VovCjXDHFA0Xv7-Fw/viewform?vc=0&c=0&w=1&flr=0" target="_blank" rel="noreferrer">
                                            <Row className="align-items-center">
                                                <Col lg={1}>
                                                    <div className="text-center">
                                                        <GoMailRead/>
                                                    </div>

                                                </Col>
                                                <Col lg={11}>
                                                    독자의견 메일
                                                </Col>
                                            </Row>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </Nav>

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
