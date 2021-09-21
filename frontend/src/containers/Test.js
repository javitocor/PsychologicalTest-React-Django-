/* eslint-disable radix */
/* eslint-disable no-unused-vars */
/* eslint-disable react/forbid-prop-types */
import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import callApi from '../helpers/APICall';
import pickQuestions from '../helpers/pickQuestions';
import QuestionForm from '../components/QuestionForm';
import TestFinish from '../components/TestFinish';
import style from '../style/Test.module.css';


const Test = (props) => {
  const {pending, itemsList, getAllItems} = props;
  const [selectedItems, setSelectedItems] = useState([]);
  const [index, setIndex] = useState(0);
  const [value, setValue] = useState(0);

  useEffect(() => {
    (async () => {
      try {  
        const data = await getAllItems();
        setSelectedItems(pickQuestions(5, data))
      } catch (error) {
        console.log(error)
      }           
    })();
  }, []);

  function handleSubmitQuestion(points){
    setValue(value + parseInt(points));
    setIndex(index + 1);    
  };
  
  return pending ? <div className="d-flex justify-content-center align-items-center pt-5 w-100">Loading...</div> : (
    <main className={`container mt-2 ${style.main}`}>
      <div className={`p-2 text-center ${style.content}`}>
        <div className="d-flex flex-column justify-content-center align-items-start">
          <div className="py-4 d-flex flex-row">
            <p className={`font-weight-bold ${style.size}`}>
              Tests
              /
              <span className='text-muted'> 21 Sep 2021</span>

            </p>
          </div>
          <div className="mb-2">
            <h2 className={style.color2}>Test: Are you an introvert or an extrovert?</h2>
            <p className="lead">So do you consider yourself more of an introvert or an extrovert? Take this test, put together with input from psychoanalyst Mrs. IKnowEverything, and find out</p>
            <hr className="my-4" />
            <p className={style.color2}>by JaviCorp Psychologies</p>
            <ul>
              <li><i className="fab fa-facebook-f" /></li>
              <li><i className="fab fa-twitter" /></li>
              <li><i className="fas fa-envelope" /></li>
            </ul>
          </div>
          {index < selectedItems.length 
            ? <QuestionForm key={index} question={selectedItems[index]} onSubmit={handleSubmitQuestion} numQuestions={selectedItems.length} index={index} />
            : <TestFinish value={value} />
          }  
        </div>
      </div>
    </main>
  );
};

Test.propTypes = {
  items: PropTypes.shape({
    error: PropTypes.object,
    pending: PropTypes.bool,
    itemsList: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  getAllItems: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  items: {
    error: state.items.error,
    itemsList: state.items.itemsList,
    pending: state.items.pending,
  },
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getAllItems: callApi,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Test);