import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Particle from '../Particle';
import pdf from '../../Assets/curriculo.pdf';
import { AiOutlineDownload } from 'react-icons/ai';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import useLanguageContext from '../../Context/Language/LanguageContext';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLinkEnglish =
  'https://raw.githubusercontent.com/IagoMartins12/Portfolio2/main/src/Assets/Portf%C3%B3lioIngles.pdf';

const resumeLink =
  'https://raw.githubusercontent.com/IagoMartins12/Portfolio2/main/src/Assets/Portf%C3%B3lioAtt.pdf';

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  const language = useLanguageContext();

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: 'center', position: 'relative' }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: '250px' }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          <Document
            file={language.isEnglish ? resumeLinkEnglish : resumeLink}
            className="d-flex justify-content-center"
          >
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        <Row style={{ justifyContent: 'center', position: 'relative' }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: '250px' }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
