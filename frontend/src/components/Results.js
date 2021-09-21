/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import checkResults from '../helpers/checkResults';
import style from '../style/Results.module.css';


const Results = (props) => {
  const {location} = props;
  const {value} = location.state;
  const [results, setResults] = useState('');

  useEffect(() => {
    (async () => {
      try {  
        const data = await checkResults(value);
        await setResults(data);
      } catch (error) {
        console.log(error)
      }           
    })();
    
  }, []);
  
  return (
    <main className={style.main}>
      <div className="">
        <div className="jumbotron pt-5 mb-0 bg-light">
          <h3 className="lead  font-weight-bold">Your results are:</h3>
          <h1 className="display-4 font-weight-bold">{results}</h1>
          <hr className="my-4" />
          <p className={style.color}>by JaviCorp Psychologies</p>
          <div className="lead">
            <Link
              to="/"
              id="list-home-list"
              className={`btn ${style.color2} mb-2 text-light`}
              data-toggle="list"
              role="tab"
              aria-controls="home"
            >
              Go to Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Results;