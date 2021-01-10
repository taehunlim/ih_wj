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
    CardSubtitle
} from 'reactstrap';
import {Link} from "react-router-dom";
import Slider from 'react-slick'
import {trimText} from '../../utils';

import image1 from '../../assets/images/news/bcontThumb3_1.jpg'
import image2 from '../../assets/images/news/bcontThumb3_2.jpg'
import image3 from '../../assets/images/news/bcontThumb3_3.jpg'
import image4 from '../../assets/images/news/bcontThumb3_4.jpg'

const HomeIhNews = () => {

    const setting = {
        slidesToShow: 3,
        slidesToScroll: 1,
        swipeToSlide: true,
        focusOnSelect: true,
        centerPadding: '5px',
        dots: true
    };

    const items = [
        {
            id: "1",
            src: image1,
            title: "IH NEWS",
            caption: "개원 20주년 온라인 기념식 개최 외"
        },
        {

            id: "2",
            src: image2,
            title: "IH TODAY",
            caption: "방송 / 신문 / 포상 / 결혼 / 출산"
        },
        {

            id: "3",
            src: image3,
            title: "LETTER",
            caption: "2020 AUTUMN 독자 퀴즈, 독자 의견, 사랑의 사회사업 후원 안내"
        },
        {

            id: "4",
            src: image4,
            title: "진료시간표",
            caption: "※ 진료일정은 병원사정에 의해 변경될 수 있습니다."
        },
    ]

    return (
        <Fragment>
            <section className="section" id="ihnews">
                <Container>
                    <Row>
                        <Col lg="12">
                            <div className="text-center mb-5">
                                <h4>COLOR of Life </h4>
                            </div>
                        </Col>
                    </Row>

                    <Col lg="12">
                        <div className="">
                            <div className="events" id="timeline-carousel">
                                <Slider {...setting}>
                                    {items.map((item) => (
                                        <Col md={12}>
                                            <Card className="card-slider">
                                                <Link className="card-slider__link" to="/">
                                                    <CardBody>
                                                        <CardTitle className="mt-0">{}</CardTitle>
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

export default HomeIhNews;
