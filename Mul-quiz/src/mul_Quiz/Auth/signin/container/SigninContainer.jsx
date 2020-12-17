import React, { Component } from 'react';
import {inject,observer} from "mobx-react"
import LogTemplate from "../../LogTemplate";

@inject("Store")

@observer
class SigninContainer extends Component {

    onChangeId = (value) => {
        const {auth} = this.props.Store;
        auth.changeId(value)
    }
    onChangePw = (value) => {
        const {auth} = this.props.Store;
        auth.changePw(value)
    }

    onSubmitLog = (preventDefault) => {
        const {auth} = this.props.Store;
        auth.preventDefault = preventDefault;
        
        if(this.user === this.idValue){
            if(auth.passwd === auth.pwValue){
                auth.login = true;
                alert("로그인이 완료되었습니다.")
                this.props.history.push("/");
            }else{
                auth.error = auth.error = "id , 비밀번호를 확인해 주세요."
              }
        }else{
            auth.error = auth.error = "id , 비밀번호를 입력해 주세요."
        }
    }
    

    render() {
        const {auth} = this.props.Store;
        const {error} = auth;
        return <LogTemplate 
            history={this.props.history}
            onChangeId={this.onChangeId}
            onChangePw={this.onChangePw}
            onSubmitLog={this.onSubmitLog}
            error={error}
        />
    }
}

export default SigninContainer;