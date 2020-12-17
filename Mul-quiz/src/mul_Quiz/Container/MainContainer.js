import React, { Component } from 'react';
import Nav from '../main/Nav';
import Content from '../main/Content'
import {inject,observer} from "mobx-react"

@inject("Store")
@observer
class NavContainer extends Component {
    onLoginClick = () =>{
        const {auth} = this.props.Store;
        auth.login = false;
    }
    render() {
        const {auth} = this.props.Store;
        const {login} = auth;
        return (
            <>
                <Nav login={login} onLoginClick={this.onLoginClick} />
                <Content login={login} />
            </>
        )
    }
}

export default NavContainer;