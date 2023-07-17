import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import logo from '../Assets/logo(im2).png';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { CgGitFork } from 'react-icons/cg';
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from 'react-icons/ai';

import { CgFileDocument } from 'react-icons/cg';
import ToogleButton from './ToogleButton/ToogleButton';
import useLanguageContext from '../Context/Language/LanguageContext';

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener('scroll', scrollHandler);
  const language = useLanguageContext();

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? 'sticky' : 'navbar'}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : 'expanded');
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: '2px' }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                {language.isEnglish ? (
                  <>
                    <AiOutlineUser style={{ marginBottom: '2px' }} /> About
                  </>
                ) : (
                  <>
                    <AiOutlineUser style={{ marginBottom: '2px' }} /> Sobre
                  </>
                )}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                {language.isEnglish ? (
                  <>
                    <AiOutlineFundProjectionScreen
                      style={{ marginBottom: '2px' }}
                    />{' '}
                    Projects
                  </>
                ) : (
                  <>
                    <AiOutlineFundProjectionScreen
                      style={{ marginBottom: '2px' }}
                    />{' '}
                    Projetos
                  </>
                )}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
                {language.isEnglish ? (
                  <>
                    <CgFileDocument style={{ marginBottom: '2px' }} /> Resume
                  </>
                ) : (
                  <>
                    <CgFileDocument style={{ marginBottom: '2px' }} /> Currículo
                  </>
                )}
              </Nav.Link>
            </Nav.Item>

            {/* <Nav.Item>
              <Nav.Link
                href="https://soumyajitblogs.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <ImBlog style={{ marginBottom: "2px" }} /> Blogs
              </Nav.Link>
            </Nav.Item> */}

            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/IagoMartins12/Portfolio2"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: '1.2em' }} className="forkIcon" />{' '}
                <AiFillStar style={{ fontSize: '1.1em' }} />
              </Button>
            </Nav.Item>
            <Nav.Item className="navToogleBtn">
              <ToogleButton />
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
