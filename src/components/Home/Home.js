import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import homeLogo from '../../Assets/home-main.svg';
import Particle from '../Particle';
import Home2 from './Home2';
import Type from './Type';
import useLanguageContext from '../../Context/Language/LanguageContext';
import { motion } from 'framer-motion';

function Home() {
  const language = useLanguageContext();

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  };

  const fadeZoom = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <motion.h1
                className="heading"
                style={{ paddingBottom: 15 }}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
              >
                {language.isEnglish ? (
                  <>
                    Hi There!{' '}
                    <span className="wave" role="img" aria-labelledby="wave">
                      👋🏻
                    </span>
                  </>
                ) : (
                  <>
                    Olá pessoal!{' '}
                    <span className="wave" role="img" aria-labelledby="wave">
                      👋🏻
                    </span>
                  </>
                )}
              </motion.h1>

              <motion.h1
                className="heading-name"
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.2 }}
              >
                {language.isEnglish ? (
                  <>
                    I'M<strong className="main-name"> IAGO MARTINS </strong>
                  </>
                ) : (
                  <>
                    Sou o<strong className="main-name"> IAGO MARTINS </strong>
                  </>
                )}
              </motion.h1>

              <motion.div
                style={{ padding: 50, textAlign: 'left' }}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.4 }}
              >
                <Type />
              </motion.div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <motion.img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{
                  maxHeight: '450px',
                  filter: 'drop-shadow(0 0 20px rgba(199, 112, 240, 0.5))',
                }}
                variants={fadeZoom}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.6 }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
