import React, {Fragment} from 'react';
import {
    Container,
    Row,
    Col,
} from 'reactstrap';
// import {Link} from "react-router-dom";

import { FaFacebookF, FaBloggerB, FaTwitter, FaMailBulk } from "react-icons/fa";

const Service = () => {

    return (
        <Fragment>
            <section className="section" id="service" style={{marginBottom: "100px"}}>
                <Container>
                    <Row>
                        <Col lg="12">
                            <div className="text-center mb-5">
                                <h4>Service</h4>
                            </div>
                        </Col>
                    </Row>

                    <Row style={{textAlignLast: "center", fontSize: "100px"}}>

                        <Col>
                            <div className="blog-box mb-4 mb-xl-0">
                                <div className="position-relative">
                                    <a href="https://blog.naver.com/hello_health" target="_blank" rel="noreferrer">
                                        <FaBloggerB/>
                                    </a>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="blog-box mb-4 mb-xl-0">
                                <div className="position-relative">
                                    <a href="https://www.facebook.com/nhimc.hello.health" target="_blank" rel="noreferrer">
                                        <FaFacebookF/>
                                    </a>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="blog-box mb-4 mb-xl-0">
                                <div className="position-relative">
                                    <a href="https://twitter.com/Hello_Health" target="_blank" rel="noreferrer">
                                        <FaTwitter/>
                                    </a>
                                </div>
                            </div>
                        </Col>
                        {/*<Col>*/}
                        {/*    <div className="blog-box mb-4 mb-xl-0">*/}
                        {/*        <div className="position-relative">*/}
                        {/*            <a>*/}
                        {/*                <FaFilePdf/>*/}
                        {/*            </a>*/}

                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</Col>*/}
                        <Col>
                            <div className="blog-box mb-4 mb-xl-0">
                                <div className="position-relative">
                                    <a href="https://docs.google.com/forms/d/e/1FAIpQLScsK3i7h-PjxH9vbklEFnTtWbInzWX05VovCjXDHFA0Xv7-Fw/viewform?vc=0&c=0&w=1&flr=0" target="_blank" rel="noreferrer">
                                        <FaMailBulk/>
                                    </a>
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
