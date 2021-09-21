/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, {useState} from 'react';
import PropTypes from 'prop-types';
import style from '../style/QuestionForm.module.css';

const QuestionForm = (props) => {
  const { question, onSubmit, numQuestions, index } = props;
  const [selected, setSelected] = useState(0);

  function handleOptionChange(event){ 
    setSelected(event.target.value)
  };

  function handleSubmit(e){
    e.preventDefault(); 
    onSubmit(selected)
  }
  
  return (
    <div className="d-flex flex-column justify-content-center align-items-start p-4 w-100 border bg-light">
      <h4 className='pl-3'>
        Question
        {' '}
        {index + 1}
        {' '}
        of
        {' '}
        {numQuestions}
      </h4>
      <h5 className='mb-4 text-bold pl-3'>{question.text}</h5>
      <form onSubmit={handleSubmit} className={`${style.form} m-auto d-flex align-items-start flex-column px-5 py-2`}>
        {question.answers.map(answer => (
          <div className="mb-4 p-1" key={answer.text}>
            <label className="form-check-label">
              <input
                id={answer.id}
                className="form-check-input"
                type="radio"
                name='test'
                value={answer.value}
                checked={selected == answer.value}
                onChange={handleOptionChange}
              />
              {answer.text}
            </label>
          </div>
        ))}      
        <div className="d-flex flex-row align-items-center w-100 justify-content-end">          
          <button type="submit" className={`btn ${style.color} text-light mb-2`}>Next Question</button>
        </div>
      </form>
    </div>
  );
}
QuestionForm.propTypes = {
  question: PropTypes.instanceOf(Object).isRequired,
  onSubmit: PropTypes.func.isRequired,
  numQuestions: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};

export default QuestionForm;