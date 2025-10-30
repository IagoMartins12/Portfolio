import React from 'react';
import { Col, Row, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { DiVisualstudio } from 'react-icons/di';
import {
  SiPostman,
  SiGithub,
  SiCloudflare,
  SiVercel,
  SiFigma,
  SiSlack,
  SiLinux,
} from 'react-icons/si';

function Toolstack() {
  const tools = [
    { icon: <DiVisualstudio />, label: 'VS Code' },
    { icon: <SiPostman />, label: 'Postman' },
    { icon: <SiGithub />, label: 'GitHub' },
    { icon: <SiCloudflare />, label: 'Cloudflare' },
    { icon: <SiVercel />, label: 'Vercel' },
    { icon: <SiFigma />, label: 'Figma' },
    { icon: <SiSlack />, label: 'Slack' },
    { icon: <SiLinux />, label: 'Linux' },
  ];

  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
      {tools.map((tool, index) => (
        <Col
          xs={4}
          md={2}
          className="tech-icons"
          key={index}
          style={{ position: 'relative', textAlign: 'center' }}
        >
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip id={`tooltip-${index}`}>{tool.label}</Tooltip>}
          >
            <div>
              {tool.icon}
              <p
                style={{
                  marginTop: '10px',
                  fontSize: '0.85rem',
                  color: '#cfcfcf',
                  letterSpacing: '0.5px',
                }}
              >
                {tool.label}
              </p>
            </div>
          </OverlayTrigger>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
