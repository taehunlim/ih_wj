import React, {Fragment} from 'react';

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Cover from "../components/home/Cover";
import HomeColorOfLife from "../components/home/HomeColorOfLife"
import HomeIhOfLife from "../components/home/HomeIhOfLife";
import HomeIhNews from "../components/home/HomeIhNews";
import Service from "../components/home/Service";

const Home = () => {
    return (
        <Fragment>
            <div style={{backgroundColor: "#ededed"}}>

                <Header/>

                <Cover/>

                <HomeColorOfLife/>

                <HomeIhOfLife/>

                <HomeIhNews/>

                <Service/>

                <Footer/>

            </div>
        </Fragment>
    );
};

export default Home;
