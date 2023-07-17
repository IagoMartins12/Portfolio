import useLanguageContext from '../../Context/Language/LanguageContext.js';

function ToogleButton() {
  const button = useLanguageContext();
  return (
    <div className="checkbox-wrapper-35">
      <input
        value="private"
        name="switch"
        id="switch"
        type="checkbox"
        className="switch"
        checked={button.isEnglish}
        onClick={button.toggleLanguage}
      />
      <label htmlFor="switch">
        <span className="switch-x-toggletext">
          <span className="switch-x-unchecked">
            <span className="switch-x-hiddenlabel"></span>BR
          </span>
          <span className="switch-x-checked">
            <span className="switch-x-hiddenlabel"> </span>US
          </span>
        </span>
      </label>
    </div>
  );
}

export default ToogleButton;
