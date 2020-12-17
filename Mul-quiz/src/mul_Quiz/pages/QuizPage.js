import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import QuizlistContainer from "../Container/QuizlistContainer";
import QuizdetailContainer from "../Container/QuizdetailContainer";
import Nav from "../Material/Nav";
import "./QuizPage.scss";
import styled from "styled-components";
import { inject, observer } from "mobx-react";
import Quizstart from "../View/Quizstart";

const Wrap = styled.div``;

@inject("Store")
@observer
class QuizPage extends Component {
  start = (value) => {
    const {quiz} = this.props.Store;
    quiz.setstart(value);
  };
  onTotalScore = (score) => {
    const {quiz} = this.props.Store;
    quiz.TotalScore(score);
  };
  onNextQuiz = (quizObj) => {
    const {quiz} = this.props.Store;
    quiz.nextQuiz(quizObj);
  };

  render() {
    const tempStyle = {
      padding: "0px",
      height: "100%",
    };
    const marginRemove = {
      height: "100%",
      margin: "0px",
    };
    const leftStyle = {
      width: "15%",
      padding: "0px",
      height: "100%",
    };
    const rightStyle = {
      width: "85%",
      background: "#eff2eb",
    };

    const {quiz} = this.props.Store;
    const {
      getgamestart,
      getselectquiz,
      getquizs,
      totalScore,
      getnextquiz
    } = quiz;

    return (
      <Wrap style={tempStyle} className={"navStyle"}>
        <Nav gamestart={getgamestart} start={this.start} />

        {getgamestart && true ? (
          <Grid columns={2} divided style={marginRemove}>
            <Grid.Row style={tempStyle}>
              <Grid.Column style={leftStyle}>
                <QuizlistContainer />
              </Grid.Column>
              <Grid.Column style={rightStyle}>
                <Quizstart
                  quiz={getselectquiz}
                  quizs={getquizs}
                  onTotalScore={this.onTotalScore}
                  onNextQuiz={this.onNextQuiz}
                  totalScore={totalScore}
                  nextQuiz={getnextquiz}
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        ) : (
          <Grid columns={2} divided style={marginRemove}>
            <Grid.Row style={tempStyle}>
              <Grid.Column style={leftStyle}>
                <QuizlistContainer />
              </Grid.Column>

              <Grid.Column style={rightStyle}>
                <QuizdetailContainer />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        )}
      </Wrap>
    );
  }
}

export default QuizPage;
