import React, { Component } from "react";
import Detailanswer from "../view/Detailanswer";
import { inject, observer } from "mobx-react";

@inject("Store")
@observer
class DetailanswerContainer extends Component {
  setQuiz = (name, value) => {
    const {quiz} = this.props.Store;
    const selectQuiz = quiz.getselectquiz;
    quiz.setQuizProps(name, value, selectQuiz);
  };

  setCheck = (e) => {
    const {quiz} = this.props.Store;
    quiz.setCheckedProps(e);
  };

  render() {
    const {quiz} = this.props.Store;
    const {getselectquiz} = quiz;
    return (
      <div>
        <Detailanswer quiz={getselectquiz} setQuiz={this.setQuiz} />
      </div>
    );
  }
}

export default DetailanswerContainer;
