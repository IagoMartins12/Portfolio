import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCards';
import Particle from '../Particle';
import useLanguageContext from '../../Context/Language/LanguageContext';
import spaceX from '../../Assets/Projects/spacex.png';
import iagoflix from '../../Assets/Projects/Iagoflix2.png';
import iagobnb from '../../Assets/Projects/iagobnb.png';
import devGenius from '../../Assets/Projects/devgenius.png';
import metaversus from '../../Assets/Projects/metaversus.png';
import hoobank from '../../Assets/Projects/hoobanks.png';
import opusAtlasBlog from '../../Assets/Projects/opusAtlasBlog.png';
import opusAtlas from '../../Assets/Projects/opusAtlas.png';
import saltypoint from '../../Assets/Projects/saltypointWeb.png';
import coffeShop from '../../Assets/Projects/coffeShop.png';

function Projects() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const language = useLanguageContext();

  // ---- motion variants ----
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.15 } },
  };

  // --- seus projetos (mantidos exatamente como estão) ---
  const projectsData = {
    en: [
      {
        title: 'Opus Atlas',
        description:
          'An educational platform that turns classical music learning into an immersive digital experience — connecting study, history, and practice. Designed as a complete ecosystem, Opus Atlas integrates an automated musical encyclopedia, an intelligent sheet music library, a teacher–student system with lessons and tasks, study tools with individual progress tracking, and gamification based on achievements and XP. Its architecture combines Next.js (App Router) and TypeScript with MongoDB, Prisma ORM, and Redis for scalability, while the infrastructure uses Docker, Nginx, Cloudflare CDN, and CI/CD with GitHub Actions. Monitoring with Prometheus and Grafana ensures high performance and platform stability.',
        technologies:
          'Next.js, React, TypeScript, MongoDB, Redis, Docker, Nginx, Prisma, OpenAI, Cloudflare, GitHub Actions',
        demoLink: 'https://opusatlas.com.br',
        year: '2025',
        isFeatured: true,
        category: 'fullstack',
        imgPath: opusAtlas,
      },
      {
        title: 'Opus Atlas Blog',
        description:
          'The editorial extension of the Opus Atlas ecosystem — merging history, curiosity, and musical analysis in one integrated space. The blog offers a complete reading experience with classical music news, composer biographies, concert coverage, and recording comparisons. It features text-to-speech reading, nested comment threads, article saving, dynamic categories, and an advanced admin panel. Developed with Next.js and TypeScript, it integrates Prisma, MongoDB, NextAuth, Redis, and a fully customized rich text editor. The entire application is containerized with Docker and runs behind an Nginx proxy, ensuring performance, security, and a smooth editorial experience.',
        technologies:
          'Next.js, TypeScript, MongoDB, Prisma, Redis, Docker, Nginx, Text-to-Speech API, React, Tailwind CSS',
        demoLink: 'https://opusatlas.com.br/blog',
        year: '2025',
        isFeatured: true,
        category: 'fullstack',
        imgPath: opusAtlasBlog,
      },
      {
        title: 'Salty Point Ecosystem',
        description:
          'A complete full-stack e-commerce ecosystem for ordering pizzas and esfihas. Includes a Web platform with customizable products, rewards system (1 point per R$1 spent), discount coupons, Google Maps and WhatsApp integration, and light/dark themes. The administrative CMS provides sales analytics by month/day/hour, payment method insights, and business metrics. The robust backend API includes Jest testing, WebSocket real-time updates, Swagger documentation, and full DTO validation. The mobile app offers a native iOS/Android experience with push notifications and location services. A fully integrated solution — from customer ordering to business management.',
        technologies:
          'Next.js, React, TypeScript, NestJS, MongoDB, Prisma, React Native, Jest, WebSocket, Swagger, Docker, Redis, Tailwind CSS',
        demoLink: 'https://salty-point-web.vercel.app/',
        year: '2024',
        isFeatured: true,
        category: ['fullstack', 'mobile'],
        imgPath: saltypoint,
      },
      {
        title: 'DevGenius',
        description:
          'A blog and social network for developers featuring article comments, post interactions, and user following. Includes modern dark theme integration. The API is built with Next.js API Routes for seamless full-stack integration. Developed with React, Next.js, Node.js, TypeScript, MongoDB, and Prisma.',
        technologies:
          'React, Next.js, TypeScript, MongoDB, Prisma, NextAuth, Tailwind CSS, Node.js',
        ghLink: 'https://github.com/IagoMartins12/DevGenius',
        demoLink: 'https://devgenius-blog.vercel.app/',
        year: '2023',
        isFeatured: false,
        category: 'fullstack',
        imgPath: devGenius,
      },
      {
        title: 'Iagobnb',
        description:
          'An accommodation platform that allows users to list properties, make reservations, and search globally. Features advanced filters, interactive maps, and booking management. The API is built with Next.js API Routes for integrated backend functionality. Developed with MongoDB, Prisma, Tailwind CSS, React, Next.js, and TypeScript.',
        technologies:
          'MongoDB, Prisma, Tailwind CSS, React, Next.js, TypeScript, NextAuth, Leaflet, Axios',
        ghLink: 'https://github.com/IagoMartins12/Airbnb',
        demoLink: 'https://iagobnb.vercel.app/',
        year: '2022',
        isFeatured: false,
        category: 'fullstack',
        imgPath: iagobnb,
      },
      {
        title: 'Iagoflix',
        description:
          'A streaming platform for browsing and watching cinematographic works. Includes authentication, personalized recommendations, and a custom video player. A full-stack project with separate frontend and backend repositories — frontend built with React, Next.js, Bootstrap, SASS, and TypeScript; backend API developed with Node.js, Express, PostgreSQL, and Sequelize.',
        technologies:
          'React, Next.js, Bootstrap, SASS, TypeScript, Node.js, Express, PostgreSQL, Sequelize, JWT, Bcrypt',
        ghLink: 'https://github.com/IagoMartins12/iagoflix-front',
        demoLink: 'https://iagoflix.vercel.app/',
        year: '2021',
        isFeatured: false,
        category: 'fullstack',
        imgPath: iagoflix,
      },
      {
        title: 'Coffee Shop',
        description:
          'A visual mobile app for a coffee shop with a modern UI/UX design. Built as a showcase project demonstrating React Native’s capabilities — smooth animations with Lottie, state management with Zustand, and elegant gradients. Includes bottom tab navigation, blur effects, and vector icons for an enhanced user experience.',
        technologies:
          'React Native, TypeScript, Zustand, Lottie, React Navigation, Linear Gradient, Vector Icons, AsyncStorage, React Native Blur',
        ghLink: 'https://github.com/IagoMartins12/Dev_Coffee',
        year: '2023',
        isFeatured: false,
        category: 'mobile',
        imgPath: coffeShop,
      },
      {
        title: 'Metaversus',
        description:
          'An interactive landing page exploring metaverse concepts with 3D animations, smooth scroll effects, parallax transitions, and immersive storytelling. Built with Tailwind CSS, React, Next.js, and Framer Motion.',
        technologies: 'Tailwind CSS, React, Next.js, Framer Motion, CSS3',
        ghLink: 'https://github.com/IagoMartins12/Metaverse',
        demoLink: 'https://metaversus-iagomartins.vercel.app/',
        year: '2022',
        isFeatured: false,
        category: 'frontend',
        imgPath: metaversus,
      },
      {
        title: 'HooBank',
        description:
          'A modern banking landing page with elegant design and smooth animations, optimized for conversion and user experience. Developed with Next.js, React, and Tailwind CSS.',
        technologies: 'Next.js, React, Tailwind CSS, CSS3',
        ghLink: 'https://github.com/IagoMartins12/LandingPage',
        demoLink: 'https://iago-martins-hoobank.vercel.app/',
        year: '2022',
        isFeatured: false,
        category: 'frontend',
        imgPath: hoobank,
      },
      {
        title: 'SpaceX',
        description:
          'A responsive website inspired by SpaceX, featuring a modern UI and engaging interactions. Clean design showcasing content about space exploration. Built with CSS, Bootstrap, SASS, and AOS animations.',
        technologies: 'HTML5, CSS3, Bootstrap, SASS, AOS, JavaScript',
        ghLink: 'https://github.com/IagoMartins12/SpaceX',
        demoLink: 'https://iagomartins12.github.io/SpaceX/',
        year: '2021',
        isFeatured: false,
        category: 'frontend',
        imgPath: spaceX,
      },
    ],
    pt: [
      {
        title: 'Opus Atlas',
        description:
          'Uma plataforma educacional que transforma o aprendizado da música clássica em uma experiência digital imersiva, conectando estudo, história e prática. Desenvolvido como um ecossistema completo, o Opus Atlas integra uma enciclopédia musical automatizada, biblioteca inteligente de partituras, sistema professor-aluno com aulas e tarefas, ferramentas de estudo com progresso individual e gamificação baseada em conquistas e experiência. A arquitetura combina Next.js (App Router) e TypeScript com MongoDB, Prisma ORM e Redis para garantir escalabilidade, enquanto a infraestrutura utiliza Docker, Nginx, Cloudflare CDN e CI/CD com GitHub Actions. O monitoramento é feito com Prometheus e Grafana, assegurando alta performance e estabilidade para toda a plataforma.',
        technologies:
          'Next.js, React, TypeScript, MongoDB, Redis, Docker, Nginx, Prisma, OpenAI, Cloudflare, GitHub Actions, ',
        demoLink: 'https://opusatlas.com.br',
        year: '2025',
        isFeatured: true,
        category: 'fullstack',
        imgPath: opusAtlas,
      },
      {
        title: 'Opus Atlas Blog',
        description:
          'Extensão editorial do ecossistema Opus Atlas, unindo história, curiosidade e análise musical em um só ambiente. O blog oferece uma experiência completa de leitura, oferecendo notícias de música clássica, biografias de compositores, cobertura de concertos e comparações de gravações. Com interação e suporte a leitura por voz, sistema de comentários com respostas aninhadas, salvamento de artigos, categorias dinâmicas e painel administrativo avançado. Desenvolvido com Next.js e TypeScript, integra Prisma, MongoDB, NextAuth, Redis e um editor de texto rico personalizado. Toda a aplicação é orquestrada em containers Docker com proxy Nginx, garantindo desempenho, segurança e uma experiência editorial contínua e fluida.',

        technologies:
          'Next.js, TypeScript, MongoDB, Prisma,  Redis, Docker, Nginx, text-to-Speech API, React, Tailwind CSS',
        demoLink: 'https://opusatlas.com.br/blog',
        year: '2025',
        isFeatured: true,
        category: 'fullstack',
        imgPath: opusAtlasBlog,
      },
      {
        title: 'Ecossistema Salty Point',
        description:
          'Ecossistema completo full-stack de e-commerce para pedidos de pizzas e esfihas. Inclui plataforma Web com produtos personalizáveis, sistema de recompensas (1 ponto por R$1 gasto), cupons de desconto, integração Google Maps e WhatsApp, tema claro/escuro. CMS administrativo com análises de vendas por mês/dia/hora, análise de métodos de pagamento e métricas de negócio. API Backend robusta com testes Jest, WebSocket para atualizações em tempo real, documentação Swagger e validação completa com DTOs. App Mobile com experiência nativa iOS/Android, notificações push e serviços de localização. Uma solução integrada completa do pedido do cliente à gestão do negócio.',
        technologies:
          'Next.js, React, TypeScript, NestJS, MongoDB, Prisma, React Native, Jest, WebSocket, Swagger, Docker, Redis,  Tailwind CSS,',
        demoLink: 'https://salty-point-web.vercel.app/',
        year: '2024',
        isFeatured: true,
        category: ['fullstack', 'mobile'],
        imgPath: saltypoint,
      },
      {
        title: 'DevGenius',
        description:
          'Blog e rede social para desenvolvedores com comentários em artigos, interações em posts e sistema de seguir usuários. Integração moderna com dark theme. API construída com Next.js API Routes para integração full-stack perfeita. Desenvolvida com React, Next.js, Node.js, TypeScript, MongoDB e Prisma.',
        technologies:
          'React, Next.js, TypeScript, MongoDB, Prisma, NextAuth, Tailwind CSS, Node.js',
        ghLink: 'https://github.com/IagoMartins12/DevGenius',
        demoLink: 'https://devgenius-blog.vercel.app/',
        year: '2023',
        isFeatured: false,
        category: 'fullstack',
        imgPath: devGenius,
      },
      {
        title: 'Iagobnb',
        description:
          'Plataforma de acomodações permitindo listar propriedades, fazer reservas e buscar mundialmente. Possui filtros avançados, mapas interativos e gerenciamento de reservas. API construída com Next.js API Routes para funcionalidade backend integrada. Desenvolvida com MongoDB, Prisma, Tailwind CSS, React, Next.js e TypeScript.',
        technologies:
          'MongoDB, Prisma, Tailwind CSS, React, Next.js, TypeScript, NextAuth, Leaflet, Axios',
        ghLink: 'https://github.com/IagoMartins12/Airbnb',
        demoLink: 'https://iagobnb.vercel.app/',
        year: '2022',
        isFeatured: false,
        category: 'fullstack',
        imgPath: iagobnb,
      },
      {
        title: 'Iagoflix',
        description:
          'Plataforma de streaming para navegar e assistir obras cinematográficas. Possui autenticação, recomendações personalizadas e player de vídeo customizado. Projeto full-stack com repositórios separados de frontend e backend - Frontend construído com React, Next.js, Bootstrap, SASS e TypeScript; Backend API desenvolvido com Node.js, Express, PostgreSQL e Sequelize.',
        technologies:
          'React, Next.js, Bootstrap, SASS, TypeScript, Node.js, Express, PostgreSQL, Sequelize, JWT, Bcrypt',
        ghLink: 'https://github.com/IagoMartins12/iagoflix-front',
        demoLink: 'https://iagoflix.vercel.app/',
        year: '2021',
        isFeatured: false,
        category: 'fullstack',
        imgPath: iagoflix,
      },
      {
        title: 'Coffee Shop',
        description:
          'Aplicativo mobile visual para cafeteria com design moderno de UI/UX. Construído como projeto showcase demonstrando capacidades do React Native com animações suaves usando Lottie, gerenciamento de estado com Zustand e gradientes bonitos. Inclui navegação por abas inferiores, efeitos de blur e ícones vetoriais para experiência de usuário aprimorada.',
        technologies:
          'React Native, TypeScript, Zustand, Lottie, React Navigation, Linear Gradient, Vector Icons, AsyncStorage, React Native Blur',
        ghLink: 'https://github.com/IagoMartins12/Dev_Coffee',
        year: '2023',
        isFeatured: false,
        category: 'mobile',
        imgPath: coffeShop,
      },
      {
        title: 'Metaversus',
        description:
          'Landing page interativa explorando conceitos do metaverso com animações 3D. Possui efeitos suaves de scroll, parallax e storytelling imersivo. Desenvolvida com Tailwind CSS, React, Next.js e Framer Motion.',
        technologies: 'Tailwind CSS, React, Next.js, Framer Motion, CSS3',
        ghLink: 'https://github.com/IagoMartins12/Metaverse',
        demoLink: 'https://metaversus-iagomartins.vercel.app/',
        year: '2022',
        isFeatured: false,
        category: 'frontend',
        imgPath: metaversus,
      },
      {
        title: 'HooBank',
        description:
          'Landing page bancária moderna com design elegante e animações suaves. Otimizada para conversão e experiência do usuário. Desenvolvida com Next.js, React e Tailwind CSS.',
        technologies: 'Next.js, React, Tailwind CSS, CSS3',
        ghLink: 'https://github.com/IagoMartins12/LandingPage',
        demoLink: 'https://iago-martins-hoobank.vercel.app/',
        year: '2022',
        isFeatured: false,
        category: 'frontend',
        imgPath: hoobank,
      },
      {
        title: 'SpaceX',
        description:
          'Website responsivo inspirado na SpaceX com UI moderna e interações envolventes. Design limpo apresentando conteúdo sobre exploração espacial. Desenvolvido com CSS, Bootstrap, SASS e animações AOS.',
        technologies: 'HTML5, CSS3, Bootstrap, SASS, AOS, JavaScript',
        ghLink: 'https://github.com/IagoMartins12/SpaceX',
        demoLink: 'https://iagomartins12.github.io/SpaceX/',
        year: '2021',
        isFeatured: false,
        category: 'frontend',
        imgPath: spaceX,
      },
    ],
  };

  const currentProjects = language.isEnglish
    ? projectsData.en
    : projectsData.pt;

  const filteredProjects =
    selectedFilter === 'all'
      ? currentProjects
      : currentProjects.filter((project) => {
          if (selectedFilter === 'fullstack') {
            return (
              project.category === 'fullstack' ||
              project.category === 'frontend' ||
              project.category === 'backend' ||
              project.category.includes('fullstack')
            );
          }
          if (selectedFilter === 'frontend') {
            return (
              project.category === 'frontend' ||
              project.category === 'fullstack' ||
              project.category.includes('fullstack')
            );
          }
          if (selectedFilter === 'backend') {
            return (
              project.category === 'backend' ||
              project.category === 'fullstack' ||
              project.category.includes('fullstack')
            );
          }
          if (selectedFilter === 'mobile') {
            return (
              project.category === 'mobile' ||
              project.category.includes('mobile')
            );
          }
          return project.category === selectedFilter;
        });

  const filterButtons = [
    {
      id: 'all',
      label: language.isEnglish ? 'All Projects' : 'Todos os Projetos',
    },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'frontend', label: 'Front-end' },
    { id: 'backend', label: 'Back-end' },
    { id: 'mobile', label: 'Mobile' },
  ];

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h1 className="project-heading">
            {language.isEnglish ? (
              <>
                My Recent <strong className="purple">Works </strong>
              </>
            ) : (
              <>
                Meus <strong className="purple">Projetos </strong> recentes
              </>
            )}
          </h1>

          <p style={{ color: 'white' }}>
            {language.isEnglish
              ? "Here are a few projects I've worked on recently."
              : 'Aqui estão alguns projetos que eu desenvolvi recentemente.'}
          </p>
        </motion.div>

        {/* filtros */}
        <motion.div
          className="project-filters"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '10px',
            marginTop: '20px',
            flexWrap: 'wrap',
          }}
        >
          {filterButtons.map((button) => (
            <motion.button
              key={button.id}
              onClick={() => setSelectedFilter(button.id)}
              variants={fadeUp}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: '10px 20px',
                background:
                  selectedFilter === button.id
                    ? 'linear-gradient(135deg, #c770f0 0%, #8a2be2 100%)'
                    : 'rgba(199, 112, 240, 0.1)',
                color: 'white',
                border:
                  selectedFilter === button.id
                    ? 'none'
                    : '1px solid rgba(199, 112, 240, 0.3)',
                borderRadius: '25px',
                cursor: 'pointer',
                fontSize: '0.95em',
                fontWeight: selectedFilter === button.id ? 600 : 400,
                transition: 'all 0.3s ease',
                boxShadow:
                  selectedFilter === button.id
                    ? '0 4px 15px rgba(199, 112, 240, 0.4)'
                    : 'none',
              }}
            >
              {button.label}
            </motion.button>
          ))}
        </motion.div>

        {/* grid de projetos */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
            {filteredProjects.map((project, index) => (
              <Col md={4} className="project-card" key={index}>
                <motion.div
                  variants={fadeUp}
                  whileHover={{
                    transition: { duration: 0.3, ease: 'easeOut' },
                  }}
                >
                  <ProjectCard {...project} />
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>
      </Container>
    </Container>
  );
}

export default Projects;
