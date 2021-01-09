import React, {Fragment} from 'react';
import {Container} from 'reactstrap';

import FooterLink from "./footer-link";

const Footer = () => {
    return (
        <Fragment>
            <footer className="ih-footer">
                <Container>
                    <FooterLink/>
                </Container>
            </footer>
        </Fragment>
    );
};

export default Footer;
