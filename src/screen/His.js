
import React, {Fragment} from 'react';
import {
    Container,
} from 'reactstrap';


import HeaderP from "../components/header/HeaderP";
import Footer from "../components/footer/Footer";


import bottom from '../assets/images/list/board_center.png'


import img1 from '../assets/images/list/index_2020Autumn.png'
import img2 from '../assets/images/list/index_2020Summer.png'
import img3 from '../assets/images/list/index_2020Spring.png'
import img4 from '../assets/images/list/index_2020Winter.png'


import img5 from '../assets/images/list/index_2019Autumn.png'
import img6 from '../assets/images/list/index_2019Summer.png'
import img7 from '../assets/images/list/index_2019Spring.png'
import img8 from '../assets/images/list/index_2019Winter.png'


import img9 from '../assets/images/list/index_2018Autumn.png'
import img10 from '../assets/images/list/index_2018Summer.png'
import img11 from '../assets/images/list/index_2018Spring.png'
import img12 from '../assets/images/list/index_2018NewYear.png'


import img13 from '../assets/images/list/index_2017Autumn.png'
import img14 from '../assets/images/list/index_2017Summer.png'
import img15 from '../assets/images/list/index_2017Spring.png'
import img16 from '../assets/images/list/index_2017NewYear.png'


import img17 from '../assets/images/list/index_2016Autumn.png'
import img18 from '../assets/images/list/index_2016Summer.png'
import img19 from '../assets/images/list/index_2016Spring.png'
import img20 from '../assets/images/list/index_2016NewYear.png'


