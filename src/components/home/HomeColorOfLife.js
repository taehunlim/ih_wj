import React, {Fragment, useState} from 'react';
import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    CardText,
    CardImg,
    CardTitle
} from 'reactstrap';
import {Link} from 'react-router-dom';
import Slider from 'react-slick';
import {IoIosArrowForward, IoIosArrowBack} from 'react-icons/io'

import {trimText} from '../../utils'

import image1 from '../../assets/images/cl/color1.jpg';
import image2 from '../../assets/images/cl/color2.jpg';
import image3 from '../../assets/images/cl/color3.jpg';
import image4 from '../../assets/images/cl/color4.jpg';
import image5 from '../../assets/images/cl/color5.jpg';

const HomeColorOfLife = () => {

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
            id: 1,
            src: image1,
            head: "Prologue",
            title: "희망을 이야기하는 Color",
            caption: "    긴 밤이 지나면 하루도 거르지 않고 어김없이 노란 오늘의 태양이 떠오른다.\n" +
                "컴컴했던 세상은 태양의 색으로 물들며 밤새 잠들어 있던 일상을 깨운다.\n" +
                "긴 밤의 끝에는 반드시 태양이 떠올라서일까, 태양의 노란색은 희망과 행복을 상징하는 컬러로 이야기되고 있다."
        },
        {
            id: 2,
            src: image2,
            head: "IH 진료실 1",
            title: "몸 구석구석 건강을 돌보는 혈관, 어떠한 질병이?",
            caption: "건강보험심사평가원에 따르면 담낭염으로 병원을 찾는 환자 수가 매년 증가하는 것으로 나타났다.\n" +
                "특히 최근에는 서구화된 식단과 비만으로 콜레스테롤 담석이 증가하고 있으며, " +
                "체중을 줄이기 위한 무리한 다이어트나 장기간 금식으로 담즙 속 염분과 콜레스테롤 균형이 깨져 만성 담낭염의 발병 위험도 커지고 있다."
        },
        {
            id: 3,
            src: image3,
            head: "IH 진료실 2",
            title: "내 눈에 날파리가? 비문증의 모든 것",
            caption: "몸의 신진대사를 원활히 돌아가게 하려면 혈관을 통해 영양소를 잘 전달하고 노폐물을 잘 배출하는 것이 중요하다.\n" +
                "나이가 듦에 따라 혈관 역시 노화되어 변화를 겪게 되는데, 평소 잘 관리하지 않으면 동맥질환의 원인이 될 수 있다."
        },
        {
            id: 4,
            src: image4,
            head: "IH 진료실 3",
            title: "극심한 복통? 무증상? 급성 담낭염과 만성 담낭염",
            caption: "건강보험심사평가원에 따르면 담낭염으로 병원을 찾는 환자 수가 매년 증가하는 것으로 나타났다.\n" +
                "특히 최근에는 서구화된 식단과 비만으로 콜레스테롤 담석이 증가하고 있으며, 체중을 줄이기 위한 무리한 다이어트나 장기간 금식으로 담즙 속 염분과 콜레스테롤 균형이 깨져 만성 담낭염의 발병 위험도 커지고 있다."
        },
        {
            id: 5,
            src: image5,
            head: "IH 진료실 4",
            title: "피부 노화의 주범, 검버섯",
            caption: "검버섯은 나이가 들수록 흑자, 기미 , 주근깨와 함께 가장 많이 발생하는 피부 증상 중 하나이다.\n" +
                " 특히나 검버섯은 흑자, 기미, 주근깨보다 모양도 크고 색도 진해 미용상 더욱 신경 쓰이는 피부 병변 중 하나이다."
        }
    ]

    return (
        <Fragment>
            <section className="section" id="coloroflife">
                <Container>
                    <Row>
                        <Col lg="12">
                            <div className="text-center mb-5">
                                <h4>COLOR of Life </h4>
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
                                                <Link className="card-slider__link" to={`/coloroflife/${item.id}`}>
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

export default HomeColorOfLife;
