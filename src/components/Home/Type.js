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
              'Fullstack Developer',
              'Software Enginner',
              'Tecnology Enthusiast',
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }}
        />
      ) : (
        <Typewriter
          options={{
            strings: [
              'Desenvolvedor FullStack',
              'Engenheiro de Software',
              'Entusiasta da Tecnologia',
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }}
        />
      )}
    </>
  );
}

export default Type;
