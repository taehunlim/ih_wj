import React, {Fragment} from 'react';
import {
    Row,
    Col,
    Card,
    CardBody,
    CardImg,
    CardTitle,
} from 'reactstrap';
import {Link} from 'react-router-dom';
import SwiperCore, {Controller, Scrollbar, Navigation, Pagination } from 'swiper'
import {SwiperSlide, Swiper} from 'swiper/react'



SwiperCore.use([Navigation, Pagination, Controller, Scrollbar])


const BoxSlide = ({item}) => {

    return (
        // Slide
        <Fragment>
            <section className="section" id="coloroflife">
                    <Col lg="12">
                        <div className="hori-timeline">
                            <div className="owl-carousel owl-theme  navs-carousel events" id="timeline-carousel">
                                <Swiper
                                    slidesPerView={3}
                                    spaceBetween={0}
                                    navigation
                                    breakpoints={{
                                        1024: {
                                            slidesPerView: 3
                                        },
                                        768: {
                                            slidesPerView: 2
                                        },
                                        640: {
                                            slidesPerView: 2
                                        },
                                        320: {
                                            slidesPerView: 1
                                        }
                                    }}
                                >
                                    {item && item.map((item) => {
                                        return (
                                            <SwiperSlide>
                                                <Row className="slide-box">
                                                    <Col md={12}>
                                                        <Card className="card-hover">

                                                            <Link to={`/section/${item.section}/${item.id}`}>
                                                                <CardBody>
                                                                    <CardTitle className="mt-0">{item.head}</CardTitle>
                                                                </CardBody>

                                                                <CardImg src={item.src} className="img-fluid box-image"/>

                                                                <CardBody className="slide-box__title">
                                                                    <CardTitle className="mt-0 card-title">{item.title}</CardTitle>
                                                                </CardBody>
                                                            </Link>
                                                        </Card>
                                                    </Col>
                                                </Row>
                                            </SwiperSlide>
                                        )
                                    })}
                                </Swiper>
                            </div>
                        </div>
                    </Col>
            </section>
        </Fragment>
    );
};

export default BoxSlide;
