import React, {Fragment} from 'react';

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Cover from "../components/home/Cover";

import Section1 from "../components/home/Section1";
import Section2 from "../components/home/Section2";
import Section3 from "../components/home/Section3";
import Service from "../components/home/Service";

// import {Swiper, SwiperSlide} from 'swiper/react';
// import SwiperCore, {EffectFade, Navigation, Pagination, Autoplay} from 'swiper'
// import img from "../assets/images/section1/intro01.png";
// import img2 from "../assets/images/section1/newyears.1.png";
//
// import {
//     Container,
//     Card,
//     CardBody,
//     CardText,
//     CardImg,
//     CardTitle,
//     CardSubtitle
// } from 'reactstrap';
// SwiperCore.use([Navigation, Pagination, EffectFade, Autoplay])






const Home = () => {
    return (
        <Fragment>
            <div style={{backgroundColor: "#ededed"}}>

                <Header/>

                <Cover/>

                <Section1/>

                <Section2/>

                <Section3/>

                <Service/>


                {/*<Container>*/}
                {/*    <Swiper*/}
                {/*        slidesPerView={3}*/}
                {/*        spaceBetween={30}*/}
                {/*        navigation*/}
                {/*        breakpoints={{*/}
                {/*            1024: {*/}
                {/*                slidesPerView: 3*/}
                {/*            },*/}
                {/*            768: {*/}
                {/*                slidesPerView: 2*/}
                {/*            },*/}
                {/*            640: {*/}
                {/*                slidesPerView: 2*/}
                {/*            },*/}
                {/*            320: {*/}
                {/*                slidesPerView: 2*/}
                {/*            }*/}
                {/*        }}*/}
                {/*    >*/}
                {/*        <SwiperSlide>*/}
                {/*            <Container>*/}
                {/*                <div style={{backgroundImage: `url(${img})`}}>*/}

                {/*                </div>*/}

                {/*            </Container>*/}

                {/*        </SwiperSlide>*/}
                {/*        <SwiperSlide>*/}
                {/*            <Container>*/}
                {/*                <img src={img2} className="img-fluid"/>*/}
                {/*            </Container>*/}

                {/*        </SwiperSlide>*/}

                {/*    </Swiper>*/}
                {/*</Container>*/}



                <Footer/>

            </div>
        </Fragment>
    );
};

export default Home;