const His = () => {
    return (
        <Fragment>

            <HeaderP/>

            <Container>
                <div className="history">
                    <section className="mt-5 mb-5">
                        <div className="pt-3 pb-3">
                            <h1>2020</h1>
                        </div>


                        <div
                            className="d-flex justify-content-center"
                            style={{
                                // border: "2px solid",
                                backgroundImage:`url(${bottom})`,
                                backgroundPosition: "bottom"
                            }}
                        >
                            <div
                                style={{
                                    padding: "15px",
                                }}
                            >
                                <a href="https://www.nhimc.or.kr/ilsan_news/Hello_2020_Autumn/html/index.html" title="페이지 이동">
                                    <div>
                                        2020 Vol.20
                                        <h2 className="season">
                                            가을호
                                        </h2>
                                    </div>
                                    <img style={{alignSelf: "center"}} className="img-fluid mb-3" src={img1} alt="" />
                                </a>
                            </div>

                            <div style={{padding: "15px"}}>
                                <a href="https://www.nhimc.or.kr/ilsan_news/Hello_2020_Summer/html/index.html" title="페이지 이동">
                                    <div>
                                        2020 Vol.19
                                        <h2 className="">
                                            여름호
                                        </h2>
                                    </div>
                                    <img style={{alignSelf: "center"}} className="img-fluid mb-3" src={img2} alt="" />
                                </a>
                            </div>


                            <div style={{padding: "15px"}}>
                                <a href="https://www.nhimc.or.kr/ilsan_news/Hello_2020_Spring/html/index.html" title="페이지 이동">
                                    <div>
                                        2020 Vol.18
                                        <h2 className="">
                                            봄호
                                        </h2>
                                    </div>
                                    <img style={{alignSelf: "center"}} className="img-fluid mb-3" src={img3} alt="" />
                                </a>
                            </div>


                            <div style={{padding: "15px"}}>
                                <a href="https://www.nhimc.or.kr/ilsan_news/Hello_2020_Winter/html/index.html" title="페이지 이동">
                                    <div>
                                        2020 Vol.17
                                        <h2 className="">
                                            신년호
                                        </h2>
                                    </div>
                                    <img style={{alignSelf: "center"}} className="img-fluid mb-3" src={img4} alt="" />
                                </a>
                            </div>
                        </div>
                    </section>

                    <section className="mb-5">
                        <div className="pt-3 pb-3">
                            <h1 className="history__title">2019</h1>
                        </div>


                        <div
                            className="d-flex justify-content-center"
                            style={{
                                // border: "2px solid",
                                backgroundImage:`url(${bottom})`,
                                backgroundPosition: "bottom"
                            }}
                        >
                            <div
                                style={{
                                    padding: "15px",
                                }}
                            >
                                <a href="https://www.nhimc.or.kr/ilsan_news/Hello_2019_Autumn/html/index.html" title="페이지 이동">
                                    <div>
                                        2019 Vol.16
                                        <h2 className="">
                                            가을호
                                        </h2>
                                    </div>


                                    <img style={{alignSelf: "center"}} className="img-fluid mb-3" src={img5} alt="" />
                                </a>
                            </div>

                            <div style={{padding: "15px"}}>
                                <a href="https://www.nhimc.or.kr/ilsan_news/Hello_2019_Summer/html/index.html" title="페이지 이동">
                                    <div>
                                        2019 Vol.15
                                        <h2 className="">
                                            여름호
                                        </h2>
                                    </div>
                                    <img style={{alignSelf: "center"}} className="img-fluid mb-3" src={img6} alt="" />
                                </a>
                            </div>


                            <div style={{padding: "15px"}}>
                                <a href="https://www.nhimc.or.kr/ilsan_news/Hello_2019_Spring/html/index.html" title="페이지 이동">
                                    <div>
                                        2019 Vol.14
                                        <h2 className="">
                                            봄호
                                        </h2>
                                    </div>
                                    <img style={{alignSelf: "center"}} className="img-fluid mb-3" src={img7} alt="" />
                                </a>
                            </div>


                            <div style={{padding: "15px"}}>
                                <a href="https://www.nhimc.or.kr/ilsan_news/Hello_2019_Winter/html/index.html" title="페이지 이동">
                                    <div>
                                        2019 Vol.13
                                        <h2 className="">
                                            신년호
                                        </h2>
                                    </div>
                                    <img style={{alignSelf: "center"}} className="img-fluid mb-3" src={img8} alt="" />
                                </a>
                            </div>
                        </div>
                    </section>

                    <section className="mb-5">
                        <div className="pt-3 pb-3">
                            <h1>2018</h1>
                        </div>


                        <div
                            className="d-flex justify-content-center"
                            style={{
                                // border: "2px solid",
                                backgroundImage:`url(${bottom})`,
                                backgroundPosition: "bottom"
                            }}
                        >
                            <div
                                style={{
                                    padding: "15px",
                                }}
                            >
                                <a href="https://www.nhimc.or.kr/ilsan_news/Hello_2018Fall/html/index.html" title="페이지 이동">
                                    <div>
                                        2018 Vol.12
                                        <h2 className="">
                                            가을호
                                        </h2>
                                    </div>


                                    <img style={{alignSelf: "center"}} className="img-fluid mb-3" src={img9} alt="" />
                                </a>
                            </div>

                            <div style={{padding: "15px"}}>
                                <a href="https://www.nhimc.or.kr/ilsan_news/Hello_2018Summer/html/index.html" title="페이지 이동">
                                    <div>
                                        2018 Vol.11
                                        <h2 className="">
                                            여름호
                                        </h2>
                                    </div>
                                    <img style={{alignSelf: "center"}} className="img-fluid mb-3" src={img10} alt="" />
                                </a>
                            </div>


                            <div style={{padding: "15px"}}>
                                <a href="https://www.nhimc.or.kr/ilsan_news/Hello_2018Spring/html/index.html" title="페이지 이동">
                                    <div>
                                        2018 Vol.10
                                        <h2 className="">
                                            봄호
                                        </h2>
                                    </div>
                                    <img style={{alignSelf: "center"}} className="img-fluid mb-3" src={img11} alt="" />
                                </a>
                            </div>


                            <div style={{padding: "15px"}}>
                                <a href="https://www.nhimc.or.kr/ilsan_news/Hello_2018Winter/html/index.html" title="페이지 이동">
                                    <div>
                                        2018 Vol.9
                                        <h2 className="">
                                            신년호
                                        </h2>
                                    </div>
                                    <img style={{alignSelf: "center"}} className="img-fluid mb-3" src={img12} alt="" />
                                </a>
                            </div>
                        </div>
                    </section>

                    <section className="mb-5">
                        <div className="pt-3 pb-3">
                            <h1>2017</h1>
                        </div>


                        <div
                            className="d-flex justify-content-center"
                            style={{
                                // border: "2px solid",
                                backgroundImage:`url(${bottom})`,
                                backgroundPosition: "bottom"
                            }}
                        >
                            <div
                                style={{
                                    padding: "15px",
                                }}
                            >
                                <a href="https://www.nhimc.or.kr/ilsan_news/Hello_2017Autumn/html/index.html" title="페이지 이동">
                                    <div>
                                        2017 Vol.08
                                        <h2>
                                            가을호
                                        </h2>
                                    </div>


                                    <img style={{alignSelf: "center"}} className="img-fluid mb-3" src={img13} alt="" />
                                </a>
                            </div>

                            <div style={{padding: "15px"}}>
                                <a href="https://www.nhimc.or.kr/ilsan_news/Hello_2017summer/html/index.html" title="페이지 이동">
                                    <div>
                                        2017 Vol.07
                                        <h2 className="">
                                            여름호
                                        </h2>
                                    </div>
                                    <img style={{alignSelf: "center"}} className="img-fluid mb-3" src={img14} alt="" />
                                </a>
                            </div>


                            <div style={{padding: "15px"}}>
                                <a href="https://www.nhimc.or.kr/ilsan_news/Hello_2017spring/html/index.html" title="페이지 이동">
                                    <div>
                                        2017 Vol.06
                                        <h2 className="">
                                            봄호
                                        </h2>
                                    </div>
                                    <img style={{alignSelf: "center"}} className="img-fluid mb-3" src={img15} alt="" />
                                </a>
                            </div>


                            <div style={{padding: "15px"}}>
                                <a href="https://www.nhimc.or.kr/ilsan_news/Hello_2017winter/html/index.html" title="페이지 이동">
                                    <div>
                                        2017 Vol.05
                                        <h2 className="">
                                            신년호
                                        </h2>
                                    </div>
                                    <img style={{alignSelf: "center"}} className="img-fluid mb-3" src={img16} alt="" />
                                </a>
                            </div>
                        </div>
                    </section>

                    <section className="mb-5">
                        <div className="pt-3 pb-3">
                            <h1>2016</h1>
                        </div>


                        <div
                            className="d-flex justify-content-center"
                            style={{
                                // border: "2px solid",
                                backgroundImage:`url(${bottom})`,
                                backgroundPosition: "bottom"
                            }}
                        >
                            <div
                                style={{
                                    padding: "15px",
                                }}
                            >
                                <a href="https://www.nhimc.or.kr/ilsan_news/Hello_2016autumn/index.jsp" title="페이지 이동">
                                    <div>
                                        2016 Vol.04
                                        <h2 className="">
                                            가을호
                                        </h2>
                                    </div>


                                    <img style={{alignSelf: "center"}} className="img-fluid mb-3" src={img17} alt="" />
                                </a>
                            </div>

                            <div style={{padding: "15px"}}>
                                <a href="https://www.nhimc.or.kr/ilsan_news/Hello_2016summer/index.jsp" title="페이지 이동">
                                    <div>
                                        2016 Vol.03
                                        <h2 className="">
                                            여름호
                                        </h2>
                                    </div>
                                    <img style={{alignSelf: "center"}} className="img-fluid mb-3" src={img18} alt="" />
                                </a>
                            </div>


                            <div style={{padding: "15px"}}>
                                <a href="https://www.nhimc.or.kr/ilsan_news/Hello_2016spring/index.jsp" title="페이지 이동">
                                    <div>
                                        2016 Vol.02
                                        <h2 className="">
                                            봄호
                                        </h2>
                                    </div>
                                    <img style={{alignSelf: "center"}} className="img-fluid mb-3" src={img19} alt="" />
                                </a>
                            </div>


                            <div style={{padding: "15px"}}>
                                <a href="https://www.nhimc.or.kr/ilsan_news/Hello_2016winter/index.jsp" title="페이지 이동">
                                    <div>
                                        2016 Vol.01
                                        <h2 className="">
                                            신년호
                                        </h2>
                                    </div>
                                    <img style={{alignSelf: "center"}} className="img-fluid mb-3" src={img20} alt="" />
                                </a>
                            </div>
                        </div>
                    </section>
                </div>
            </Container>

            <Footer/>
        </Fragment>
    );
};

export default His;
