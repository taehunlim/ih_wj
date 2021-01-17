import React, {Fragment} from 'react';
import {

    CardBody,
    CardTitle,
    Row,
    Col
} from 'reactstrap';

import HeaderP from "../components/header/HeaderP";
import Footer from "../components/footer/Footer";

import around1 from '../assets/images/section3/around1.jpg'


import icon from "../assets/images/section3/today/icon2.jpg";



const SectionThree = ({match}) => {

    const head = [
        (
            <div style={{fontSize: "24px"}}>
                AROUND
            </div>
        ),
        (
            <div style={{fontSize: "24px"}}>
                FOOD
            </div>
        ),
        (
            <div style={{fontSize: "24px"}}>
                TREND
            </div>
        ),
        (
            <div style={{fontSize: "24px"}}>
                ISSUE
            </div>
        ),
        (
            <div style={{fontSize: "24px"}}>
                IH NEWS
            </div>
        ),
        (
            <div style={{fontSize: "24px"}}>
                IH TODAY
            </div>
        ),
        (
            <div style={{fontSize: "24px"}}>
                IH LETTER
            </div>
        ),
        (
            <div style={{fontSize: "24px"}}>
                진료일정표
            </div>
        )
    ]

    const title = [
        (
            <div>
                2021년 1월 1일의 해가 떠오르다
                <div style={{fontWeight: "900"}}>한강에서 본 일출</div>
            </div>
        ),
        (
            <div>
                지금이 제철!
                <br/>
                영양 가득한 바다 맛,
                <div style={{fontWeight: "900"}}>굴</div>
            </div>
        ),
        (
            <div>
                당근해서 겟한 물건
                <br/>
                <div style={{fontWeight: "900"}}>나에겐 N차 신상</div>
            </div>
        ),
        (
            <div>
                국민건강보험 일산병원, ‘코로나19 거점전담병원’ 운영
                <div style={{fontWeight: "900"}}>
                    지역 내 의료기관 협력을 통한 <br/>
                    효율적인 코로나19 대응체계 모색
                </div>
            </div>
        ),
        (
            <div>
                <div style={{fontWeight: "900"}}>김성우 병원장, 공로상 수상</div>
            </div>
        ),
        (
            <div>
                10.01.<span style={{fontWeight: "900"}}> YTN뉴스 </span>
                <br/>
                뉴스연휴에 갑자기 열 나는우리 아이, 어떻게 해야 하나?
            </div>
        ),
        (
            <div style={{color: "lightseagreen"}}>
                독자의견
            </div>
        ),
        (
            <div>
                진료일정표
            </div>
        )
    ]

    const subtitle = [
        (
            <div>
                해돋이 관광객들로 전국이 떠들썩해야 할 연말연시. 사회적 거리두기로
                <br/>
                올해는 한강에서 보는 일출로 만족해야겠다며 열심히 일출 스폿을 찾아봤습니다.
                <br/>
                매봉산 팔각정, 한강대교, 선유도공원, 인왕산, 하늘공원 등 곳곳이 다 절경입니다.
                <br/>
                그중 포토그래퍼 두 명이 고른 매봉산 팔각정과 선유도공원에서 새해 일출을 담아봤습니다.
                <br/>
                글 <span style={{fontWeight: "normal"}}> 편집실 / </span>
                사진 <span style={{fontWeight: "normal"}}> 이덕환 </span>
            </div>
        ),
        (
            <div>
                싱싱한 굴에 레몬을 곁들여 초장에 살짝 찍어 먹는 생굴회, 나박나박 썬 무를 참기름에 달달 볶다가 굴을 넣어 시원하게 끓여내는 굴무국은 한겨울 추위를 잊게 하는 맛이다. 갖가지 영양소가 풍부해 겨울철 영양 보충에도 좋은 굴의 매력 속으로 빠져보자.
                <br/>
                <br/>
                글 <span style={{fontWeight: "normal"}}> 편집실 / </span>
                사진 <span style={{fontWeight: "normal"}}> 백기광 / </span>
                스타일링 <span style={{fontWeight: "normal"}}> 박정윤(노하우스) </span>
            </div>
        ),
        (
            <div>
                ‘당근하다’라는 말을 들어본 적 있다면 당신은 트렌드에 민감한 편이다. 혹시 ‘당연하다’라고 해석했다면 취소. ‘당근하다’는 한창 붐을 일으키고 있는 중고거래 앱 ‘당근마켓에 물건을 내놓는다’는 신조어다. 다양한 플랫폼이 등장하고 50~60대 연령층까지 가세하며 열풍이 불고 있다. 중고거래를 통해 겟한 물건은 N차 신상이라 불리며 새로운 소비 패러다임을 제시한다.
                <br/>
                <br/>
                글 <span style={{fontWeight: "normal"}}> 편집실 / </span>
                참조 <span style={{fontWeight: "normal"}}> 『트렌드코리아 2021』(미래의창) </span>
            </div>
        ),
        (
            <div>
                국민건강보험 일산병원이 코로나19 확진자 전담 치료병동을 운영함으로써 국민보건의료 향상이라는 병원 설립 취지에 맞춰 보험자병원으로서의 역할 강화에 나섰다. 최근 코로나19 확진자가 급증해 치료 병상이 절실하게 필요해진 국가 감염병 재난 상황에 대응하고자 10∼13층 4개 병동을 코로나19 확진자 전담 치료병동으로 전환해 운영한다.
                정리 <span style={{fontWeight: "normal"}}> 편집실 </span>
                사진 <span style={{fontWeight: "normal"}}> 일산병원 </span>
            </div>
        ),
        (
            <div>
                김성우 병원장이 2020년 10월 30~31일 양 일간 서울드래곤시티에서 열린 2020 대한재활의학회 추계학술대회에서 공로상을 수상 했다. 공로상은 재활의학 분야 개선과 학회 발전에 기여한 개인에게 수여하는 상이다. 김성우 병원장은 대한재활의학회 회원으로서 학문과 학회의 발전에 힘쓰고 미충족 재활 의료 서비스에 대한 연구 지원으로 재활의료 연구에 기여한 공로를 인정 받아 이상을 수상했다.
            </div>
        ),
        (
            <div>
                누구나 손발이 저린 경험이 있을 것이다. 오랫동안 바닥에 앉아 있었거나 엎드려서 잠들었을 때 손발이 저릴 수 있는데, 이는 말초신경에 압력이 가해지면서 생긴 일시적인 증상으로, 자세를 바꿔서 말초신경에 가해지는 압력이 사라지면 호전된다.
                <br/>그러나 손발 저림이 지속되거나 반복적으로 같은 양상이 나타난다면, 치료가 필요한 신경계 이상일 가능성이 있다.
                <br/>
                <br/>
                글 <span style={{fontWeight: "normal"}}> 신경과 조정희 교수 </span>
            </div>
        ),
        (
            <div>
                다시 확산하는 코로나19가 끊임없이 우리의 안전을 위협합니다. 국민건강보험 일산병원은 코로나19 확진자 전담 치료병동을 운영하며 코로나19로부터 안전한 세상을 열어갑니다.
                <br/>코로나19 거점전담병원으로서 국가적 재난 상황에 적극 대응합니다. 공공병원이자 보험자병원인 일산병원이 코로나19 종식의 그 날까지 함께합니다.
            </div>
        ),
        (
            <div>
                <p>
                    <span>대표전화</span>
                    <a href="tel:031-900-0114" title="전화걸기">(031) 900-0114</a>,
                    <a href="tel:031-900-3114" title="전화걸기">3114</a>
                    <br/>
                    <span>전화예약</span>
                    <a href="tel:1577-0013" title="전화걸기">1577-0013</a>
                    <br/>
                    <span>인터넷예약</span>
                    <a href="http://www.nhimc.or.kr" title="새창열림" target="_blank" rel="noreferrer">www.nhimc.or.kr</a>
                    <br/>
                    <span>응급의료센터</span>
                    <a href="tel:031-900-0760" title="전화걸기">(031) 900-0760</a>
                    <br/>
                    <span>종합건진센터</span>
                    <a href="tel:1577-7013" title="전화걸기">1577-7013</a>
                    <br/>
                    <span>국가검진센터</span> <a href="tel:1577-8013" title="전화걸기">1577-8013</a>
                </p>
                <p>
                    ※ 진료일정은 병원사정에 의해 변경될 수 있습니다.
                </p>
                <p>◆~★ 클리닉이면서 일반환자 진료가능, □~☆ 클리닉환자만 진료</p>
                <p>
                    진료예약
                    <a href="tel:1577-0013" title="전화걸기">1577-0013</a>
                </p>
            </div>
        )
    ]


    // sction 1~4

    const date = [
        (
            <div>
                <span className="">2020.<br/>10. 05.</span><br/>
                <span className="font-weight-bold">경향신문</span>
            </div>
        ),
        (
            <div>
                <span className="">2020.<br/>11. 25.</span><br/>
                <span className="font-weight-bold">조선일보</span>
            </div>
        ),
        (
            <div>

            </div>
        )
    ]

    const write = [
        (
            <div>
                <span className="font-weight-bold">[기고]마스크, 면역의 한 가지 형태</span><br/>
                <span className="">감염내과 최흔 교수</span>
            </div>
        ),
        (
            <div>
                <span className="font-weight-bold">10代 입원, 위장염이 1위</span><br/>
                <span className="">소아청소년과 유지형 교수</span>
            </div>
        ),
        (
            <div>
            </div>
        )
    ]


    const items = [
        {
            id: "1",
            src: around1,
            head: head[0],
            title: title[0],
            subtitle: subtitle[0],
            article: [
                {

                    date: date[0],
                    write: write[0]
                },
                {

                    date: date[1],
                    write: write[1]
                },
                {

                    date: date[2],
                    write: write[2]
                },
            ]
        }
    ]




    const item = items.find((p) => p.id === match.params.id)

    console.log(item)

    return (
        <Fragment>

            <HeaderP/>



            <div className="">
                <Row>
                    {/*<Col lg={6}>*/}

                    {/*    <div className="">*/}
                    {/*        <CardBody className="color-of-life__header pt-0 pb-0" style={{backgroundColor: "powderblue"}}>*/}
                    {/*            <div className="d-flex align-items-center">*/}
                    {/*                <img src={icon} alt="/"/>*/}

                    {/*                <CardBody className="pt-0 pb-0">*/}
                    {/*                    <CardTitle style={{fontSize: "24px"}}>*/}
                    {/*                        포상*/}
                    {/*                    </CardTitle>*/}
                    {/*                </CardBody>*/}

                    {/*            </div>*/}
                    {/*        </CardBody>*/}

                    {/*        <div className="">*/}
                    {/*            <h5>2020년 일산병원 우수 홍보인</h5>*/}
                    {/*        </div>*/}
                    {/*        <table className="ih-article">*/}
                    {/*            /!*<tbody>*!/*/}

                    {/*            <tbody style={{borderBottom: "1px solid"}}>*/}
                    {/*            <tr>*/}
                    {/*                <td style={{width: "30%"}}>*/}
                    {/*                    최우수상*/}
                    {/*                </td>*/}
                    {/*                <td style={{width: "70%", textAlign: "end"}}>*/}
                    {/*                    호흡기내과 한창훈*/}
                    {/*                </td>*/}

                    {/*            </tr>*/}
                    {/*            </tbody>*/}
                    {/*        </table>*/}
                    {/*    </div>*/}




                    {/*    <div className="">*/}

                    {/*        <div className="">*/}
                    {/*            <h5>하반기 친절직원</h5>*/}
                    {/*        </div>*/}
                    {/*        <table className="ih-article">*/}
                    {/*            /!*<tbody>*!/*/}

                    {/*            <tbody style={{borderBottom: "1px solid"}}>*/}
                    {/*            <tr>*/}
                    {/*                <td style={{width: "30%"}}>*/}
                    {/*                    최우수상*/}
                    {/*                </td>*/}
                    {/*                <td style={{width: "70%", textAlign: "end"}}>*/}
                    {/*                    호흡기내과 한창훈*/}
                    {/*                </td>*/}

                    {/*            </tr>*/}
                    {/*            </tbody>*/}

                    {/*        </table>*/}
                    {/*    </div>*/}

                    {/*</Col>*/}


                    <Col lg={6}>

                        <div className="">
                            <CardBody className="color-of-life__header pt-0 pb-0" style={{backgroundColor: "powderblue"}}>
                                <div className="d-flex align-items-center">
                                    <img src={icon} alt="/"/>

                                    <CardBody className="pt-0 pb-0">
                                        <CardTitle style={{fontSize: "24px"}}>
                                            결혼
                                        </CardTitle>
                                    </CardBody>

                                </div>
                            </CardBody>

                            <table className="ih-article">
                                {/*<tbody>*/}

                                <tbody style={{borderBottom: "1px solid"}}>
                                <tr>
                                    <td style={{width: "30%"}}>
                                        최우수상
                                    </td>
                                    <td style={{width: "70%", textAlign: "end"}}>
                                        호흡기내과 한창훈
                                    </td>

                                </tr>
                                </tbody>
                            </table>
                        </div>




                        <div className="">
                            <CardBody className="color-of-life__header pt-0 pb-0" style={{backgroundColor: "powderblue"}}>
                                <div className="d-flex align-items-center">
                                    <img src={icon} alt="/"/>

                                    <CardBody className="pt-0 pb-0">
                                        <CardTitle style={{fontSize: "24px"}}>
                                            출산
                                        </CardTitle>
                                    </CardBody>

                                </div>
                            </CardBody>
                            <table className="ih-article">
                                {/*<tbody>*/}

                                <tbody style={{borderBottom: "1px solid"}}>
                                <tr>
                                    <td style={{width: "30%"}}>
                                        최우수상
                                    </td>
                                    <td style={{width: "70%", textAlign: "end"}}>
                                        호흡기내과 한창훈
                                    </td>

                                </tr>
                                </tbody>

                            </table>
                        </div>

                    </Col>
                </Row>
            </div>

            <Footer/>

        </Fragment>
    );
};

export default SectionThree;
