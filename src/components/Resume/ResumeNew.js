import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Particle from '../Particle';
import portfolioPTBR from '../../Assets/curriculo.pdf';
import portfolioEN from '../../Assets/resume.pdf';
import { AiOutlineDownload } from 'react-icons/ai';
import { Document, Page, pdfjs } from 'react-pdf';
import { motion } from 'framer-motion';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import useLanguageContext from '../../Context/Language/LanguageContext';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLinkEnglish =
  'https://raw.githubusercontent.com/IagoMartins12/Portfolio2/main/src/Assets/resume.pdf';
const resumeLink =
  'https://raw.githubusercontent.com/IagoMartins12/Portfolio2/main/src/Assets/curriculo.pdf';

function ResumeNew() {
  const [width, setWidth] = useState(window.innerWidth);
  const language = useLanguageContext();

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  // 🔍 Escala adaptável: PDF maior em telas grandes
  const getScale = () => {
    if (width > 1600) return 1.8; // telas ultrawide
    if (width > 1200) return 1.6; // desktops grandes
    if (width > 992) return 1.5; // notebooks
    if (width > 768) return 1.2; // tablets
    return 0.7; // celulares
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.4 } }}
      transition={{ duration: 0.6 }}
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        background: 'radial-gradient(circle at top, #1b0f25 0%, #0d0712 100%)',
      }}
    >
      <Container fluid className="resume-section">
        <Particle />

        {/* Botão superior */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '40px',
            marginBottom: '20px',
            position: 'relative',
            zIndex: 5, // 👈 força o botão acima das partículas
          }}
        >
          <Button
            variant="primary"
            href={language.isEnglish ? portfolioEN : portfolioPTBR}
            target="_blank"
            rel="noreferrer"
            style={{
              maxWidth: '250px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontWeight: 500,
              zIndex: 10, // 👈 reforça camada acima
              position: 'relative',
            }}
          >
            <AiOutlineDownload size={20} />
            {language.isEnglish ? 'Download CV' : 'Baixar Currículo'}
          </Button>
        </motion.div>

        {/* Documento PDF */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
          className="resume d-flex justify-content-center align-items-center"
          style={{
            flexGrow: 1,
            minHeight: '75vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '40px 0',
          }}
        >
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(199,112,240,0.15)',
              borderRadius: '12px',
              padding: '20px',
              boxShadow: '0 10px 25px rgba(199,112,240,0.15)',
              overflow: 'hidden',
            }}
          >
            <Document
              file={language.isEnglish ? resumeLinkEnglish : resumeLink}
              className="d-flex justify-content-center"
              loading={
                <div
                  style={{
                    color: '#c770f0',
                    textAlign: 'center',
                    fontWeight: 500,
                  }}
                >
                  {language.isEnglish
                    ? 'Loading CV...'
                    : 'Carregando currículo...'}
                </div>
              }
            >
              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
                style={{ display: 'flex', justifyContent: 'center' }}
              >
                <Page
                  pageNumber={1}
                  scale={getScale()}
                  renderTextLayer={true}
                  renderAnnotationLayer={true}
                />
              </motion.div>
            </Document>
          </div>
        </motion.div>

        {/* Botão inferior */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '40px',
            marginTop: '10px',
          }}
        >
          <Button
            variant="primary"
            href={language.isEnglish ? portfolioEN : portfolioPTBR}
            target="_blank"
            rel="noreferrer"
            style={{
              maxWidth: '250px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontWeight: 500,
            }}
          >
            <AiOutlineDownload size={20} />
            {language.isEnglish ? 'Download CV' : 'Baixar Currículo'}
          </Button>
        </motion.div>
      </Container>
    </motion.div>
  );
}

export default ResumeNew;
