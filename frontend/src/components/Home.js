import React, { Component } from "react";
import { Link } from "react-router-dom";
import home from '../style/Home.module.css';

class Home extends Component {
  render() {
    return (
      <main className={home.main}>
        <div className="{home.content}">
          <div className="jumbotron pt-5 mb-0 bg-light">
            <h1 className={`display-4 ${home.color2}`}>Are you an introvert or an extrovert?</h1>
            <p className="lead">So do you consider yourself more of an introvert or an extrovert? Take this test, put together with input from psychoanalyst Mrs. IKnowEverything, and find out</p>
            <hr className="my-4" />
            <p className={`${home.color2}`}>by JaviCorp Psychologies</p>
            <div className="lead">
              <Link
                to="/test"
                id="list-home-list"
                className={`btn ${home.color} btn-lg text-light mt-2`}
                data-toggle="list"
                role="tab"
                aria-controls="home"
              >
                Take the Test
              </Link>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Home;