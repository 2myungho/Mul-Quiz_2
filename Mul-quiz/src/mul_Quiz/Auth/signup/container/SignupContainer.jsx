import React, { Component } from 'react';
import {inject,observer} from "mobx-react"
import LogTemplate from "../../LogTemplate";
import SignupView from '../view/SignupView';

@inject("Store")
@observer
class SignUpContainer extends Component {
    render() {
        return (
            <LogTemplate>
                <SignupView />
            </LogTemplate>
        )
    }
}

export default SignUpContainer;