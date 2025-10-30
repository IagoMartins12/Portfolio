import React from 'react';
import Typewriter from 'typewriter-effect';
import useLanguageContext from '../../Context/Language/LanguageContext';

function Type() {
  const language = useLanguageContext();

  return (
    <>
      {language.isEnglish ? (
        <Typewriter
          options={{
            strings: [
              'Full-Stack Developer',
              'Building Scalable Web Apps',
              'Node.js, React & Next.js Enthusiast',
              'Passionate About DevOps and Clean Code',
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 40,
          }}
        />
      ) : (
        <Typewriter
          options={{
            strings: [
              'Desenvolvedor Full-Stack',
              'Criando Aplicações Web Escaláveis',
              'Entusiasta de Node.js, React e Next.js',
              'Apaixonado por DevOps e Clean Code',
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 40,
          }}
        />
      )}
    </>
  );
}

export default Type;
