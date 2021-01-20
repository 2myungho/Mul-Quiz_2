import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import palette from '../../signStyle/palette';

//* 회원가입 또는 로그인 폼을 보여줍니다.

const AuthFormBlock = styled.div`
 h3 {
   margin: 0;
   color: ${palette.gray[9]};
   font-size:1.5rem;
   margin-bottom: 1rem;
 }
 .labelText{
   font-weight:bold;
   color:#294376;
   font-size:20px;
   margin:20px 0 15px;
   display:block;
 }
`;

//* 스타일링된 input
const StyledInput = styled.input`
 font-size: 1.2rem;
 display:block;
 height:50px;
 border: none;
 padding-left:20px;
 padding-bottom: 0.5rem;
 outline: none;
 width: 100%;
 box-shadow: 4px 3px 6px 0px #c9caf1;
 border-radius:20px;
 &:focus {
   background-color:#fff;
   color: $oc-teal-7;
 }
 & + & {
   margin-top: 1rem;
 }
`;

//* 폼 하단에 로그인 혹은 회원가입 링크를 보여줌

const Footer = styled.div`
 font-weight:600;
 margin-top: 2rem;
 text-align: right;
 font-size:1.5rem;
 a {
   color: ${palette.gray[7]};
   text-decoration: underline;
   text-underline-position: under;
   &:hover {
     color: ${palette.gray[9]};
   }
 }
`;

const ButtonWithMarginTop = styled.button`
    width:100%;
    line-height:50px;
    border: none;
    border-radius: 4px;
    font-size: 18px;
    font-weight: bold;
    padding: 0.25rem 1rem;
    color: white;
    outline: none;
    cursor: pointer;
    margin-top: 60px;
    background:#294376;
    opacity:0.9;

    &:hover{
        background:#5e80c3;
    }
`;

const ButtonWithMarginTop_kakao = styled.button`
    width:100%;
    line-height:50px;
    border: none;
    border-radius: 4px;
    font-size: 18px;
    font-weight: bold;
    padding: 0.25rem 1rem;
    color: 000000;
    outline: none;
    cursor: pointer;
    margin-top: 60px;
    background:#ffe812;
    opacity:0.9;

    &:hover{
        background:#f9eb67;
    }
`;

//* 에러를 보여줍니다

const ErrorMessage = styled.div`
 color: red;
 text-align: center;
 font-size: 1rem;
 margin-top: 1rem;
 margin-bottom: -1rem;
 font-weight:600;
`;

class logIn extends Component {

  render() {
    const {
      onChangeId,
      onChangePw,
      error,
      onSubmitLog,
    } = this.props;
    return (
      <AuthFormBlock>
        <h3>Signin</h3>
        <form onSubmit={(e) => onSubmitLog(e.preventDefault())}>
          <label htmlfor="username" className="labelText">ID</label>
          <StyledInput
            name="username"
            placeholder="Email"
            onChange={(e) => onChangeId(e.target.value)}
          />
          <label htmlfor="username" className="labelText">PassWord</label>
          <StyledInput
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) => onChangePw(e.target.value)}
            autocomplete="off"
          />
          {error && <ErrorMessage>{error}</ErrorMessage>}
          <ButtonWithMarginTop cyan fullWidth>
            Signin
        </ButtonWithMarginTop>
          <ButtonWithMarginTop_kakao cyan fullWidth style={{ marginTop: "1.5rem" }}>
            KaKao Signin
        </ButtonWithMarginTop_kakao>

        </form>
        <Footer>
          <Link to="/signup">SignUp</Link>
        </Footer>
      </AuthFormBlock>
    );
  }
}

export default logIn;