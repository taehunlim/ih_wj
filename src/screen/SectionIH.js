// import React, {Fragment, useState} from 'react';
// import {pdfjs, Document, Page} from 'react-pdf'
// import HeaderP from "../components/header/HeaderP";
// import Footer from "../components/footer/Footer";
// import Cover from "../components/home/Cover";
//
// import pdf from '../assets/pdf/ih.pdf'
//
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
//
//
//
// const SectionThree = () => {
//
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
//                 <Document
//                     file={pdf}
//                     onLoadSuccess={onDocumentLoadSuccess}
//                 >
//                     <Page pageNumber={pageNumber} />
//                 </Document>
//
//             </div>
//
//             <Footer/>
//
//         </Fragment>
//     );
// };
//
// export default SectionThree;
