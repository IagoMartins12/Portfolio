import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import Particle from '../Particle';
import spaceX from '../../Assets/Projects/spacex.png';
import iagoflix from '../../Assets/Projects/Iagoflix2.png';
import iagobnb from '../../Assets/Projects/iagobnb.png';
import devGenius from '../../Assets/Projects/devgenius.png';
import metaversus from '../../Assets/Projects/metaversus.png';
import useLanguageContext from '../../Context/Language/LanguageContext';
import hoobank from '../../Assets/Projects/hoobanks.png';

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
                imgPath={hoobank}
                isBlog={false}
                title="HooBank"
                description="Hoobank is a landing page project created using Next.js, React, and Tailwind CSS. It features a sleek design and responsive layout, combining the power of Next.js for serverless rendering, React for dynamic components, and Tailwind CSS for efficient styling."
                ghLink="https://github.com/IagoMartins12/LandingPage"
                demoLink="https://iago-martins-hoobank.vercel.app/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={metaversus}
                isBlog={false}
                title="Metaversus"
                description="Metaversus is an JavaScript-based application centered around the concept of Meta page. This dynamic application was developed using Tailwind, React, Next.js, and Framer-motion to build 3D animations."
                ghLink="https://github.com/IagoMartins12/Metaverse"
                demoLink="https://metaversus-iagomartins.vercel.app/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={iagoflix}
                isBlog={false}
                title="Iagoflix"
                description="Iagoflix is a full-stack application based on Netflix that allows users to browse and stream a variety of cinematographic works. The application was developed using Postgres, Sequelize, and Node.js for the backend, and SASS, React, Next.js, and Bootstrap for the frontend, and TypeScript."
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

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={devGenius}
                isBlog={false}
                title="DevGenius"
                description="DevGenius is a blog and social network application that allows users to comment on articles, favorite/like posts, follow other users, and features a modern layout seamlessly integrated with a dark theme. The application was developed using React, Next.js, Node.js, TypeScript, MongoDB, and Prisma."
                ghLink="https://github.com/IagoMartins12/DevGenius"
                demoLink="https://devgenius-blog.vercel.app/"
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
                imgPath={hoobank}
                isBlog={false}
                title="HooBank"
                description="Hoobank é uma landing page criado usando Next.js, React e Tailwind CSS. Possui um design elegante e um layout responsivo, combinando o poder do Next.js para renderização no lado do servidor, React para componentes dinâmicos e Tailwind CSS para estilização eficiente."
                ghLink="https://github.com/IagoMartins12/Axon"
                demoLink="https://iago-martins-hoobank.vercel.app/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={metaversus}
                isBlog={false}
                title="Metaversus"
                description="Metaversus é uma aplicação criada em JavaScript, inspirada no conceito da página Meta. A aplicação foi desenvolvida utilizando Tailwind, React, Next.js e Framer-motion para criar animações 3D."
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
                imgPath={devGenius}
                isBlog={false}
                title="DevGenius"
                description="DevGenius é uma aplicação de blog e rede social, que permite aos usuarios comentar nos artigos, favoritar/curtir o post, seguir outros usuarios, e possui um layout moderno, integrado com o dark theme. A aplicação foi desenvolvida utilizando React, NextJs, Node, TypeScript, Mongodb e Prisma."
                ghLink="https://github.com/IagoMartins12/DevGenius"
                demoLink="https://devgenius-blog.vercel.app/"
              />
            </Col>
          </Row>
        </Container>
      )}
    </Container>
  );
}

export default Projects;
