import React, {Fragment} from 'react';

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Cover from "../components/home/Cover";

// import HomeIhOfLife from "../components/home/HomeIhOfLife";
// import HomeIhNews from "../components/home/HomeIhNews";

import Section1 from "../components/home/Section1";
// import Section2 from "../components/home/Section2";
// import Section3 from "../components/home/Section3";

const Home = () => {
    return (
        <Fragment>
            <div style={{backgroundColor: "#ededed"}}>

                <Header/>

                <Cover/>

                <Section1/>

                {/*<Section2/>*/}

                {/*<Section3/>*/}

                {/*<HomeIhOfLife/>*/}

                {/*<HomeIhNews/>*/}


                <Footer/>

            </div>
        </Fragment>
    );
};

export default Home;
