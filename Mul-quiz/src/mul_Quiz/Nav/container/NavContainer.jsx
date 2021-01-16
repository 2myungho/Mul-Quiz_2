import React, { Component } from 'react';
import { inject, observer } from "mobx-react";
import Nav from '../view/Nav'

@inject("Store")
@observer
class NavContainer extends Component {
    start = (value) => {
        const {quiz} = this.props.Store;
        quiz.setstart(value);
    };
    render() {
        const {quiz} = this.props.Store;
        const {
            getgamestart,
        } = quiz;
        return (
            <Nav gamestart={getgamestart} start={this.start} /> 
        );
    }
}

export default NavContainer;