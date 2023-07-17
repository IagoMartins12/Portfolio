import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import myImg from '../../Assets/avatar.svg';
import Tilt from 'react-parallax-tilt';
import { AiFillGithub, AiFillInstagram } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import useLanguageContext from '../../Context/Language/LanguageContext';

function Home2() {
  const language = useLanguageContext();

  return (
    <Container fluid className="home-about-section" id="about">
      {language.isEnglish ? (
        <Container>
          <Row>
            <Col md={8} className="home-about-description">
              <h1 style={{ fontSize: '2.6em' }}>
                LET ME <span className="purple"> INTRODUCE </span> MYSELF
              </h1>
              <p className="home-about-body">
                I am a Software enginner with abilit to learn and collaborate in
                rapidly changing environments and compositions.
                <br />
                <br />I am fluent in
                <i>
                  <b className="purple"> MERN stack </b> and also have some
                  experience in{' '}
                  <i>
                    <b className="purple"> C# and PHP </b>
                  </i>
                </i>
                <br />
                <br />
                My field of Interest's are building new &nbsp;
                <i>
                  <b className="purple">Web Technologies and Products </b> and
                  also in areas related to{' '}
                  <b className="purple">Robust Systems</b>
                </i>
                <br />
                <br />
                Whenever possible, I apply my passion for developing products
                with <b className="purple">Node.js</b> and
                <i>
                  <b className="purple">
                    {' '}
                    Modern Javascript Library and Frameworks
                  </b>
                </i>
                &nbsp; like
                <i>
                  <b className="purple"> React.js and Next.js</b>
                </i>
              </p>
            </Col>
            <Col md={4} className="myAvtar">
              <Tilt>
                <img src={myImg} className="img-fluid" alt="avatar" />
              </Tilt>
            </Col>
          </Row>
          <Row>
            <Col md={12} className="home-about-social">
              <h1>FIND ME ON</h1>
              <p>
                Feel free to <span className="purple">connect </span>with me
              </p>
              <ul className="home-about-social-links">
                <li className="social-icons">
                  <a
                    href="https://github.com/IagoMartins12"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <AiFillGithub />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/iago-martins-313838213/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.instagram.com/iago_martins1"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                  >
                    <AiFillInstagram />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      ) : (
        <Container>
          <Row>
            <Col md={8} className="home-about-description">
              <h1 style={{ fontSize: '2.6em' }}>
                DEIXE-ME <span className="purple"> ME APRESENTAR </span>
              </h1>
              <p className="home-about-body">
                Sou um engenheiro de software com facilidade em aprender e
                colaborar em ambientes e composições em constante mudança.
                <br />
                <br />
                Sou fluente em
                <i>
                  <b className="purple"> MERN stack </b> e também tenho
                  experiência em{' '}
                  <i>
                    <b className="purple"> C# e PHP </b>
                  </i>
                </i>
                <br />
                <br />
                Meus campos de interesses são &nbsp;
                <i>
                  <b className="purple"> Tecnologias e Produtos Web </b> e
                  também em áreas relacionadas a{' '}
                  <b className="purple">Sistemas Robustos</b>
                </i>
                <br />
                <br />
                Sempre que possível, aplico minha paixão por desenvolver
                produtos com <b className="purple">Node.js</b> e{' '}
                <i>
                  <b className="purple">
                    Bibliotecas e Frameworks JavaScript Modernos
                  </b>
                </i>
                &nbsp;como
                <i>
                  <b className="purple">Nest.js e Next.js </b>
                </i>
              </p>
            </Col>
            <Col md={4} className="myAvtar">
              <Tilt>
                <img src={myImg} className="img-fluid" alt="avatar" />
              </Tilt>
            </Col>
          </Row>
          <Row>
            <Col md={12} className="home-about-social">
              <h1>ENCONTRE-ME NAS REDES SOCIAIS</h1>
              <p>
                Sinta-se à vontade para{' '}
                <span className="purple">conectar-se</span> comigo
              </p>
              <ul className="home-about-social-links">
                <li className="social-icons">
                  <a
                    href="https://github.com/IagoMartins12"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <AiFillGithub />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/iago-martins-313838213/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.instagram.com/iago_martins1"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                  >
                    <AiFillInstagram />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      )}
    </Container>
  );
}
export default Home2;
