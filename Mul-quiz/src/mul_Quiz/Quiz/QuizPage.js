import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import QuizlistContainer from "./container/QuizlistContainer";
import QuizdetailContainer from "./container/QuizdetailContainer";
import QuizNone from "./view/QuizNone"
import "./QuizPage.scss";
import styled from "styled-components";
import { inject, observer } from "mobx-react";
import Quizstart from "./view/Quizstart";
import { isWidthDown } from "@material-ui/core";

const Wrap = styled.div``;

@inject("Store")
@observer
class QuizPage extends Component {
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
      width: "280px",
      padding: "0px",
      height: "100%",
      position:"absolute",
      top:"0",
      left:"0"
    };
    const rightStyle = {
      background: "#eff2eb",
      width:"100%",
      marginLeft:"280px"
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
                {getquizs.length == 0 ? <QuizNone /> : <QuizdetailContainer />}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        )}
      </Wrap>
    );
  }
}

export default QuizPage;
