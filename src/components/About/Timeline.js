import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaCodeBranch } from 'react-icons/fa';
import useLanguageContext from '../../Context/Language/LanguageContext';
import './timeline.css';

function Timeline() {
  const language = useLanguageContext();

  const data = language.isEnglish
    ? [
        {
          year: '2025',
          title: 'Founder & Full-Stack Developer',
          place: 'Opus Atlas',
          description:
            'Founded and developed a complete educational ecosystem merging AI, classical music, and interactive learning. Built with Next.js, MongoDB, Redis, Docker, and DevOps stack.',
          icon: <FaCodeBranch />,
        },
        {
          year: '2023 - Present',
          title: 'Full-Stack Developer',
          place: 'PMovil LTDA',
          description:
            'Developing scalable web apps for media and corporate platforms. Focus on system architecture, performance optimization, and SEO.',
          icon: <FaBriefcase />,
        },
        {
          year: '2023',
          title: 'Software Development Intern',
          place: 'PMovil LTDA',
          description:
            'Worked in full-stack development, automation, and REST API integration. Gained experience with PostgreSQL and CI/CD.',
          icon: <FaBriefcase />,
        },
        {
          year: '2022 - 2023',
          title: 'Support Intern',
          place: 'Ituran Brasil',
          description:
            'Maintained production systems and optimized SQL Server procedures, improving reliability and performance monitoring.',
          icon: <FaBriefcase />,
        },
        {
          year: '2021 - 2023',
          title: 'Technology Degree in Systems Analysis and Development',
          place: 'Universidade Cruzeiro do Sul',
          description:
            'Focused on programming, databases, and software architecture. Graduated with emphasis on modern development practices.',
          icon: <FaGraduationCap />,
        },
        {
          year: '2018 - 2019',
          title: 'Technical Course in Administration',
          place: 'ETEC Prof. Basilides de Godoy',
          description:
            'Specialized in business management and automation of administrative processes.',
          icon: <FaGraduationCap />,
        },
      ]
    : [
        {
          year: '2025',
          title: 'Fundador & Desenvolvedor Full-Stack',
          place: 'Opus Atlas',
          description:
            'Fundador e desenvolvedor de um ecossistema educacional que une IA, música clássica e aprendizado interativo. Construído com Next.js, MongoDB, Redis, Docker e práticas DevOps.',
          icon: <FaCodeBranch />,
        },
        {
          year: '2023 - Presente',
          title: 'Desenvolvedor Full-Stack',
          place: 'PMovil LTDA',
          description:
            'Desenvolvimento de aplicações web escaláveis para grandes portais e empresas, com foco em arquitetura, performance e SEO.',
          icon: <FaBriefcase />,
        },
        {
          year: '2023',
          title: 'Estagiário de Desenvolvimento',
          place: 'PMovil LTDA',
          description:
            'Atuação no desenvolvimento full-stack, automação de deploys e integração de APIs REST. Experiência com PostgreSQL e CI/CD.',
          icon: <FaBriefcase />,
        },
        {
          year: '2022 - 2023',
          title: 'Estagiário de Sustentação',
          place: 'Ituran Brasil',
          description:
            'Sustentação de sistemas em produção e otimização de procedures SQL Server, melhorando confiabilidade e performance.',
          icon: <FaBriefcase />,
        },
        {
          year: '2021 - 2023',
          title: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
          place: 'Universidade Cruzeiro do Sul',
          description:
            'Foco em programação, banco de dados e arquitetura de software. Formação orientada às práticas modernas de desenvolvimento.',
          icon: <FaGraduationCap />,
        },
        {
          year: '2018 - 2019',
          title: 'Técnico em Administração',
          place: 'ETEC Prof. Basilides de Godoy',
          description:
            'Especialização em gestão empresarial e automação de processos administrativos.',
          icon: <FaGraduationCap />,
        },
      ];

  const variants = {
    hiddenLeft: { opacity: 0, x: -80 },
    hiddenRight: { opacity: 0, x: 80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  };

  return (
    <section className="timeline-fullscreen">
      <div className="timeline-wrapper">
        <div className="timeline-line" />
        {data.map((item, index) => (
          <motion.div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
            initial={index % 2 === 0 ? 'hiddenLeft' : 'hiddenRight'}
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={variants}
          >
            <div className="timeline-icon">{item.icon}</div>
            <div className="timeline-content">
              <span className="timeline-year">{item.year}</span>
              <h3 className="timeline-title">
                {item.title}{' '}
                <span className="timeline-place">@ {item.place}</span>
              </h3>
              <p className="timeline-description">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Timeline;
