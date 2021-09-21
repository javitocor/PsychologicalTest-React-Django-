import React from 'react';
import { Link } from "react-router-dom";
import style from '../style/Finish.module.css'

const TestFinish = (props) => {
  const { value } = props;


  return (
    <div className="d-flex flex-column justify-content-center align-items-start p-4 w-100 border bg-light">
      <h4 className='pl-3'>Test Finished</h4>
      <h5 className='mb-4 text-bold pl-3'>Click the button to see your results</h5>
      <div className="d-flex flex-row align-items-center w-100 justify-content-end">
        <Link
          to={{
            pathname: "/results",
            state: {
              value,
            },
          }}
          id="list-home-list"
          className={`btn ${style.color} mb-2 text-light`}
          data-toggle="list"
          role="tab"
          aria-controls="home"
        >
          Check your results
        </Link>
      </div>
    </div>
  );
}

export default TestFinish;