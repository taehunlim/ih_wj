import React, {Fragment, useState} from 'react';
import {
    Container,
    Row,
    Col,
} from 'reactstrap';
// import {Link} from "react-router-dom";

import { FaFacebookF, FaBloggerB, FaTwitter } from "react-icons/fa";
import {GoMailRead} from 'react-icons/go'
import {FaFilePdf} from "react-icons/fa/index";
import {Modal} from "react-bootstrap";
import {LightgalleryItem, LightgalleryProvider} from "react-lightgallery";
import pdf from "../../assets/pdf/ih.pdf";

const Service = () => {

    const [modal, setModal] = useState(false)

    return (
        <Fragment>
            <section className="section" id="service" style={{marginBottom: "50px"}}>
                <Container>
                    <Row>
                        <Col lg="12">
                            <div className="text-center mb-3">
                                <h4>Service</h4>
                            </div>
                        </Col>
                    </Row>

                    <Row className="home-sns">

                        <Col className="">
                            <div className="blog-box mb-4 mb-xl-0">
                                <div className="position-relative">
                                    <a href="https://blog.naver.com/hello_health" target="_blank" rel="noreferrer">
                                        <FaBloggerB/>
                                        <div className="home-sns__link">
                                            Blog
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </Col>
                        <Col className="">
                            <div className="blog-box mb-4 mb-xl-0">
                                <div className="position-relative">
                                    <a href="https://www.facebook.com/nhimc.hello.health" target="_blank" rel="noreferrer">
                                        <FaFacebookF/>
                                        <div className="home-sns__link">
                                            FaceBook
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </Col>
                        <Col className="">
                            <div className="blog-box mb-4 mb-xl-0">
                                <div className="position-relative">
                                    <a href="https://twitter.com/Hello_Health" target="_blank" rel="noreferrer">
                                        <FaTwitter/>
                                        <div className="home-sns__link">
                                            Twitter
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </Col>
                        <Col className="">
                            <div className="blog-box mb-4 mb-xl-0">
                                <div className="position-relative">
                                    <a href="https://docs.google.com/forms/d/e/1FAIpQLScsK3i7h-PjxH9vbklEFnTtWbInzWX05VovCjXDHFA0Xv7-Fw/viewform?vc=0&c=0&w=1&flr=0" target="_blank" rel="noreferrer">
                                        <GoMailRead/>
                                        <div className="home-sns__link">
                                            독자의견 메일
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </Col>
                        <Col
                            // className="home-sns__col"
                            // style={{borderRight: "solid"}}
                        >
                            <div className="blog-box mb-4 mb-xl-0">
                                <div className="position-relative">
                                    <button
                                        style={{border: "none", background: "none"}}
                                        className=""
                                        onClick={() => setModal(true)}>
                                        <FaFilePdf/>
                                        <div className="home-sns__link">
                                            PDF 보기
                                        </div>
                                    </button>

                                    <Modal
                                        show={modal}
                                    >
                                        <Modal.Header
                                            closeButton
                                            style={{width: "800px", backgroundColor: "powderblue"}}
                                            onHide={() => setModal(false)}
                                        >

                                        </Modal.Header>
                                        <LightgalleryProvider>
                                            <LightgalleryItem group="any">
                                                <embed src={pdf} width="800px" height="800px" />
                                            </LightgalleryItem>
                                        </LightgalleryProvider>
                                    </Modal>

                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Fragment>
    );
};

export default Service;
