import React, {Fragment} from 'react';
import {Card, CardBody, CardTitle} from 'reactstrap'

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Cover from "../components/home/Cover";

import Section1 from "../components/home/Section1";
import Section2 from "../components/home/Section2";
import Section3 from "../components/home/Section3";
import Service from "../components/home/Service";

import logo from '../assets/images/logo.jpg'


const Home = () => {
    return (
        <Fragment>
            <div
                // style={{backgroundColor: "#ededed"}}
            >

                <Header/>

                <Cover/>

                <Section1/>

                <Section2/>

                <Section3/>

                <Service/>

                <div style={{textAlign: "-webkit-center"}}>
                    <Card style={{width: "25%", alignItems: "center"}}>
                        <img src={logo} className="img-fluid" alt="/"/>
                    </Card>
                    <CardBody className="pt-0">
                        <CardTitle>
                            <div>
                                <a
                                    href="https://www.nhimc.or.kr/index.do"
                                    target="_blank"
                                    rel="noreferrer"
                                    style={{fontSize: "30px", fontWeight: "bold"}}
                                >
                                    <button
                                        className="ih-button"
                                        style={{borderRadius: "15px"}}
                                    >
                                        바로가기
                                    </button>

                                </a>
                            </div>

                        </CardTitle>
                    </CardBody>

                </div>

                <Footer/>

            </div>
        </Fragment>
    );
};

export default Home;
