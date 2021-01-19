import React, {Fragment} from 'react';
import {
    Container,
    CardBody,
    CardText,
    CardImg,
    CardTitle,
    CardSubtitle,
    Row,
    Col
} from 'reactstrap';


import icon1 from "../assets/images/section3/today/icon1.jpg";
import icon2 from "../assets/images/section3/today/icon2.jpg";
import icon3 from '../assets/images/section3/today/icon3.jpg'
import icon4 from "../assets/images/section3/today/icon4.jpg";
import icon5 from '../assets/images/section3/today/icon5.jpg'
import icon6 from "../assets/images/section3/today/icon6.jpg";


const IhToday = ({item}) => {


    return (
        <Fragment>

            {item.id === "6" ?
                <div>


                    {item.airing ?
                        <div>
                            <CardBody className="color-of-life__header pt-0 pb-0" >
                                <div className="d-flex " style={{backgroundColor: "powderblue"}}>
                                    <img src={icon1} alt="/"/>

                                    <CardBody className="pt-0 pb-0">
                                        <CardTitle style={{fontSize: "24px"}}>
                                            방송
                                        </CardTitle>
                                    </CardBody>

                                </div>
                            </CardBody>

                            <Row className="mb-5 ih-celebration-wrapper">
                                {item.airing ? item.airing.map((c) => (
                                    <Col md={6} lg={4} className="pl-2 pr-2">
                                        <CardBody className="color-of-life__body">
                                            <div style={{textAlign: "center"}}>
                                                {c.src ?
                                                    <CardImg className="img-fluid mb-5" src={c.src} alt="/"/> : ""
                                                }

                                            </div>
                                            <CardSubtitle className="color-of-life__body__subtitle mb-3">
                                                {c.ctitle}
                                            </CardSubtitle>
                                            <CardText className="color-of-life__body__text mb-5">
                                                <Row>
                                                    <Col xs={9} sm={9} md={9} lg={9}>
                                                        {c.ctext}
                                                    </Col>

                                                    <Col xs={3} sm={3} md={3} lg={3}>
                                                        <a
                                                            className="ih-button"
                                                            href={c.url}
                                                            target="_blank"
                                                            title="새창팝업"
                                                            rel="noreferrer">
                                                            기사<br/>보기
                                                        </a>
                                                    </Col>

                                                </Row>

                                            </CardText>


                                        </CardBody>
                                    </Col>
                                )): ""}
                            </Row>
                        </div>

                        : ""}



                    {item.article ?
                        <div className="">
                            <CardBody className="color-of-life__header pt-0 pb-0">
                                <div className="d-flex " style={{backgroundColor: "powderblue"}}>
                                    <img src={icon2} alt="/" />

                                    <CardBody className="pt-0 pb-0">
                                        <CardTitle style={{fontSize: "24px"}}>
                                            신문
                                        </CardTitle>
                                    </CardBody>

                                </div>
                            </CardBody>

                            <Container>
                                <Row className="mb-5 ih-celebration-wrapper">
                                    {item.article ? item.article.map((c) => (
                                        <Col md={6} lg={6}>
                                            <table className="ih-article">
                                                {/*<tbody>*/}

                                                <tbody style={{borderBottom: "2px dotted"}}>
                                                <tr>
                                                    <td style={{width: "20%"}}>
                                                        {c.date}
                                                    </td>
                                                    <td style={{width: "70%"}}>
                                                        {c.write}
                                                    </td>
                                                    <td style={{textAlign: "end"}}>
                                                        <a
                                                            style={{padding: "5px"}}
                                                            className="ih-button"
                                                            href={c.wUrl}
                                                            target="_blank"
                                                            title="새창팝업"
                                                            rel="noreferrer">
                                                            기사<br/>보기
                                                        </a>
                                                    </td>
                                                </tr>
                                                </tbody>

                                            </table>
                                        </Col>
                                    )): ""}
                                </Row>
                            </Container>
                        </div>
                        : ""}



                    {item.celebration ?
                        <div className="">
                            <CardBody className="color-of-life__header pt-0 pb-0 " >
                                <div className="d-flex " style={{backgroundColor: "powderblue"}}>
                                    <img src={icon4} alt="/"/>

                                    <CardBody className="pt-0 pb-0">
                                        <CardTitle style={{fontSize: "24px"}}>
                                            2020년 9월~11월 학술상 수상
                                        </CardTitle>
                                    </CardBody>

                                </div>
                            </CardBody>

                            <div className="ih-celebration-wrapper">
                                <Row className="mb-5 ">
                                    <Col lg={12}>
                                        <table className="ih-celebration">

                                            <div
                                                className="ih-celebration__title"

                                            >
                                                <Row>
                                                    <Col xs={2} sm={2} md={2} lg={2}>
                                                        수상자
                                                    </Col>
                                                    <Col xs={2} sm={2} md={2} lg={2}>
                                                        수상명
                                                    </Col>
                                                    <Col xs={2} sm={2} md={2} lg={2}>
                                                        학술대회명
                                                    </Col>
                                                    <Col xs={2} sm={2} md={2} lg={2}>
                                                        수상년월
                                                    </Col>
                                                    <Col xs={4} sm={4} md={4} lg={4}>
                                                        수상내용
                                                    </Col>
                                                </Row>
                                            </div>


                                            {item.celebration ? item.celebration.map((c) => (
                                            <div className="ih-celebration__body">
                                                <Row className="align-items-center">
                                                    <Col xs={2} sm={2} md={2} lg={2}>
                                                        {c.winner}
                                                    </Col>
                                                    <Col xs={2} sm={2} md={2} lg={2}>
                                                        {c.cName}
                                                    </Col>
                                                    <Col xs={2} sm={2} md={2} lg={2}>
                                                        {c.conference}
                                                    </Col>
                                                    <Col xs={2} sm={2} md={2} lg={2}>
                                                        {c.cDate}
                                                    </Col>
                                                    <Col xs={4} sm={4} md={4} lg={4}>
                                                        {c.content}
                                                    </Col>
                                                </Row>
                                            </div>
                                            )) : ""
                                            }
                                        </table>
                                    </Col>

                                </Row>
                            </div>
                        </div>
                        : ""}

                    <Col lg={12} className="mb-5">
                        <Row className="ih-celebration-wrapper">
                            <Col lg={6}>
                                <div className="">
                                    {item.merry ?
                                        <div>
                                            <CardBody className="color-of-life__header pt-0 pb-0 pl-0" >
                                                <div className="d-flex" style={{backgroundColor: "powderblue"}}>
                                                    <img src={icon6} alt="/"/>

                                                    <CardBody className="pt-0 pb-0">
                                                        <CardTitle style={{fontSize: "24px"}}>
                                                            결혼
                                                        </CardTitle>
                                                    </CardBody>
                                                </div>
                                            </CardBody>

                                            <table className="ih-article">
                                                {/*<tbody>*/}

                                                {item.merry ? item.merry.map((m) => (

                                                        <tbody style={{borderBottom: "1px solid"}}>
                                                        <tr>
                                                            <td style={{width: "20%"}}>
                                                                {m.mDate}
                                                            </td>
                                                            <td>
                                                                {m.mName}
                                                            </td>
                                                            <td style={{width: "60%", textAlign: "end"}}>
                                                                {m.mDm}
                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                    ))
                                                    : ""}

                                            </table>
                                        </div>
                                        : "" }


                                </div>
                            </Col>


                            <Col lg={6}>
                                <div className="">
                                    {item.childbirth ?

                                        <div>
                                            <CardBody className="color-of-life__header pt-0 pb-0 pl-0" >
                                                <div className="d-flex" style={{backgroundColor: "powderblue"}}>
                                                    <img src={icon5} alt="/"/>

                                                    <CardBody className="pt-0 pb-0">
                                                        <CardTitle style={{fontSize: "24px"}}>
                                                            출산
                                                        </CardTitle>
                                                    </CardBody>

                                                </div>
                                            </CardBody>

                                            <table className="ih-article">
                                                {/*<tbody>*/}

                                                {item.childbirth ? item.childbirth.map((b) => (
                                                        <tbody style={{borderBottom: "1px solid"}}>
                                                        <tr>
                                                            <td style={{width: "20%"}}>
                                                                {b.bDate}
                                                            </td>
                                                            <td>
                                                                {b.bName}
                                                            </td>
                                                            <td style={{width: "60%", textAlign: "end"}}>
                                                                {b.bDm}
                                                            </td>

                                                        </tr>
                                                        </tbody>
                                                    ))
                                                    : ""}
                                            </table>
                                        </div>
                                        : "" }

                                </div>
                            </Col>
                        </Row>

                    </Col>

                    <Col lg={12} className="mb-5">
                        <Row className='ih-celebration-wrapper'>
                            <Col lg={6}>
                                <div className="">
                                    {item.outstanding ?

                                        <div>
                                            <CardBody className="color-of-life__header pt-0 pb-0 pl-0" >
                                                <div className="d-flex" style={{backgroundColor: "powderblue"}}>

                                                    <img src={icon3} alt="/"/>

                                                    <CardBody className="pt-0 pb-0">
                                                        <CardTitle style={{fontSize: "24px"}}>
                                                            2020년 일산병원 우수 홍보인
                                                        </CardTitle>
                                                    </CardBody>

                                                </div>
                                            </CardBody>

                                            <table className="ih-article">
                                                {item.outstanding ? item.outstanding.map((o) => (
                                                        <tbody style={{borderBottom: "1px solid"}}>
                                                        <tr>
                                                            <td style={{width: "30%"}}>
                                                                {o.oAward}
                                                            </td>
                                                            <td className="text-center">
                                                                {o.oDm}
                                                            </td>
                                                            <td style={{width: "40%", textAlign: "end"}}>
                                                                {o.oName}
                                                            </td>

                                                        </tr>
                                                        </tbody>
                                                    ))
                                                    : ""}
                                            </table>
                                        </div>

                                        : ""}

                                </div>
                            </Col>

                            <Col>
                                <div className="">
                                    {item.kind ?
                                        <div>
                                            <CardBody className="color-of-life__header pt-0 pb-0 pl-0">
                                                <div className="d-flex "  style={{backgroundColor: "powderblue"}}>
                                                    <img src={icon3} alt="/"/>

                                                    <CardBody className="pt-0 pb-0">
                                                        <CardTitle style={{fontSize: "24px"}}>
                                                            하반기 친절직원
                                                        </CardTitle>
                                                    </CardBody>

                                                </div>
                                            </CardBody>

                                            <table className="ih-article">
                                                {item.kind ? item.kind.map((k) => (
                                                        <tbody style={{borderBottom: "1px solid"}}>
                                                        <tr>
                                                            <td style={{width: "50%"}}>
                                                                {k.kName}
                                                            </td>
                                                            <td style={{width: "50%", textAlign: "end"}}>
                                                                {k.kDm}
                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                    ))
                                                    : ""}
                                            </table>
                                        </div>
                                        : ""}

                                </div>
                            </Col>
                        </Row>

                    </Col>
                </div>
            : ""}
        </Fragment>
    );
};

export default IhToday;
