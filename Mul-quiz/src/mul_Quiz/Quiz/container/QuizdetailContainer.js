import React, { Component } from 'react';
import {inject,observer} from "mobx-react"
import Quizdetail from '../view/Quizdetail';

@inject("Store")

@observer
class QuizdetailContainer extends Component {

    onModify=()=>{
        const {quiz} = this.props.Store;
        const selectquiz = quiz.getselectquiz;
        console.log(selectquiz)
        quiz.Modify(selectquiz);
    }

    render() {
        
        return (
            <div><Quizdetail onModify={this.onModify}/></div>
        );
    }
}


export default QuizdetailContainer;