import './Hire.scss'
import { useState } from 'react';
import SendTwoToneIcon from '@mui/icons-material/SendTwoTone';

function Hire() {

  const [selectedButtons, setSelectedButtons] = useState([]);

  const toggleButton = (button) => {
    if (selectedButtons.includes(button)) {
      setSelectedButtons(selectedButtons.filter((item) => item !== button));
    } else {
      setSelectedButtons([...selectedButtons, button]);
    }
  };

  const renderButtonContent = (buttonLabel) => {
    if (selectedButtons.includes(buttonLabel)) {
      return (
        <span>
          ✔ {buttonLabel}
        </span>
      );
    } else {
      return buttonLabel;
    }
  };

  return (
    <div className="hire" id='hireme' >
      <h1>You want to hire me for</h1>

      <div className='hire_services' >

        <button
          className={`service_hire ${selectedButtons.includes('Web App') ? 'selected' : ''}`}
          onClick={() => toggleButton('Web App')}
        >{renderButtonContent('Web App')}</button>
        <button
          className={`service_hire ${selectedButtons.includes('Front-End') ? 'selected' : ''}`}
          onClick={() => toggleButton('Front-End')}
        >{renderButtonContent('Front-End')}</button>
        <button
          className={`service_hire ${selectedButtons.includes('Back-End') ? 'selected' : ''}`}
          onClick={() => toggleButton('Back-End')}
        >{renderButtonContent('Back-End')}</button>
        <button
          className={`service_hire ${selectedButtons.includes('UI') ? 'selected' : ''}`}
          onClick={() => toggleButton('UI')}
        >{renderButtonContent('UI')}</button>
        <button
          className={`service_hire ${selectedButtons.includes('API') ? 'selected' : ''}`}
          onClick={() => toggleButton('API')}
        >{renderButtonContent('API')}</button>
        <button
          className={`service_hire ${selectedButtons.includes('Other') ? 'selected' : ''}`}
          onClick={() => toggleButton('Other')}
        >{renderButtonContent('Other')}</button>

      </div>

      <div className='input_Info'>

        <input type='text' placeholder='Name' className='input' />
        <input type='email' placeholder='Email' className='input' />

      </div>

      <button className='hireButton'>SEND <SendTwoToneIcon/></button>

    </div>
  )
}

export default Hire
