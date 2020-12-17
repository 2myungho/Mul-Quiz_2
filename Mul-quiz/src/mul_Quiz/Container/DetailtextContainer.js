import React, { Component } from 'react';
import Detailtext from '../View/Detailtext';
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
        const getselectquiz = quiz;

        return (
            <div>
                <Detailtext quiz={getselectquiz} setQuiz={this.setQuiz}/>
            </div>
        );
    }
}

export default DetailtextContainer;