import React, { Component } from 'react';
import Detailtext from '../view/Detailtext';
import {inject,observer} from "mobx-react"
@inject("Store")

@observer
class DetailtextContainer extends Component {

    setQuiz =(name,value)=>{
        const {quiz} = this.props.Store;
        quiz.setQuizProps(name,value);
    }

    
    render() {
        const {quiz} = this.props.Store;
        const {getselectquiz} = quiz;
        console.log(quiz.quizs)
        console.log(getselectquiz)

        return (
            <div>
                <Detailtext quiz={getselectquiz} setQuiz={this.setQuiz}/>
            </div>
        );
    }
}

export default DetailtextContainer;