import React from 'react';
import Card from 'react-bootstrap/Card';
import { ImPointRight } from 'react-icons/im';
import useLanguageContext from '../../Context/Language/LanguageContext';

function AboutCard() {
  const language = useLanguageContext();

  return (
    <Card className="quote-card-view">
      <Card.Body>
        {language.isEnglish ? (
          <blockquote className="blockquote mb-0">
            <p style={{ textAlign: 'justify' }}>
              Hi Everyone, I am <span className="purple">Iago Martins </span>
              from <span className="purple"> São Paulo, Brazil.</span>
              <br />I am a junior Software Engineer, actualy working at Pmovil
              LTDA.
              <br /> Check my resume to get to know my skills better :D
              <br />
              <br />
              Apart from coding, some other activities that I love to do!
            </p>
            <ul>
              <li className="about-activity">
                <ImPointRight /> Play Games
              </li>
              <li className="about-activity">
                <ImPointRight /> Read books
              </li>
              <li className="about-activity">
                <ImPointRight /> Travelling
              </li>
              <li className="about-activity">
                <ImPointRight /> Play sports
              </li>
            </ul>

            <p style={{ color: 'rgb(155 126 172)' }}>
              "Inspire to code the future and shape a better tomorrow!."{' '}
            </p>
            <footer className="blockquote-footer">Iago</footer>
          </blockquote>
        ) : (
          <blockquote className="blockquote mb-0">
            <p style={{ textAlign: 'justify' }}>
              Olá pessoal, me chamo <span className="purple">Iago Martins</span>
              , moro em
              <span className="purple"> São Paulo, Brasil.</span>
              <br />
              Sou um Engenheiro de Software Jr, atualmente trabalhando na Pmovil
              LTDA
              <br /> Veja meu curriculo para conhecer melhor minhas habilidades
              :D
              <br />
              <br />
              Fora codar, outras habilidades que eu gosto de fazer!
            </p>
            <ul>
              <li className="about-activity">
                <ImPointRight /> Jogar
              </li>
              <li className="about-activity">
                <ImPointRight /> Ler
              </li>
              <li className="about-activity">
                <ImPointRight /> Viajar
              </li>
              <li className="about-activity">
                <ImPointRight /> Praticar esportes
              </li>
            </ul>

            <p style={{ color: 'rgb(155 126 172)' }}>
              "Inspire to code the future and shape a better tomorrow!."{' '}
            </p>
            <footer className="blockquote-footer">Iago</footer>
          </blockquote>
        )}
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
