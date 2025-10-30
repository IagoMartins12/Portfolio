import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import myImg from '../../Assets/avatar.svg';
import Tilt from 'react-parallax-tilt';
import { AiFillGithub, AiFillInstagram } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import { motion } from 'framer-motion';
import useLanguageContext from '../../Context/Language/LanguageContext';

function Home2() {
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
      transition: { duration: 0.9, ease: 'easeOut' },
    },
  };

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <motion.h1
              style={{ fontSize: '2.6em' }}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {language.isEnglish ? (
                <>
                  LET ME <span className="purple"> INTRODUCE </span> MYSELF
                </>
              ) : (
                <>
                  DEIXE-ME <span className="purple"> APRESENTAR-ME </span>
                </>
              )}
            </motion.h1>

            <motion.p
              className="home-about-body"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              {language.isEnglish ? (
                <>
                  I’m a <b className="purple">Full-Stack Developer</b> based in
                  São Paulo, passionate about creating <b>scalable</b> and{' '}
                  <b>high-performance web applications</b> that blend clean
                  architecture with exceptional user experience.
                  <br />
                  <br />
                  Skilled in <b>React</b>, <b>Next.js</b>, and <b>Node.js</b>,
                  with strong focus on efficient systems, API integrations, and{' '}
                  <b>Docker</b> automation under <b>DevOps</b> principles.
                  <br />
                  <br />
                  Currently at <b>PMovil LTDA</b> and founder of{' '}
                  <b>Opus Atlas</b>, an educational ecosystem combining{' '}
                  <b>AI, music, and interactive learning</b>.
                  <br />
                  <br />I believe technology should scale beautifully and make a
                  real impact — code can be elegant and powerful at once.
                </>
              ) : (
                <>
                  Sou um <b className="purple">Desenvolvedor Full-Stack</b> de
                  São Paulo, apaixonado por criar{' '}
                  <b>aplicações web escaláveis</b> e <b>de alto desempenho</b>,
                  unindo arquitetura limpa e uma experiência de usuário
                  excepcional.
                  <br />
                  <br />
                  Tenho experiência sólida com <b>React</b>, <b>Next.js</b> e{' '}
                  <b>Node.js</b>, atuando no design de sistemas eficientes,
                  integração de APIs e automação de deploys com <b>Docker</b> e
                  práticas de <b>DevOps</b>.
                  <br />
                  <br />
                  Atualmente trabalho na <b>PMovil LTDA</b> e sou fundador do{' '}
                  <b>Opus Atlas</b> — um ecossistema educacional que une{' '}
                  <b>IA, música e aprendizado interativo</b>.
                  <br />
                  <br />
                  Acredito que um bom código deve ser tão elegante quanto
                  eficiente — tecnologia com propósito real.
                </>
              )}
            </motion.p>
          </Col>

          <Col md={4} className="myAvtar">
            <motion.div
              variants={fadeZoom}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Tilt>
                <img
                  src={myImg}
                  className="img-fluid"
                  alt="Iago Martins Avatar"
                  loading="lazy"
                  style={{
                    filter: 'drop-shadow(0 0 25px rgba(199, 112, 240, 0.5))',
                  }}
                />
              </Tilt>
            </motion.div>
          </Col>
        </Row>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Row>
            <Col md={12} className="home-about-social">
              <h1>
                {language.isEnglish ? 'FIND ME ONLINE' : 'ENCONTRE-ME ONLINE'}
              </h1>
              <p>
                {language.isEnglish ? (
                  <>
                    Feel free to <span className="purple">connect</span> with me
                  </>
                ) : (
                  <>
                    Sinta-se à vontade para{' '}
                    <span className="purple">conectar-se</span> comigo
                  </>
                )}
              </p>
              <ul className="home-about-social-links">
                {[
                  {
                    href: 'https://github.com/IagoMartins12',
                    icon: <AiFillGithub />,
                  },
                  {
                    href: 'https://www.linkedin.com/in/iago-martins01/',
                    icon: <FaLinkedinIn />,
                  },
                  {
                    href: 'https://www.instagram.com/iago_martins1',
                    icon: <AiFillInstagram />,
                  },
                ].map((link, i) => (
                  <motion.li
                    key={i}
                    className="social-icons"
                    whileHover={{ scale: 1.2, rotate: 3 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                    >
                      {link.icon}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </Container>
  );
}

export default Home2;
