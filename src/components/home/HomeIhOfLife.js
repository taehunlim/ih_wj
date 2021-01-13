import React, {Fragment, useState} from 'react';
import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    CardText,
    CardImg,
    CardTitle,
} from 'reactstrap';
import {Link} from 'react-router-dom';
import Slider from "react-slick";

import {trimText} from '../../utils'

import image1 from'../../assets/images/IhofLife/bcontThumb2_1.jpg'
import image2 from'../../assets/images/IhofLife/bcontThumb2_2.jpg'
import image3 from'../../assets/images/IhofLife/bcontThumb2_3.jpg'
import image4 from'../../assets/images/IhofLife/bcontThumb2_4.jpg'
import image5 from'../../assets/images/IhofLife/bcontThumb2_5.jpg'
import image6 from'../../assets/images/IhofLife/bcontThumb2_6.jpg'
import image7 from'../../assets/images/IhofLife/bcontThumb2_7.jpg'
import image8 from'../../assets/images/IhofLife/bcontThumb2_8.jpg'
import image9 from'../../assets/images/IhofLife/bcontThumb2_9.jpg'
import image10 from'../../assets/images/IhofLife/bcontThumb2_10.jpg'
import image11 from'../../assets/images/IhofLife/bcontThumb2_11.jpg'
import image12 from'../../assets/images/IhofLife/bcontThumb2_12.jpg'
import image13 from'../../assets/images/IhofLife/bcontThumb2_13.jpg'
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io/index";


const HomeIhOfLife = () => {

    const settings = {
        slidesToShow: 3,
        slidesToScroll: 1,
        swipeToSlide: true,
        focusOnSelect: true,
        centerPadding: '5px',
        dots: true,
        nextArrow: (
            <div>
                <div className="next-slick-arrow"> <IoIosArrowForward/> </div>
            </div>
        ),
        prevArrow: (
            <div>
                <div className="prev-slick-arrow"> <IoIosArrowBack/> </div>
            </div>
        ),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };

    const items = [
        {
            id: "1",
            src: image1,
            head: "IH 20th",
            title: "의료서비스 혁신 기반으로 스마트병원 시대를 꿈꾸다",
            caption: ""
        },
        {
            id: "2",
            src: image2,
            head: "함꼐 걷기",
            title: "변함없는 신뢰로 맞이한 생명의 탄생",
            caption: ""
        },
        {
            id: "3",
            src: image3,
            head: "오후의 티타임",
            title: "외래팀",
            caption: ""
        },
        {
            id: "4",
            src: image4,
            head: "IH POWER",
            title: "특수사업팀 김민경 & 연구 전문의 안찬식",
            caption: ""
        },
        {
            id: "5",
            src: image5,
            head: "논문 다이제스",
            title: "트포괄수가제 도입 이후",
            caption: ""
        },
        {
            id: "6",
            src: image6,
            head: "Prologue",
            title: "희망을 이야기하는 Color",
            caption: ""
        },
        {
            id: "7",
            src: image7,
            head: "Prologue",
            title: "희망을 이야기하는 Color",
            caption: ""
        },
        {
            id: "8",
            src: image8,
            head: "Prologue",
            title: "희망을 이야기하는 Color",
            caption: ""
        },
        {
            id: "9",
            src: image9,
            head: "Prologue",
            title: "희망을 이야기하는 Color",
            caption: ""
        },
        {
            id: "10",
            src: image10,
            head: "Prologue",
            title: "희망을 이야기하는 Color",
            caption: ""
        },
        {
            id: "11",
            src: image11,
            head: "Prologue",
            title: "희망을 이야기하는 Color",
            caption: ""
        },
        {
            id: "12",
            src: image12,
            head: "Prologue",
            title: "희망을 이야기하는 Color",
            caption: ""
        },
        {
            id: "13",
            src: image13,
            head: "Prologue",
            title: "희망을 이야기하는 Color",
            caption: ""
        }
    ]

    return (
        <Fragment>
            <section className="section" id="ihoflife">
                <Container>
                    <Row>
                        <Col lg="12">
                            <div className="text-center mb-5">
                                <h4>IH of Life</h4>
                            </div>
                        </Col>
                    </Row>

                    <Col lg="12"
                         style={{padding: "80px"}}
                    >
                        <div className="sub-slick-slider">
                            <div className="events" id="timeline-carousel">
                                <Slider {...settings}>
                                    {items.map((item) => (
                                        <Col md={12}>
                                            <Card className="card-slider">
                                                <Link className="card-slider__link" to="/">
                                                    <CardBody>
                                                        <CardTitle className="mt-0">{item.head}</CardTitle>
                                                    </CardBody>
                                                    <CardImg top className="img-fluid" src={item.src} alt="/" />
                                                    <CardBody>
                                                        <CardTitle className="mt-0">{item.title}</CardTitle>
                                                        <CardText>
                                                            {trimText(item.caption, 70)}
                                                        </CardText>
                                                    </CardBody>
                                                </Link>
                                            </Card>
                                        </Col>
                                    ))}
                                </Slider>
                            </div>
                        </div>
                    </Col>
                </Container>
            </section>
        </Fragment>
    );
};

export default HomeIhOfLife;
