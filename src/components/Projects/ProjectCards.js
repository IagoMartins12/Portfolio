import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { CgWebsite } from 'react-icons/cg';
import { BsGithub, BsStarFill } from 'react-icons/bs';
import { motion } from 'framer-motion';
import techIconsMap from './techIconsMap';
import useLanguageContext from '../../Context/Language/LanguageContext';

function ProjectCards(props) {
  const language = useLanguageContext();

  const getTechStack = (techString) => {
    if (!techString) return [];
    return techString
      .split(',')
      .map((t) => t.trim())
      .map((tech) => ({
        name: tech,
        ...techIconsMap[tech],
      }))
      .filter((t) => t.icon);
  };

  const techStack = getTechStack(props.technologies);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <motion.div
      whileHover={{
        boxShadow: '0 10px 25px rgba(199, 112, 240, 0.3)',
      }}
      transition={{ type: 'spring', stiffness: 150 }}
      style={{ height: '100%' }}
    >
      <Card
        className="project-card-view"
        style={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: 'rgba(20, 20, 30, 0.85)',
          border: '1px solid rgba(199,112,240,0.2)',
          borderRadius: '15px',
          overflow: 'hidden',
        }}
      >
        {props.isFeatured && (
          <div className="featured-badge">
            <BsStarFill /> {language.isEnglish ? 'Featured' : 'Destaque'}
          </div>
        )}

        {/* Imagem */}
        <motion.div variants={fadeUp} initial="hidden" animate="visible">
          <Card.Img
            src={props.imgPath}
            alt="card-img"
            style={{
              borderBottom: '1px solid rgba(199,112,240,0.15)',
              height: '220px',
              objectFit: 'cover',
            }}
          />
        </motion.div>

        {/* Corpo do Card */}
        <Card.Body
          style={{
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 1,
            padding: '1.5rem',
          }}
        >
          <div style={{ flexGrow: 1 }}>
            <motion.div variants={fadeUp} initial="hidden" animate="visible">
              <Card.Title
                style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  color: '#fff',
                  marginBottom: '0.5rem',
                }}
              >
                {props.title}
              </Card.Title>

              {props.year && (
                <div
                  style={{
                    color: '#c770f0',
                    fontWeight: 500,
                    fontSize: '0.9rem',
                    marginBottom: '1rem',
                  }}
                >
                  {props.year}
                </div>
              )}

              <Card.Text
                style={{
                  textAlign: 'justify',
                  color: '#dcdcdc',
                  fontSize: '0.9rem',
                  lineHeight: '1.5',
                }}
              >
                {props.description}
              </Card.Text>
            </motion.div>
          </div>

          {/* Stack e Botões ficam fixos no final */}
          <div style={{ marginTop: 'auto' }}>
            {techStack.length > 0 && (
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.1 }}
                style={{
                  marginTop: '20px',
                  padding: '15px',
                  background: 'rgba(138, 43, 226, 0.08)',
                  borderLeft: '3px solid #8a2be2',
                  borderRadius: '5px',
                }}
              >
                <strong
                  style={{
                    display: 'block',
                    marginBottom: '10px',
                    color: '#c770f0',
                    fontSize: '0.95em',
                  }}
                >
                  Tech Stack:
                </strong>
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '10px',
                    alignItems: 'center',
                  }}
                >
                  {techStack.map((tech, index) => {
                    const IconComponent = tech.icon;
                    return (
                      <motion.div
                        key={index}
                        transition={{ duration: 0.2 }}
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          gap: '4px',
                          position: 'relative',
                        }}
                      >
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '45px',
                            height: '45px',
                            background: tech.bg || 'rgba(255, 255, 255, 0.05)',
                            border: '1.5px solid rgba(200, 137, 230, 0.3)',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                          }}
                        >
                          <IconComponent
                            style={{ fontSize: '1.5em', color: tech.color }}
                          />
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            )}

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
              style={{
                marginTop: '20px',
                display: 'flex',
                justifyContent: 'center',
                gap: '10px',
                flexWrap: 'wrap',
              }}
            >
              {props.ghLink && (
                <Button
                  variant="primary"
                  href={props.ghLink}
                  target="_blank"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '8px 16px',
                  }}
                >
                  <BsGithub />
                  {props.isBlog ? 'Blog' : 'GitHub'}
                </Button>
              )}
              {!props.isBlog && props.demoLink && (
                <Button
                  variant="primary"
                  href={props.demoLink}
                  target="_blank"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '8px 16px',
                  }}
                >
                  <CgWebsite />
                  Demo
                </Button>
              )}
            </motion.div>
          </div>
        </Card.Body>
      </Card>
    </motion.div>
  );
}

export default ProjectCards;
