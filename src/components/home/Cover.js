import React, {Fragment, useState} from 'react';
import classnames from 'classnames'
import { Container, Row, Col, Carousel, CarouselItem, CarouselControl } from 'reactstrap';
import {Link} from "react-router-dom";

import img1 from "../../assets/images/Cover/mainSlide1.jpg";
import img2 from "../../assets/images/Cover/mainSlide2.jpg";
import img3 from "../../assets/images/Cover/mainSlide3.jpg";


const Cover = () => {

    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

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
    ];

    return (
        <Fragment>
            <section id="cover">
                <Carousel activeIndex={activeIndex} next={next} previous={previous}>
                    <ol className="carousel-indicators">
                        {items.map((item, index) => {
                            return (
                                <li
                                    data-target="#carousel-thumb"
                                    key={index}
                                    onClick={() => goToIndex(index)}
                                    className={classnames({ active: activeIndex === index })}
                                >
                                    <img className="img-fluid d-block" src={item.src}/>
                                </li>
                            );
                        })}


                        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
                    </ol>

                    {items && items.map((item) => {
                        return (
                            <CarouselItem>
                                <div
                                    className="carousel-bg"
                                    style={{
                                        backgroundImage:`url(${item.src})`,
                                    }}
                                >
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

                            </CarouselItem>
                        )
                    })}
                </Carousel>
            </section>
        </Fragment>
    );
};

export default Cover;
