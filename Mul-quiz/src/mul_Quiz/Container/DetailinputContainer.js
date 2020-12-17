import React, { Component } from "react";
import Detailinput from "../View/Detailinput";
import { inject, observer } from "mobx-react";

@inject("Store")
@observer
class DetailinputContainer extends Component {
  setQuiz = (name, value) => {
    const {quiz} = this.props.Store;
    quiz.setQuizProps(name, value);
  };
  setImage = (name, value) => {
    const {quiz} = this.props.Store;
    quiz.setImageProps(name, value);
  };
  
  render() {
    const {quiz} = this.props.Store;
    const {getselectquiz, getquizs} = quiz;
    return (
      <div>
        <Detailinput
          quiz={getselectquiz}
          setQuiz={this.setQuiz}
          setImage={this.setImage}
          quizs={getquizs}
        />
      </div>
    );
  }
}

export default DetailinputContainer;
