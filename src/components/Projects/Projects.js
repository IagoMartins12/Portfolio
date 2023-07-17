import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import Particle from '../Particle';
import spaceX from '../../Assets/Projects/spacex.png';
import axon from '../../Assets/Projects/axon.png';
import iagoflix from '../../Assets/Projects/Iagoflix2.png';
import iagobnb from '../../Assets/Projects/iagobnb.png';
import devblog from '../../Assets/Projects/DevBlog.png';
import metaversus from '../../Assets/Projects/metaversus.png';
import useLanguageContext from '../../Context/Language/LanguageContext';

function Projects() {
  const language = useLanguageContext();

  return (
    <Container fluid className="project-section">
      <Particle />
      {language.isEnglish ? (
        <Container>
          <h1 className="project-heading">
            My Recent <strong className="purple">Works </strong>
          </h1>
          <p style={{ color: 'white' }}>
            Here are a few projects I've worked on recently.
          </p>
          <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={axon}
                isBlog={false}
                title="Axon"
                description="The axon project is a single page application developted for Axon content. The tecnologies used to this project is the classic triad HTML, CSS and JavaScript. I used slickerJs with Jquery to make the mobile carrousel to."
                ghLink="https://github.com/IagoMartins12/Axon"
                demoLink="https://iagomartins12.github.io/Axon/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={spaceX}
                isBlog={false}
                title="SpaceX"
                description="This project, developed based on the SpaceX website, is a web page built using CSS, Bootstrap, SASS and AOS. The application offers a great and modern responsive user interface."
                ghLink="https://github.com/IagoMartins12/SpaceX"
                demoLink="https://iagomartins12.github.io/SpaceX/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={metaversus}
                isBlog={false}
                title="Metaversus"
                description="Metaversus is a JavaScript-based application application based on Meta page. The application was developed using Tailwind, React, Next.js, and Framer-motion to build 3D animations."
                ghLink="https://github.com/IagoMartins12/Metaverse"
                demoLink="https://metaversus-iagomartins.vercel.app/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={iagoflix}
                isBlog={false}
                title="Iagoflix"
                description="Iagoflix is a full-stack application based on Netflix that allows users to browse and stream a variety of cinematographic works. The application was developed using Postgres, Sequelize, and Node.js for the backend, and SASS, React, Next.js, and Bootstrap for the frontend, and TypeScript for both."
                ghLink="https://github.com/IagoMartins12/iagoflix-front"
                demoLink="https://iagoflix.vercel.app/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={iagobnb}
                isBlog={false}
                title="Iagobnb"
                description="Iagobnb is a full-stack application based on Airbnb that allows users to streamline accommodation listing and booking, and searching for booking in any place on world. The application was developed using Mongodb, Prisma, Tailwind, React, Next.js, TypeScript."
                ghLink="https://github.com/IagoMartins12/Airbnb"
                demoLink="https://iagobnb.vercel.app/"
              />
            </Col>

<<<<<<< HEAD
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={devblog}
                isBlog={false}
                title="DevBlog"
                description="DevBlog is a blog application developed using NextJS, React, Tailwind, and Typescript. The application provides a modern and responsive user interface, with optimized layouts and styles for various screen sizes. The use of NextJS and React provides efficient rendering and optimized performance."
                ghLink="https://github.com/IagoMartins12/Airbnb"
              />
            </Col>
          </Row>
        </Container>
      ) : (
        <Container>
          <h1 className="project-heading">
            Meus <strong className="purple">Projetos </strong> recentes
          </h1>
          <p style={{ color: 'white' }}>
            Aqui estão alguns projetos que eu desenvolvi recentemente.
          </p>
          <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={axon}
                isBlog={false}
                title="Axon"
                description="O projeto Axon é uma aplicação de landing page desenvolvida para a Axon content. As tecnologias usadas neste projeto são a clássica tríade HTML, CSS e JavaScript. Utilizei o SlickerJs com jQuery para criar o carrossel para dispositivos móveis."
                ghLink="https://github.com/IagoMartins12/Axon"
                demoLink="https://iagomartins12.github.io/Axon/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={spaceX}
                isBlog={false}
                title="SpaceX"
                description="Este projeto foi desenvolvido com base no site da SpaceX, é uma página da web construída utilizando CSS, Bootstrap, SASS e AOS. A aplicação oferece uma interface de usuário responsiva, moderna e limpa."
                ghLink="https://github.com/IagoMartins12/SpaceX"
                demoLink="https://iagomartins12.github.io/SpaceX/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={metaversus}
                isBlog={false}
                title="Metaversus"
                description="Metaversus é uma aplicação baseada em JavaScript, inspirada na página Meta. A aplicação foi desenvolvida utilizando Tailwind, React, Next.js e Framer-motion para criar animações 3D."
                ghLink="https://github.com/IagoMartins12/Metaverse"
                demoLink="https://metaversus-iagomartins.vercel.app/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={iagoflix}
                isBlog={false}
                title="Iagoflix"
                description="Iagoflix é uma aplicação full-stack baseada na Netflix que permite aos usuários navegar e transmitir uma variedade de obras cinematrograficas. A aplicação foi desenvolvida utilizando Postgres, Sequelize e Node.js, SASS, React, Next.js e TypeScript."
                ghLink="https://github.com/IagoMartins12/iagoflix-front"
                demoLink="https://iagoflix.vercel.app/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={iagobnb}
                isBlog={false}
                title="Iagobnb"
                description="Iagobnb é uma aplicação full-stack baseada no Airbnb que permite aos usuários listar, reservar e buscar acomodações em qualquer lugar do mundo. A aplicação foi desenvolvida utilizando Mongodb, Prisma, Tailwind, React, Next.js e TypeScript."
                ghLink="https://github.com/IagoMartins12/Airbnb"
                demoLink="https://iagobnb.vercel.app/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={devblog}
                isBlog={false}
                title="DevBlog"
                description="DevBlog é uma aplicação de blog/rede social, que está sendo desenvolvida usando NextJS, Node, React, Tailwind e Typescript. A aplicação oferece uma interface de usuário moderna e responsiva, com layouts e estilos otimizados para vários tamanhos de tela."
                ghLink="https://github.com/IagoMartins12/Airbnb"
              />
            </Col>
          </Row>
        </Container>
      )}
=======
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={devgenius}
              isBlog={false}
              title="DevGenius"
              description = "DevGenius is a blog/Social network full-stack application, will allows users to comment posts, follow others users, chat to then and another others features. The application will be developed using Mongodb, Prisma, Tailwind, React, Next.js, TypeScript and NodeJs."
              ghLink="https://github.com/IagoMartins12/Iagoblog"
            />
          </Col>
        </Row>
      </Container>
>>>>>>> 32259001f399fc3f8f09b4c64ba730486521354b
    </Container>
  );
}

export default Projects;
