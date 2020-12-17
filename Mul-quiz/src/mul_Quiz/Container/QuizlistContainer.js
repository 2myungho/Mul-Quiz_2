import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import Quizlist from "../View/Quizlist";
import generateId from "../IDGenerator";

@inject("Store")
@observer
class QuizlistContainer extends Component {
  onRemove = () => {
    const {quiz} = this.props.Store;
    const ISBN = quiz.selectquiz.ISBN;
    quiz.Remove(ISBN);
  };
  onSelect = (quizObj) => {
    const {quiz} = this.props.Store;
    quiz.selectQuiz(quizObj);
  };

  onAddQuiz = () => {
    let quizObj = {
      ISBN: generateId(5),
      check1: false,
      check2: false,
      check3: false,
      check4: false,
    };
    const {quiz} = this.props.Store;
    quiz.addQuiz(quizObj);
  };
  onItemMouseOver = (quizObj) => {
    const {quiz} = this.props.Store;
    quiz.ItemMouseOver(quizObj);
  };

  render() {
    const {quiz} = this.props.Store;
    const {getquizs, selectquiz, hoverquiz, getgamestart} = quiz;

    return (
      <Quizlist
        quizs={getquizs}
        onRemove={this.onRemove}
        onSelect={this.onSelect}
        onAddQuiz={this.onAddQuiz}
        selectquiz={selectquiz}
        onItemMouseOver={this.onItemMouseOver}
        hoverquiz={hoverquiz}
        gamestart={getgamestart}
      />
    );
  }
}

export default QuizlistContainer;
