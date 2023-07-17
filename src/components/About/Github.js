import React from 'react';
import GitHubCalendar from 'react-github-calendar';
import { Row } from 'react-bootstrap';
import useLanguageContext from '../../Context/Language/LanguageContext';

function Github() {
  const selectLastHalfYear = (contributions) => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 6;

    return contributions.filter((activity) => {
      const date = new Date(activity.date);
      const monthOfDay = date.getMonth();

      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    });
  };
  const language = useLanguageContext();

  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
      {language.isEnglish ? (
        <h1 className="project-heading" style={{ paddingBottom: '20px' }}>
          Days I <strong className="purple">Code</strong>
        </h1>
      ) : (
        <h1 className="project-heading" style={{ paddingBottom: '20px' }}>
          Dias que eu <strong className="purple">Codei</strong>
        </h1>
      )}

      <GitHubCalendar
        username="IagoMartins12"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
        year={2023}
        transformData={selectLastHalfYear}
      />
    </Row>
  );
}

export default Github;
