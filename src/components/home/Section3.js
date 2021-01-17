import React, {Fragment} from 'react';
import {
    Container,
    Row,
    Col,
} from 'reactstrap';
import {Link} from "react-router-dom";

import img1 from "../../assets/images/section3/1.jpg";
import img2 from "../../assets/images/section3/2.jpg";
import img3 from "../../assets/images/section3/3.png";
import img4 from "../../assets/images/section3/4.JPG";
import img5 from "../../assets/images/section3/5.JPG";
import img6 from "../../assets/images/section3/6.jpg";
import img7 from "../../assets/images/section3/7.jpg";
import img8 from "../../assets/images/section3/8.jpg";

const Section3 = () => {

    return (
        <Fragment>
            <section className="section" id="section3">
                <Container>
                    <Row>
                        <Col lg="12">
                            <div className="text-center mb-5">
                                <h4>SECTION Ⅲ</h4>
                            </div>
                        </Col>
                    </Row>

                    <Container>
                        <Row>
                            <Col xs={6} sm={6} md={6} lg={6} className="section-col">
                                <Row>
                                    <Col lg={12}>
                                        <div className="single-category single-category--three space-mb--30">
                                            <div className="single-category__image single-category__image__horizontal single-category__image--three single-category__image--three--creativehome">
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
                                                                to="/"
                                                                as="/"
                                                            >
                                                                AROUND
                                                            </Link>
                                                        </p>
                                                        <Link
                                                            to="/"
                                                            as="/"
                                                        >
                                                            2021년 1월 1일의 해가 떠오르다 한강에서 본 일출
                                                        </Link>
                                                    </div>

                                                </div>
                                            </div>
                                            <Link
                                                to="/"
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
                                                                to="/"
                                                                as="/"
                                                            >
                                                                FOOD
                                                            </Link>
                                                        </p>
                                                        <Link
                                                            to="/"
                                                            as="/"
                                                        >
                                                            지금이 제철! 영양 가득한 바다 맛, 굴
                                                        </Link>
                                                    </div>

                                                </div>
                                            </div>
                                            <Link
                                                to="/"
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
                                                                to="/"
                                                                as="/"
                                                            >
                                                                ISSUE
                                                            </Link>
                                                        </p>
                                                        <Link
                                                            to="/"
                                                            as="/"
                                                        >
                                                            '코로나19 확진자 전담 치료병동' 운영
                                                        </Link>
                                                    </div>

                                                </div>
                                            </div>
                                            <Link
                                                to="/"
                                                as="/"
                                                className="banner-link"
                                            >
                                            </Link>
                                        </div>
                                    </Col>
                                    <Col xs={6} sm={6} md={6} lg={6}>
                                        <div className="single-category single-category--three space-mb--15">
                                            <div className="single-category__image single-category__image__square single-category__image--three single-category__image--three--creativehome">
                                                <img
                                                    src={img5}
                                                    className="img-fluid"
                                                    alt="/"
                                                />
                                            </div>
                                            <div className="single-category__content single-category__content--three single-category__content--three--creativehome">
                                                <div className="title">
                                                    <div style={{backgroundColor: "rgba(0, 0, 0, 0.3)", paddingLeft: "15px"}}>
                                                        <p>
                                                            <Link
                                                                to="/"
                                                                as="/"
                                                            >
                                                                IH NEWS
                                                            </Link>
                                                        </p>
                                                        <Link
                                                            to="/"
                                                            as="/"
                                                        >
                                                            김성우 병원장, 공로상 수상 외
                                                        </Link>
                                                    </div>

                                                </div>
                                            </div>
                                            <Link
                                                to="/"
                                                as="/"
                                                className="banner-link"
                                            >
                                            </Link>
                                        </div>
                                    </Col>
                                    <Col xs={6} sm={6} md={6} lg={6}>
                                        <div className="single-category single-category--three space-mb--15">
                                            <div className="single-category__image single-category__image__square single-category__image--three single-category__image--three--creativehome">
                                                <img
                                                    src={img6}
                                                    className="img-fluid"
                                                    alt="/"
                                                />
                                            </div>
                                            <div className="single-category__content single-category__content--three single-category__content--three--creativehome">
                                                <div className="title">
                                                    <div style={{backgroundColor: "rgba(0, 0, 0, 0.3)", paddingLeft: "15px"}}>
                                                        <p>
                                                            <Link
                                                                to="/"
                                                                as="/"
                                                            >
                                                                IH TODAY 일산병원 소식
                                                            </Link>
                                                        </p>
                                                        <Link
                                                            to="/"
                                                            as="/"
                                                        >
                                                            인간이‘본다’는 것은 일차원적이며 최고의 사고행위
                                                        </Link>
                                                    </div>

                                                </div>
                                            </div>
                                            <Link
                                                to="/"
                                                as="/"
                                                className="banner-link"
                                            >
                                            </Link>
                                        </div>
                                    </Col>
                                    <Col xs={12} sm={12} md={12} lg={12}>
                                        <div className="single-category single-category--three space-mb--30">
                                            <div className="single-category__image single-category__image__horizontal single-category__image--three single-category__image--three--creativehome">
                                                <img
                                                    src={img7}
                                                    className="img-fluid"
                                                    alt="/"
                                                />
                                            </div>
                                            <div className="single-category__content single-category__content--three single-category__content--three--creativehome">
                                                <div className="title">
                                                    <div style={{backgroundColor: "rgba(0, 0, 0, 0.3)", paddingLeft: "15px"}}>
                                                        <p>
                                                            <Link
                                                                to="/"
                                                                as="/"
                                                            >
                                                                IH LETTER
                                                            </Link>
                                                        </p>
                                                        <Link
                                                            to="/"
                                                            as="/"
                                                        >
                                                            독자 의견
                                                        </Link>
                                                    </div>

                                                </div>
                                            </div>
                                            <Link
                                                to="/"
                                                as="/"
                                                className="banner-link"
                                            >
                                            </Link>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>

                            <Col lg={12} className="section-col">
                                <Row>
                                    <Col xs={6} sm={6} md={6} lg={6} >
                                        <div className="single-category single-category--three space-mb--30">
                                            <div className="single-category__image single-category__image__horizontal single-category__image--three single-category__image--three--creativehome">
                                                <img
                                                    src={img3}
                                                    className="img-fluid"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="single-category__content single-category__content--three single-category__content--three--creativehome">
                                                <div className="title">
                                                    <div style={{backgroundColor: "rgba(0, 0, 0, 0.3)", paddingLeft: "15px"}}>
                                                        <p>
                                                            <Link
                                                                to="/"
                                                                as="/"
                                                            >
                                                                TREND
                                                            </Link>
                                                        </p>
                                                        <Link
                                                            to="/"
                                                            as="/"
                                                        >
                                                            당근에서 겟한 물건 나에겐 N차 신상
                                                        </Link>
                                                    </div>

                                                </div>
                                            </div>
                                            <Link
                                                to="/"
                                                as="/"
                                                className="banner-link"
                                            >
                                            </Link>
                                        </div>
                                    </Col>
                                    <Col xs={6} sm={6} md={6} lg={6} >
                                        <div className="single-category single-category--three space-mb--30">
                                            <div className="single-category__image single-category__image__horizontal single-category__image--three single-category__image--three--creativehome">
                                                <img
                                                    src={img8}
                                                    className="img-fluid"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="single-category__content single-category__content--three single-category__content--three--creativehome">
                                                <div className="title">
                                                    <div style={{backgroundColor: "rgba(0, 0, 0, 0.3)", paddingLeft: "15px"}}>
                                                        <p>
                                                            <Link
                                                                to="/"
                                                                as="/"
                                                            >
                                                                진료일정표
                                                            </Link>
                                                        </p>
                                                        <Link
                                                            to="/"
                                                            as="/"
                                                        >

                                                        </Link>
                                                    </div>

                                                </div>
                                            </div>
                                            <Link
                                                to="/"
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

export default Section3;
