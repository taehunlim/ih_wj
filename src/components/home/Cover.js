import React, {Fragment, useState, useEffect} from 'react';

import {Link} from "react-router-dom";

import img1 from "../../assets/images/Cover/cover1.jpg";
import img2 from "../../assets/images/Cover/cover2.jpg";
import img3 from "../../assets/images/Cover/cover3.jpg";


import Slider from 'react-slick';
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io/index";

const Cover = () => {

    const head = [
        (
            <div>
                SECTION Ⅰ
            </div>
        ),
        (
            <div>
                SECTION Ⅱ
            </div>
        ),
        (
            <div>
                SECTION Ⅲ
            </div>
        )
    ]

    const caption = [
        (
            <div>
                <div> 병원에서</div>
                ‘보다’의 의미를 찾다
            </div>
        ),
        (
            <div>
                코로나19로부터
                <br/>안전한 세상
                <br/>일산병원이 함께합니다
            </div>
        ),
        (
            <div>
                2021년 1월 1일의
                <br/>
                해가 떠오르다
                <br/>한강에서 본 일출
            </div>
        )
    ]

    const items = [
        {
            id: "1",
            src: img1,
            url: 4,
            head: head[0],
            caption: caption[0],
        },
        {
            id: "2",
            src: img2,
            url: 7,
            head: head[1],
            caption: caption[1]
        },
        {
            id: "3",
            src: img3,
            url: 1,
            head: head[2],
            caption: caption[2]
        }
    ];

    console.log(items[0].url)

    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const [slider1, setSlider1] = useState(null);
    const [slider2, setSlider2] = useState(null);

    useEffect(() => {
        setNav1(slider1);
        setNav2(slider2);

    }, [slider1, slider2]);

    const settingsMain = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    };

    const settingsThumbs = {
        slidesToShow: 2,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        // centerMode: true,
        swipeToSlide: true,
        focusOnSelect: true,
        centerPadding: '5px',
        nextArrow: (
            <div className="next-slick-arrow"> <IoIosArrowForward/> </div>
        ),
        prevArrow: (
            <div className="prev-slick-arrow"> <IoIosArrowBack/> </div>
        ),
        responsive: [
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
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
                            <div key={item.id}>
                                <div className="">
                                    <img src={item.src} className="img-fluid" alt="/"/>
                                </div>


                                <div key={item.id} className="slider-content">
                                    <h2 className="color-title space-mb--20">
                                        {item.head}
                                    </h2>
                                    <h1
                                        className="main-title space-mb--30"
                                    >
                                        {item.caption}
                                    </h1>

                                    <Link
                                        key={item.id}
                                        to={`/section/${item.id}/${item.url}`}
                                        as="/"
                                        className="ih-button ih-button--medium"
                                    >
                                        기사 보기
                                    </Link>
                                </div>

                            </div>
                        )}
                    </Slider>

                    <div className="thumbnail-slick-slider">
                        <Slider
                            {...settingsThumbs}
                            asNavFor={nav1}
                            ref={slider => (setSlider2(slider))}
                            className="thumb"
                        >
                            {items.map((slide) =>
                                <div className="slick-thumb-slide" key={slide.id}>
                                    <img className="slick-slide-image img-fluid" src={slide.src} alt="/" />
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
