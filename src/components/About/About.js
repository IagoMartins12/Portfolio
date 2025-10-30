import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Particle from '../Particle';
import Timeline from './Timeline'; // novo componente atualizado
import Techstack from './Techstack';
import Toolstack from './Toolstack';
import laptopImg from '../../Assets/about.png';
import useLanguageContext from '../../Context/Language/LanguageContext';
import { motion } from 'framer-motion';

function About() {
  const language = useLanguageContext();

  const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  };

  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: 'center', padding: '10px' }}>
          <Col
            md={7}
            style={{
              justifyContent: 'center',
              paddingTop: '30px',
              paddingBottom: '50px',
            }}
          >
            <motion.h1
              style={{
                fontSize: '2.1em',
                paddingBottom: '20px',
                color: 'white',
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              {language.isEnglish ? (
                <>
                  Know Who <strong className="purple">I Am</strong>
                </>
              ) : (
                <>
                  Me <strong className="purple">Conheça</strong>
                </>
              )}
            </motion.h1>

            <motion.p
              className="about-description"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              style={{
                fontSize: '1.05em',
                color: '#dcdcdc',
                lineHeight: '1.6em',
                textAlign: 'justify',
              }}
            >
              {language.isEnglish ? (
                <>
                  I'm a passionate{' '}
                  <strong className="purple">Full-Stack Developer</strong>{' '}
                  focused on creating scalable, high-performance digital
                  products. I currently work at{' '}
                  <strong className="purple">PMovil</strong> and lead{' '}
                  <strong className="purple">Opus Atlas</strong> — an
                  educational platform that merges classical music, AI, and
                  interactive learning. I specialize in <strong>React</strong>,{' '}
                  <strong>Next.js</strong>, and <strong>Node.js</strong>, with
                  solid experience in
                  <strong> DevOps</strong>, <strong>Docker</strong>,{' '}
                  <strong>MongoDB</strong>, and <strong>PostgreSQL</strong>. My
                  goal is to combine <strong>technology</strong>,{' '}
                  <strong>design</strong>, and <strong>real impact</strong> in
                  every project.
                </>
              ) : (
                <>
                  Sou um{' '}
                  <strong className="purple">Desenvolvedor Full-Stack</strong>{' '}
                  apaixonado por criar produtos digitais escaláveis e de alto
                  desempenho. Atualmente trabalho na{' '}
                  <strong className="purple">PMovil</strong> e sou fundador da{' '}
                  <strong className="purple">Opus Atlas</strong> — uma
                  plataforma educacional que une música clássica, IA e
                  aprendizado interativo. Tenho especialização em{' '}
                  <strong>React</strong>, <strong>Next.js</strong> e{' '}
                  <strong>Node.js</strong>, além de experiência sólida em{' '}
                  <strong>DevOps</strong>, <strong>Docker</strong>,{' '}
                  <strong>MongoDB</strong> e <strong>PostgreSQL</strong>. Meu
                  objetivo é unir <strong>tecnologia</strong>,{' '}
                  <strong>design</strong> e <strong>impacto real</strong> em
                  cada projeto.
                </>
              )}
            </motion.p>
          </Col>

          <Col
            md={5}
            style={{ paddingTop: '100px', paddingBottom: '50px' }}
            className="about-img"
          >
            <motion.img
              src={laptopImg}
              alt="about"
              className="img-fluid"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            />
          </Col>
        </Row>
      </Container>

      {/* Timeline Section */}
      <Timeline />

      {/* Tech Stack */}
      <Container>
        <h1 className="project-heading">
          {language.isEnglish ? (
            <>
              Professional <strong className="purple">Skillset</strong>
            </>
          ) : (
            <>
              Habilidades <strong className="purple">Profissionais</strong>
            </>
          )}
        </h1>
        <Techstack />

        {/* Tool Stack */}
        <h1 className="project-heading" style={{ marginTop: '40px' }}>
          {language.isEnglish ? (
            <>
              <strong className="purple">Tools</strong> I use
            </>
          ) : (
            <>
              <strong className="purple">Ferramentas</strong> que utilizo
            </>
          )}
        </h1>
        <Toolstack />
      </Container>
    </Container>
  );
}

export default About;
