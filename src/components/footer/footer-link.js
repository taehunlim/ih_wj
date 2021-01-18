import React, {Fragment} from 'react';
import { Row, Col } from "reactstrap";
import logo from "../../assets/images/logo.jpg";
import { FaFacebookF, FaBloggerB, FaTwitter } from "react-icons/fa";
import {GoMailRead} from "react-icons/go/index";


const FooterLink = () => {
    return (
        <Fragment>
            <Row>
                <Col lg="6"  style={{color: "white"}}>
                    <div className="mb-4">
                        <img src={logo} alt="" height="40"/>
                    </div>
                    <p>경기도 고양시일산동구 일산로 100(백석 1동 1232번지), 우편번호 10444</p>
                    <p>대표전화 : 031-900-0114, 팩스 : 031-900-0049</p>
                    <p className="mb-2">Copyright © National Health Insurance. </p>
                    <p>Service Ilsan Hospital All Right Reserved</p>
                </Col>
                <Col lg="6">
                    <div className="mb-4 mb-lg-0 d-flex justify-content-end font-size-24 footer-icon">
                        <a href="https://blog.naver.com/hello_health" target="_blank" rel="noreferrer">
                            <FaBloggerB/>
                        </a>
                        <a href="https://www.facebook.com/nhimc.hello.health" target="_blank" rel="noreferrer">
                            <FaFacebookF/>
                        </a>
                        <a href="https://twitter.com/Hello_Health" target="_blank" rel="noreferrer">
                            <FaTwitter/>
                        </a>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLScsK3i7h-PjxH9vbklEFnTtWbInzWX05VovCjXDHFA0Xv7-Fw/viewform?vc=0&c=0&w=1&flr=0" target="_blank" rel="noreferrer">
                            <GoMailRead/>
                        </a>
                    </div>
                </Col>

            </Row>
        </Fragment>
    );
};

export default FooterLink;
