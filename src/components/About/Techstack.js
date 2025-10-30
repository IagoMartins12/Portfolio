import React from 'react';
import { Col, Row, OverlayTrigger, Tooltip } from 'react-bootstrap';
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
} from 'react-icons/di';
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiPostgresql,
  SiNestjs,
  SiGraphql,
  SiDocker,
  SiNginx,
  SiRedis,
  SiPrisma,
} from 'react-icons/si';

function Techstack() {
  const techs = [
    { icon: <DiJavascript1 />, label: 'JavaScript' },
    { icon: <SiTypescript />, label: 'TypeScript' },
    { icon: <DiReact />, label: 'React.js' },
    { icon: <SiNextdotjs />, label: 'Next.js' },
    { icon: <DiNodejs />, label: 'Node.js' },
    { icon: <SiNestjs />, label: 'NestJS' },
    { icon: <SiGraphql />, label: 'GraphQL' },
    { icon: <SiTailwindcss />, label: 'TailwindCSS' },
    { icon: <SiPrisma />, label: 'Prisma ORM' },
    { icon: <SiPostgresql />, label: 'PostgreSQL' },
    { icon: <DiMongodb />, label: 'MongoDB' },
    { icon: <SiRedis />, label: 'Redis' },
    { icon: <SiDocker />, label: 'Docker' },
    { icon: <SiNginx />, label: 'Nginx' },
    { icon: <DiGit />, label: 'Git / GitHub' },
  ];

  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
      {techs.map((tech, index) => (
        <Col
          xs={4}
          md={2}
          className="tech-icons"
          key={index}
          style={{
            position: 'relative',
            textAlign: 'center',
          }}
        >
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip id={`tooltip-${index}`}>{tech.label}</Tooltip>}
          >
            <div>
              {tech.icon}
              <p
                style={{
                  marginTop: '10px',
                  fontSize: '0.85rem',
                  color: '#cfcfcf',
                  letterSpacing: '0.5px',
                }}
              >
                {tech.label}
              </p>
            </div>
          </OverlayTrigger>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
