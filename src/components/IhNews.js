import React, {Fragment} from 'react';

import {
    CardBody,
    CardText,
    CardImg,
    CardSubtitle,
    Row,
    Col
} from 'reactstrap';

const IhNews = ({item}) => {
    return (
        <Fragment>

            {/*{item.airing ?*/}
                <div style={{textAlign: "-webkit-center"}}>
                    {/*<CardBody className="color-of-life__header pt-0 pb-0" style={{backgroundColor: "powderblue"}}>*/}
                    {/*    <div className="d-flex align-items-center">*/}
                    {/*        <img src={icon1} alt="/"/>*/}

                    {/*        <CardBody className="pt-0 pb-0">*/}
                    {/*            <CardTitle style={{fontSize: "24px"}}>*/}
                    {/*                방송*/}
                    {/*            </CardTitle>*/}
                    {/*        </CardBody>*/}

                    {/*    </div>*/}
                    {/*</CardBody>*/}

                    <Row className="mb-5 justify-content-center" style={{width: "90%"}}>
                        {item.news ? item.news.map((c) => (
                            <Col md={4} lg={4} className="">
                                <CardBody className="color-of-life__body">
                                    <div style={{textAlign: "center"}}>
                                        {c.src ?
                                            <CardImg className="img-fluid mb-5" src={c.src} alt="/"/> : ""
                                        }

                                    </div>
                                    <CardSubtitle className="color-of-life__body__subtitle mb-3 text-center">
                                        {c.ctitle}
                                    </CardSubtitle>
                                    <CardText className="color-of-life__body__text mb-5">
                                        <Row className="pl-3 pr-3" style={{textAlign: "left"}}>
                                            {c.ctext}
                                        </Row>

                                    </CardText>


                                </CardBody>
                            </Col>
                        )): ""}
                    </Row>
                </div>

                {/*: ""}*/}
        </Fragment>
    );
};

export default IhNews;
