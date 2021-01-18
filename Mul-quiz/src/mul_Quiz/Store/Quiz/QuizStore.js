import { observable, computed, action } from "mobx";
import Quizs from "../../Quiz";

export default class QuizStore {

  constructor(root){
    this.root = root;
}

  @observable quizs = Quizs;
  @observable selectquiz = Quizs[0];
  @observable hoverquiz;
  @observable gamestart = false;

  @observable checked = false;
  @observable selectedFile = null;

  @observable totalScore = 0;

  @observable nextquiz;
  @computed
  get getquizs() {
    return this.quizs ? this.quizs.slice() : [];
  }

  @computed
  get getselectquiz() {
    return this.selectquiz ? this.selectquiz : {};
  }

  @computed
  get getcheckedquiz() {
    return this.checked ? this.checked : {};
  }

  @computed
  get getgamestart() {
    return this.gamestart ? this.gamestart : false;
  }

  @computed
  get getTotal() {
    return this.totalScore ? this.totalScore : 0;
  }
  @computed
  get getnextquiz() {
    for (var i = 0; i < this.quizs.length; i++) {
      if (this.quizs[i] === this.selectquiz) {
        return this.quizs[i + 1];
      }
    }

    return this.totalScore ? this.totalScore : 0;
  }

  @action
  setQuizProps(name, value) {
    this.selectquiz = {
      ...this.selectquiz,
      [name]: value,
    };
  }

  @action
  selectQuiz(quiz) {
    for (var i = 0; i < this.quizs.length; i++) {
      this.quizs[i].selectCheck = false;
    }
    quiz.selectCheck = quiz.selectCheck === false ? true : false;
    this.selectquiz = quiz;
    console.log("1")
  }

  @action
  setFileProps(event) {
    console.log(event);
    this.selectquiz = {
      ...this.selectquiz,
      [this.selectquiz.imgUrl]: event.target.checked,
    };
  }
  @action
  nextQuiz(quiz) {
    for (var i = 0; i < this.quizs.length; i++) {
      this.quizs[i].selectCheck = false;
      if (this.quizs[i] === quiz) {
        this.selectquiz = this.quizs[i + 1];
      }
    }
    if (this.selectquiz === undefined) {
      alert("Quiz가 끝났습니다. 수고하셨습니다.");
    } else {
      this.selectquiz.selectCheck = true;
    }
  }

  //리스트 삭제
  @action
  Remove(ISBN) {
    this.quizs = this.quizs.filter((quiz) => quiz.ISBN !== ISBN);
    this.quizs[0].selectCheck = true;
    this.selectquiz = this.quizs[0];
  }

  @action
  ItemMouseOver(quiz) {
    this.hoverquiz = quiz;
  }

  @action
  addQuiz(quiz) {
    this.quizs.push(quiz);
    for (var i = 0; i < this.quizs.length; i++) {
      this.quizs[i].selectCheck = false;
    }
    this.quizs[this.quizs.length -1].selectCheck = true;
    this.selectquiz = this.quizs[this.quizs.length -1];
  }

  @action
  Modify(quiz) {
    this.quizs = this.quizs.map((elem) =>
      elem.ISBN === quiz.ISBN ? quiz : elem
    );
  }

  //게임 시작 (Done 클릭시)
  @action
  setstart(value) {
    this.gamestart = value;
    for (var i = 0; i < this.quizs.length; i++) {
      this.quizs[i].selectCheck = false;
    }
    this.quizs[0].selectCheck = true;
    this.selectquiz = this.quizs[0];
  }

  @action
  setlogin(value) {
    this.login = value;
  }
  @action
  TotalScore(score) {
    this.totalScore += score;
  }

  //리스트 전체 삭제
  allRemove() {
    this.quizs = []
  }

}
