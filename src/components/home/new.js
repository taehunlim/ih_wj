import React from 'react'
import {Link} from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import img1 from "../../assets/images/1.png";
import img2 from "../../assets/images/3.png";
import img3 from "../../assets/images/4.jpg";
import img4 from "../../assets/images/2.png";

const New = () => {
    return (


        <Container style={{padding: "0px 100px"}}>
            <Row>
                <Col lg={6}>
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
                                        <p>
                                            <Link
                                                to="/"
                                                as="/"
                                            >
                                                intro
                                            </Link>
                                        </p>
                                        <Link
                                            to="/"
                                            as="/"
                                        >
                                            따뜻한 마음을 담아 2021년을 바라봅니다
                                        </Link>
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
                                        src={img2}
                                        className="img-fluid"
                                        alt=""
                                    />
                                </div>
                                <div className="single-category__content single-category__content--three single-category__content--three--creativehome">
                                    <div className="title">
                                        <p>
                                            <Link
                                                to="/"
                                                as="/"
                                            >
                                                신년사
                                            </Link>
                                        </p>
                                        <Link
                                            to="/"
                                            as="/"
                                        >
                                            2021년 희망찬 새해가 밝았습니다
                                        </Link>
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
                <Col lg={6}>
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
                                        <p>
                                            <Link
                                                to="/"
                                                as="/"
                                            >
                                                interview
                                            </Link>
                                        </p>
                                        <Link
                                            to="/"
                                            as="/"
                                        >
                                            병원에서‘보다’의 의미를 찾다
                                        </Link>
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
                                        src={img4}
                                        className="img-fluid"
                                        alt="/"
                                    />
                                </div>
                                <div className="single-category__content single-category__content--three single-category__content--three--creativehome">
                                    <div className="title">
                                        <p>
                                            <Link
                                                to="/"
                                                as="/"
                                            >
                                                essay
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

        // <Container className="wide">
        //     <Row>
        //         <Col lg={6}>
        //             <Row>
        //                 <Col lg={12}>
        //                     <div className="single-category single-category--three space-mb--30">
        //                         <div className="single-category__image single-category__image--three single-category__image--three--creativehome">
        //                             <img
        //                                 src={img1}
        //                                 className="img-fluid"
        //                                 alt=""
        //                             />
        //                         </div>
        //                         <div className="single-category__content single-category__content--three single-category__content--three--creativehome">
        //                             <div className="title">
        //                                 <p>
        //                                     <Link
        //                                         to="/"
        //                                         as="/"
        //                                     >
        //                                         <a>New Arrivals</a>
        //                                     </Link>
        //                                 </p>
        //                                 <Link
        //                                     to="/"
        //                                     as="/"
        //                                 >
        //                                     <a>+ Shop Now</a>
        //                                 </Link>
        //                             </div>
        //                         </div>
        //                         <Link
        //                             to="/"
        //                             as="/"
        //                             className="banner-link"
        //                         >
        //                         </Link>
        //                     </div>
        //                 </Col>
        //                 <Col lg={12}>
        //                     <div className="single-category single-category--three space-mb--30">
        //                         <div className="single-category__image single-category__image--three single-category__image--three--creativehome">
        //                             <img
        //                                 src={img1}
        //                                 className="img-fluid"
        //                                 alt=""
        //                             />
        //                         </div>
        //                         <div className="single-category__content single-category__content--three single-category__content--three--creativehome">
        //                             <div className="title">
        //                                 <p>
        //                                     <Link
        //                                         to="/"
        //                                         as="/"
        //                                     >
        //                                         New Arrivals
        //                                     </Link>
        //                                 </p>
        //                                 <Link
        //                                     to="/"
        //                                     as="/"
        //                                 >
        //                                     + Shop Now
        //                                 </Link>
        //                             </div>
        //                         </div>
        //                         <Link
        //                             to="/"
        //                             as="/"
        //                             className="banner-link"
        //                         >
        //                         </Link>
        //                     </div>
        //                 </Col>
        //             </Row>
        //         </Col>
        //         <Col lg={6}>
        //             <Row>
        //                 <Col lg={12}>
        //                     <div className="single-category single-category--three space-mb--30">
        //                         <div className="single-category__image single-category__image--three single-category__image--three--creativehome">
        //                             <img
        //                                 src={img2}
        //                                 className="img-fluid"
        //                                 alt="/"
        //                             />
        //                         </div>
        //                         <div className="single-category__content single-category__content--three single-category__content--three--creativehome">
        //                             <div className="title">
        //                                 <p>
        //                                     <Link
        //                                         to="/"
        //                                         as="/"
        //                                     >
        //                                         New Arrivals
        //                                     </Link>
        //                                 </p>
        //                                 <Link
        //                                     to="/"
        //                                     as="/"
        //                                 >
        //                                     + Shop Now
        //                                 </Link>
        //                             </div>
        //                         </div>
        //                         <Link
        //                             to="/"
        //                             as="/"
        //                             className="banner-link"
        //                         >
        //                         </Link>
        //                     </div>
        //                 </Col>
        //                 <Col lg={6}>
        //                     <div className="single-category single-category--three space-mb--30">
        //                         <div className="single-category__image single-category__image--three single-category__image--three--creativehome">
        //                             <img
        //                                 src={img3}
        //                                 className="img-fluid"
        //                                 alt=""
        //                             />
        //                         </div>
        //                         <div className="single-category__content single-category__content--three single-category__content--three--creativehome">
        //                             <div className="title">
        //                                 <p>
        //                                     <Link
        //                                         to="/"
        //                                         as="/"
        //                                     >
        //                                         New Arrivals
        //                                     </Link>
        //                                 </p>
        //                                 <Link
        //                                     to="/"
        //                                     as="/"
        //                                 >
        //                                     + Shop Now
        //                                 </Link>
        //                             </div>
        //                         </div>
        //                         <Link
        //                             to="/"
        //                             as="/"
        //                             className="banner-link"
        //                         >
        //                         </Link>
        //                     </div>
        //                 </Col>
        //                 <Col lg={6}>
        //                     <div className="single-category single-category--three space-mb--30">
        //                         <div className="single-category__image single-category__image--three single-category__image--three--creativehome">
        //                             <img
        //                                 src={img3}
        //                                 className="img-fluid"
        //                                 alt=""
        //                             />
        //                         </div>
        //                         <div className="single-category__content single-category__content--three single-category__content--three--creativehome">
        //                             <div className="title">
        //                                 <p>
        //                                     <Link
        //                                         to="/"
        //                                         as="/"
        //                                     >
        //                                         New Arrivals
        //                                     </Link>
        //                                 </p>
        //                                 <Link
        //                                     to="/"
        //                                     as="/"
        //                                 >
        //                                     + Shop Now
        //                                 </Link>
        //                             </div>
        //                         </div>
        //                         <Link
        //                             to="/"
        //                             as="/"
        //                             className="banner-link"
        //                         >
        //                         </Link>
        //                     </div>
        //                 </Col>
        //             </Row>
        //         </Col>
        //         <Col lg={12}>
        //             <Row>
        //                 <Col lg={3}>
        //                     <div className="single-category single-category--three space-mb--30">
        //                         <div className="single-category__image single-category__image--three single-category__image--three--creativehome">
        //                             <img
        //                                 src={img3}
        //                                 className="img-fluid"
        //                                 alt=""
        //                             />
        //                         </div>
        //                         <div className="single-category__content single-category__content--three single-category__content--three--creativehome">
        //                             <div className="title">
        //                                 <p>
        //                                     <Link
        //                                         to="/"
        //                                         as="/"
        //                                     >
        //                                         New Arrivals
        //                                     </Link>
        //                                 </p>
        //                                 <Link
        //                                     to="/"
        //                                     as="/"
        //                                 >
        //                                     + Shop Now
        //                                 </Link>
        //                             </div>
        //                         </div>
        //                         <Link
        //                             to="/"
        //                             as="/"
        //                             className="banner-link"
        //                         >
        //                         </Link>
        //                     </div>
        //                 </Col>
        //                 <Col lg={6}>
        //                     <div className="single-category single-category--three space-mb--30">
        //                         <div className="single-category__image single-category__image--three single-category__image--three--creativehome">
        //                             <img
        //                                 src={img3}
        //                                 className="img-fluid"
        //                                 alt=""
        //                             />
        //                         </div>
        //                         <div className="single-category__content single-category__content--three single-category__content--three--creativehome">
        //                             <div className="title">
        //                                 <p>
        //                                     <Link
        //                                         to="/"
        //                                         as="/"
        //                                     >
        //                                         New Arrivals
        //                                     </Link>
        //                                 </p>
        //                                 <Link
        //                                     to="/"
        //                                     as="/"
        //                                 >
        //                                     + Shop Now
        //                                 </Link>
        //                             </div>
        //                         </div>
        //                         <Link
        //                             to="/"
        //                             as="/"
        //                             className="banner-link"
        //                         >
        //                         </Link>
        //                     </div>
        //                 </Col>
        //                 <Col lg={3}>
        //                     <div className="single-category single-category--three space-mb--30">
        //                         <div className="single-category__image single-category__image--three single-category__image--three--creativehome">
        //                             <img
        //                                 src={img3}
        //                                 className="img-fluid"
        //                                 alt=""
        //                             />
        //                         </div>
        //                         <div className="single-category__content single-category__content--three single-category__content--three--creativehome">
        //                             <div className="title">
        //                                 <p>
        //                                     <Link
        //                                         to="/"
        //                                         as="/"
        //                                     >
        //                                         New Arrivals
        //                                     </Link>
        //                                 </p>
        //                                 <Link
        //                                     to="/"
        //                                     as="/"
        //                                 >
        //                                     + Shop Now
        //                                 </Link>
        //                             </div>
        //                         </div>
        //                         <Link
        //                             to="/"
        //                             as="/"
        //                             className="banner-link"
        //                         >
        //                         </Link>
        //                     </div>
        //                 </Col>
        //             </Row>
        //         </Col>
        //     </Row>
        // </Container>
    );
};

export default New;
