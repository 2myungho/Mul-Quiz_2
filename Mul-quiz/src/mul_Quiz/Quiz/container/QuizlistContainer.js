import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import Quizlist from "../view/Quizlist";
import generateId from "../../IDGenerator";

@inject("Store")
@observer
class QuizlistContainer extends Component {
  onRemove = () => {
    const {quiz} = this.props.Store;
    const ISBN = quiz.selectquiz.ISBN;
    if(window.confirm("해당 항목을 삭제하겠습니까?") == true){
      quiz.Remove(ISBN);
    } else{
      return false;
    }
    
  };

  onSelect = (quizObj,e) => {
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

  //리스트 전체 삭제
  onAllRemove = () => {
    const {quiz} = this.props.Store;
    if (window.confirm("정말 리스트 전체 삭제를 하시겠습니까?") == true){
      quiz.allRemove()
    }else {
      return false;
    }
    
  }

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
        onAllRemove={this.onAllRemove}
      />
    );
  }
}

export default QuizlistContainer;
