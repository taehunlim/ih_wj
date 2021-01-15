import React, {Fragment} from 'react';
import {
    Container,
    Row,
    Col,
} from 'reactstrap';
import {Link} from "react-router-dom";


import img1 from "../../assets/images/section2/1.jpg";
import img2 from "../../assets/images/section2/2.jpg";
import img3 from "../../assets/images/section2/3.jpg";
import img4 from "../../assets/images/section2/4.png";
import img5 from "../../assets/images/section2/5.jpg";
import img6 from "../../assets/images/section2/6.jpg";
import img7 from "../../assets/images/section2/7.jpg";

const Section2 = () => {

    return (
        <Fragment>
            <section className="section" id="section2">
                <Container>
                    <Row>
                        <Col lg="12">
                            <div className="text-center mb-5">
                                <h4>SECTION 2</h4>
                            </div>
                        </Col>
                    </Row>

                    <Container style={{padding: "0px 100px"}}>
                        <Row>
                            <Col sm={6} md={6} lg={6}>
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
                                                                to="/sectiontwo/1"
                                                                as="/"
                                                            >
                                                                DOCTOR 1
                                                            </Link>
                                                        </p>
                                                        <Link
                                                            to="/sectiontwo/1"
                                                            as="/"
                                                        >
                                                            끊임없이 연구하고 노력하다 영상의학과 김태환 교수
                                                        </Link>
                                                    </div>

                                                </div>
                                            </div>
                                            <Link
                                                to="/sectiontwo/1"
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
                                                                TEAM
                                                            </Link>
                                                        </p>
                                                        <Link
                                                            to="/"
                                                            as="/"
                                                        >
                                                            맛과 영양, 안전까지 더한 최고의 식단을 위하여 영양팀
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
                                            <div className="single-category__image single-category__image__horizontal single-category__image--three single-category__image--three--creativehome">
                                                <img
                                                    src={img4}
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
                                                                RESEARCH
                                                            </Link>
                                                        </p>
                                                        <Link
                                                            to="/"
                                                            as="/"
                                                        >
                                                            중이염과 연관된 의료 이용에 대한 편도 및 아데노이드 절제술의 효과
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
                            <Col sm={6} md={6} lg={6}>
                                <Row>
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
                                                                to="/"
                                                                as="/"
                                                            >
                                                                DOCTOR 2
                                                            </Link>
                                                        </p>
                                                        <Link
                                                            to="/"
                                                            as="/"
                                                        >
                                                            환자에게 새 삶을 선물하는 장기이식센터
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
                                    <Col sm={6} md={6} lg={6}>
                                        <div className="single-category single-category--three space-mb--30">
                                            <div className="single-category__image single-category__image__horizontal single-category__image--three single-category__image--three--creativehome">
                                                <img
                                                    src={img5}
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
                                                                TRAINING
                                                            </Link>
                                                        </p>
                                                        <Link
                                                            to="/"
                                                            as="/"
                                                        >
                                                            새로운 연구와 소중한 경험의 시간
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
                                    <Col sm={6} md={6} lg={6}>
                                        <div className="single-category single-category--three space-mb--30">
                                            <div className="single-category__image single-category__image__horizontal single-category__image--three single-category__image--three--creativehome">
                                                <img
                                                    src={img6}
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
                                                                CLINIC
                                                            </Link>
                                                        </p>
                                                        <Link
                                                            to="/"
                                                            as="/"
                                                        >
                                                            겨울철 특히 심해지는 손발 저림과 시림
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
                                            <div className="single-category__image single-category__image__horizontal single-category__image--three single-category__image--three--creativehome">
                                                <img
                                                    src={img7}
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
                                                                MOMENT
                                                            </Link>
                                                        </p>
                                                        <Link
                                                            to="/"
                                                            as="/"
                                                        >
                                                            코로나19로부터 안전한 세상 일산병원이 함께합니다
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

export default Section2;
