import React, {Fragment, useState, useEffect} from 'react';

import { Container, Row, Col } from 'reactstrap';
import {Link} from "react-router-dom";

import img1 from "../../assets/images/Cover/mainSlide1.jpg";
import img2 from "../../assets/images/Cover/mainSlide2.jpg";
import img3 from "../../assets/images/Cover/mainSlide3.jpg";
import img4 from "../../assets/images/Cover/mainSlide4.jpg";


import Slider from 'react-slick';

const Cover = () => {

    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const items = [
        {
            id: "1",
            src: img1,
            caption: '희망을 이야기하는 YELLOW',
        },
        {
            id: "2",
            src: img2,
            caption: '변함없는 신뢰로 맞이한 생명의탄생'
        },
        {
            id: "3",
            src: img3,
            caption: '외래팀'
        },
        {
            id: "4",
            src: img4,
            caption: '외래팀'
        },
    ];

    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const [slider1, setSlider1] = useState(null);
    const [slider2, setSlider2] = useState(null);

    useEffect(() => {

        setNav1(slider1);
        setNav2(slider2);

    });

    const settingsMain = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    };

    const settingsThumbs = {
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        centerMode: true,
        swipeToSlide: true,
        focusOnSelect: true,
        centerPadding: '10px'
    };



    return (
        <Fragment>
            <section id="cover">
                <div className="main-slick-slider">
                    <Slider
                        {...settingsMain}
                        asNavFor={nav2}
                        ref={slider => (setSlider1(slider))}
                    >

                        {items.map((item) =>

                            <div className="slick-slider">
                                <div className="slider-img">
                                    <img src={item.src} className="img-fluid"/>
                                </div>

                                <div className="slider-content">
                                    <Container>
                                        <Row className="align-items-center">
                                            <Col lg={5}>
                                                <div className="text-white-50">
                                                    <h1 className="mb-3 carousel-title">{item.caption} </h1>
                                                    <div className="button-items mt-4">
                                                        <Link to="#" className="btn btn-success mr-1">자세히 보기</Link>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Container>
                                </div>

                            </div>
                        )}
                    </Slider>

                    <div className="thumbnail-slick-slider">
                        <Slider
                            {...settingsThumbs}
                            asNavFor={nav1}
                            ref={slider => (setSlider2(slider))}
                            style={{width:"70%"}}
                        >

                            {items.map((slide) =>

                                <div className="slick-thumb-slide" key={slide.id}>
                                    <img className="slick-slide-image img-fluid" src={slide.src} />
                                </div>

                            )}
                        </Slider>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default Cover;
