import React, {Fragment} from 'react';
import {
    Container,
    Row,
    Col,
} from 'reactstrap';
import {Link} from "react-router-dom";


import img1 from "../../assets/images/section1/1.png";
import img2 from "../../assets/images/section1/3.1.png";
import img3 from "../../assets/images/section1/4.jpg";
import img4 from "../../assets/images/section1/2.png";

const Section1 = () => {

    return (
        <Fragment>
            <section className="section" id="section1">
                <Container>
                    <Row>
                        <Col lg="12">
                            <div className="text-center mb-5">
                                <h4 className="section-title">SECTION Ⅰ</h4>
                            </div>
                        </Col>
                    </Row>

                    <Container className="ih">
                        <Row>
                            <Col xs={6} sm={6} md={6} lg={6} className="section-col">
                                <Row>
                                    <Col lg={12}>
                                        <div className="single-category single-category--three space-mb--30">
                                            <div className="single-category__image single-category__image__vertical single-category__image--three single-category__image--three--creativehome">
                                                <img
                                                    src={img1}
                                                    className="img-fluid"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="single-category__content single-category__content--three single-category__content--three--creativehome">
                                                <div className="title">
                                                    <div style={{backgroundColor: "rgba(0, 0, 0, 0.3)", paddingLeft: "15px"}}>
                                                        <p>
                                                            <Link
                                                                to="/section/1/1"
                                                                as="/"
                                                            >
                                                                INTRO
                                                            </Link>
                                                        </p>
                                                        <Link
                                                            className="mobile"
                                                            to="/section/1/1"
                                                            as="/"
                                                        >
                                                            따뜻한 마음을 담아 2021년을 바라봅니다
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <Link
                                                to="/section/1/1"
                                                as="/"
                                                className="banner-link"
                                            >
                                            </Link>
                                        </div>
                                    </Col>
                                    <Col lg={12}>
                                        <div className="single-category single-category--three space-mb--30">
                                            <div className="single-category__image single-category__image__horizontal single-category__image--three single-category__image--three--creativehome">
                                                <img
                                                    src={img2}
                                                    className="img-fluid"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="single-category__content single-category__content--three single-category__content--three--creativehome">
                                                <div className="title">
                                                    <div style={{backgroundColor: "rgba(0, 0, 0, 0.3)", paddingLeft: "15px"}}>
                                                        <p>
                                                            <Link
                                                                to="/section/1/3"
                                                                as="/"
                                                            >
                                                                ESSAY
                                                            </Link>
                                                        </p>
                                                        <Link
                                                            className="mobile"
                                                            to="/section/1/3"
                                                            as="/"
                                                        >
                                                            인간이 ‘본다’는 것은 일차원적이며 최고의 사고행위
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <Link
                                                to="/section/1/3"
                                                as="/"
                                                className="banner-link"
                                            >
                                            </Link>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs={6} sm={6} md={6} lg={6} className="section-col">
                                <Row>
                                    <Col lg={12}>
                                        <div className="single-category single-category--three space-mb--30">
                                            <div className="single-category__image single-category__image__horizontal single-category__image--three single-category__image--three--creativehome">
                                                <img
                                                    src={img3}
                                                    className="img-fluid"
                                                    alt="/"
                                                />
                                            </div>
                                            <div className="single-category__content single-category__content--three single-category__content--three--creativehome">
                                                <div className="title">
                                                    <div style={{backgroundColor: "rgba(0, 0, 0, 0.3)", paddingLeft: "15px"}}>
                                                        <p>
                                                            <Link
                                                                to="/section/1/4"
                                                                as="/"
                                                            >
                                                                INTERVIEW
                                                            </Link>
                                                        </p>
                                                        <Link
                                                            className="mobile"
                                                            to="/section/1/4"
                                                            as="/"
                                                        >
                                                            병원에서 ‘보다’의 의미를 찾다
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <Link
                                                to="/section/1/4"
                                                as="/"
                                                className="banner-link"
                                            >
                                            </Link>
                                        </div>
                                    </Col>
                                    <Col lg={12}>
                                        <div className="single-category single-category--three space-mb--30">
                                            <div className="single-category__image single-category__image__vertical single-category__image--three single-category__image--three--creativehome">
                                                <img
                                                    src={img4}
                                                    className="img-fluid"
                                                    alt="/"
                                                />
                                            </div>
                                            <div className="single-category__content single-category__content--three single-category__content--three--creativehome">
                                                <div className="title">
                                                    <div style={{backgroundColor: "rgba(0, 0, 0, 0.3)", paddingLeft: "15px"}}>
                                                        <p>
                                                            <Link
                                                                to="/section/1/2"
                                                                as="/"
                                                            >
                                                                신년사
                                                            </Link>
                                                        </p>
                                                        <Link
                                                            className="mobile"
                                                            to="/section/1/2"
                                                            as="/"
                                                        >
                                                            2021년 희망찬 새해가 밝았습니다
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <Link
                                                to="/section/1/2"
                                                as="/"
                                                className="banner-link"
                                            >
                                            </Link>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </section>
        </Fragment>
    );
};

export default Section1;
