import React, {useState} from 'react'
import {
  IoIosPhonePortrait,
  // IoMdMail,

} from "react-icons/io";
import {FaBloggerB, FaFacebookF, FaFilePdf, FaTwitter} from "react-icons/fa/index";
import {GoMailRead} from "react-icons/go/index";
import {Modal} from "react-bootstrap";
import {LightgalleryItem, LightgalleryProvider} from "react-lightgallery";
import pdf from "../../../assets/pdf/ih.pdf";

const MobileMenuWidgets = () => {

  const [modal, setModal] = useState(false)

  return (
    <div className="offcanvas-mobile-menu__widgets">
      <div className="contact-widget space-mb--30">
        <ul>
          <li>
            <IoIosPhonePortrait />
            <a href="tel:031-900-0114" title="전화걸기">(031) 900-0114</a>,
            <a href="tel:031-900-3114" title="전화걸기">3114</a>
          </li>
          {/*<li>*/}
          {/*  <IoMdMail />*/}
          {/*  <a href="mailto:info@yourdomain.com">info@yourdomain.com</a>*/}
          {/*</li>*/}
        </ul>
      </div>

      <div className="social-widget">
        <a href="https://blog.naver.com/hello_health" target="_blank" rel="noreferrer">
          <FaBloggerB/>
        </a>
        <a href="https://www.facebook.com/nhimc.hello.health" target="_blank" rel="noreferrer">
          <FaFacebookF/>
        </a>
        <a href="https://twitter.com/Hello_Health" target="_blank" rel="noreferrer">
          <FaTwitter/>
        </a>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLScsK3i7h-PjxH9vbklEFnTtWbInzWX05VovCjXDHFA0Xv7-Fw/viewform?vc=0&c=0&w=1&flr=0" target="_blank" rel="noreferrer">
          <GoMailRead/>
        </a>

        <button
            style={{border: "none", background: "none"}}
            className="social-widget__button"
            onClick={() => setModal(true)}>
          <FaFilePdf/>
        </button>

        <Modal
            show={modal}
        >
          <Modal.Header
              closeButton
              style={{width: "350px", backgroundColor: "powderblue"}}
              onHide={() => setModal(false)}
          >

          </Modal.Header>
          <LightgalleryProvider>
            <LightgalleryItem group="any">
              <embed src={pdf} width="350px" height="800px" />
            </LightgalleryItem>
          </LightgalleryProvider>
        </Modal>

      </div>
    </div>
  );
};

export default MobileMenuWidgets;
