// import React, {Fragment, useState} from 'react';
// import {pdfjs, Document, Page} from 'react-pdf'
// import HeaderP from "../components/header/HeaderP";
// import Footer from "../components/footer/Footer";
// import Cover from "../components/home/Cover";
// import {Tooltip} from 'react-tippy'
// import {
//     LightgalleryProvider,
//     LightgalleryItem,
//     withLightgallery,
//     useLightgallery
// } from "react-lightgallery";
//
//
// import {Modal} from 'react-bootstrap';
//
//
// import pdf from '../assets/pdf/ih.pdf'
// import logo from '../assets/images/logo.jpg'
//
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
//
//
//
// const SectionThree = () => {
//
//     const [modal, setModal] = useState(false)
//     const [numPages, setNumPages] = useState(null);
//     const [pageNumber, setPageNumber] = useState(1);
//
//     function onDocumentLoadSuccess({ numPages }) {
//         setNumPages(numPages);
//     }
//
//     return (
//         <Fragment>
//
//             <HeaderP/>
//
//             <Cover/>
//
//             <div>
//                 {/*<Document*/}
//                 {/*    file={pdf}*/}
//                 {/*    onLoadSuccess={onDocumentLoadSuccess}*/}
//                 {/*>*/}
//                 {/*    <Page pageNumber={pageNumber} />*/}
//                 {/*</Document>*/}
//
//                 {/*<div>*/}
//                 {/*    <button onClick={() => setPageNumber(prevPageNumber => prevPageNumber - 1)}>*/}
//                 {/*        -*/}
//                 {/*    </button>*/}
//                 {/*</div>*/}
//
//                 {/*<div>*/}
//                 {/*    <button onClick={() => setPageNumber(prevPageNumber => prevPageNumber + 1)}>*/}
//                 {/*        +*/}
//                 {/*    </button>*/}
//                 {/*</div>*/}
//
//
//                 <button onClick={() => setModal(true)}>
//                     sdsd
//                 </button>
//
//                     <Modal
//                         show={modal}
//                     >
//                         <Modal.Header
//                             closeButton
//                             onHide={() => setModal(false)}
//                         >
//
//                         </Modal.Header>
//                         <LightgalleryProvider>
//                             <LightgalleryItem group="any">
//                                 <embed src={pdf} width="800px" height="2100px" />
//                             </LightgalleryItem>
//                         </LightgalleryProvider>
//                     </Modal>
//
//
//
//
//
//             </div>
//         </Fragment>
//     );
// };
//
// export default SectionThree;
