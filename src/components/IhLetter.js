import React, {Fragment} from 'react';
import {
    CardBody,
    CardImg,
    CardTitle,
    CardSubtitle,
    Row,
    Col
} from 'reactstrap';


import quiz from '../assets/images/section3/letter/quiz.png'
import donate from '../assets/images/section3/letter/donate.png'
import cloth from '../assets/images/section3/letter/cloth.png'

const IhLetter = ({item}) => {


    return (
        <Fragment>
            {item.id === "7" ?

                <div style={{backgroundColor: "powderblue", marginTop: "-14px"}}>
                    <div className="mb-5">
                        <Row>
                            <Col lg={6}>
                                <CardBody className="color-of-life__header pt-0 pb-0" style={{backgroundColor: "powderblue"}}>
                                    <CardImg top className="img-fluid mb-3" src={quiz} alt="/" />
                                </CardBody>
                            </Col>
                            <Col lg={6}>
                                <CardBody className="color-of-life__header pt-0 pb-0" style={{backgroundColor: "powderblue"}}>
                                    <CardImg top className="img-fluid mb-3" src={donate} alt="/" />
                                </CardBody>
                            </Col>
                        </Row>
                    </div>


                    <div style={{textAlign: "-webkit-center"}}>

                        <CardTitle className="color-of-life__body__title mb-4">
                            {item.titleL}
                        </CardTitle>

                        <Row className="mb-5 justify-content-center" style={{width: "90%"}}>



                            {item.letter ? item.letter.map ((l) => (
                                    <Col md={6} lg={6} className="">
                                        <CardBody className="color-of-life__header pt-0 pb-0">
                                            <CardImg top className="img-fluid mb-3" src={l.src} alt="/" />
                                        </CardBody>
                                        <CardBody className="color-of-life__body">
                                            <CardTitle className="color-of-life__body__subtitle mb-4">
                                                {l.titleL}
                                            </CardTitle>
                                        </CardBody>
                                    </Col>
                                ))

                            : ""}

                        </Row>
                    </div>


                    <div>
                        <CardBody className="color-of-life__header pt-0 pb-0" style={{backgroundColor: "powderblue"}}>
                            <CardImg top className="img-fluid mb-3" src={cloth} alt="/" />

                            <CardBody className="color-of-life__body text-center">
                                <CardTitle className="color-of-life__body__title mb-4">
                                    {item.letterH}
                                </CardTitle>
                                <CardSubtitle className="color-of-life__body__subtitle mb-5">
                                    {item.letterB}
                                </CardSubtitle>
                            </CardBody>
                        </CardBody>
                    </div>

                </div>

            : ""}

        </Fragment>
    );
};

export default IhLetter;
