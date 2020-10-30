import React from 'react';
import './Styles.scss';

const ProgressBar = ({currentQuestionId, totalQuestions}) => {

  return(
    <div className="progressBar">
      <div className="progressBar--fill" style={{ width : (currentQuestionId + 1) / (totalQuestions + 1) * 100 + "%"}} />
      <div className="progressBar--background"></div>
    </div>
  )
}

export default ProgressBar;