import React, {Fragment} from 'react';

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Cover from "../components/home/Cover";




import Section1 from "../components/home/Section1";
import Section2 from "../components/home/Section2";
import Section3 from "../components/home/Section3";

import Service from "../components/home/Service";

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

                <Footer/>

            </div>
        </Fragment>
    );
};

export default Home;
