import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../Assets/logo(im2).png';
import { CgGitFork, CgFileDocument } from 'react-icons/cg';
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from 'react-icons/ai';
import { ImBlog } from 'react-icons/im';
import ToogleButton from './ToogleButton/ToogleButton';
import useLanguageContext from '../Context/Language/LanguageContext';

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const location = useLocation(); // ← pega a URL atual
  const language = useLanguageContext();

  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY >= 20) updateNavbar(true);
      else updateNavbar(false);
    };

    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, []);

  const getActiveClass = (path) => {
    return location.pathname === path ? 'active-link' : '';
  };

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      style={{ zIndex: 9999999999 }}
      className={navColour ? 'sticky' : 'navbar'}
    >
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => updateExpanded(expand ? false : 'expanded')}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Item>
              <Nav.Link
                as={NavLink}
                to="/"
                onClick={() => updateExpanded(false)}
                className={getActiveClass('/')}
              >
                <AiOutlineHome style={{ marginBottom: '2px' }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={NavLink}
                to="/about"
                onClick={() => updateExpanded(false)}
                className={getActiveClass('/about')}
              >
                <AiOutlineUser style={{ marginBottom: '2px' }} />{' '}
                {language.isEnglish ? 'About' : 'Sobre'}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={NavLink}
                to="/project"
                onClick={() => updateExpanded(false)}
                className={getActiveClass('/project')}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: '2px' }}
                />{' '}
                {language.isEnglish ? 'Projects' : 'Projetos'}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={NavLink}
                to="/resume"
                onClick={() => updateExpanded(false)}
                className={getActiveClass('/resume')}
              >
                <CgFileDocument style={{ marginBottom: '2px' }} />{' '}
                {language.isEnglish ? 'Resume' : 'Currículo'}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                href="https://devgenius-blog.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <ImBlog style={{ marginBottom: '2px' }} /> Blog
              </Nav.Link>
            </Nav.Item>

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
