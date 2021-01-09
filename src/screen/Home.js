import React, {Fragment} from 'react';

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const Home = () => {
    return (
        <Fragment>
            <div style={{backgroundColor: "#ededed"}}>

                <Header/>
                <Footer/>

            </div>
        </Fragment>
    );
};

export default Home;
