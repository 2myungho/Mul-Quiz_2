import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import palette from '../../signStyle/palette';

//회원가입 내용
const AuthFormBlock = styled.div`
 h3 {
   margin: 0;
   color: ${palette.gray[9]};
   margin-bottom: 1rem;
   font-size:1.5rem;
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

const SignupView = () => {
    return (
        <AuthFormBlock>
            <h3>SignUp</h3>
            <form>
                <label for="username" className="labelText">Email</label>
                <StyledInput
                    name="username"
                    placeholder="Email"
                />
                <label for="password" className="labelText">PassWord</label>
                <StyledInput
                    type="password"
                    name="password"
                    placeholder="PassWord"
                />
                {/* <label for="passwordConfirm" className="labelText">비밀번호 확인</label>
                <StyledInput
                    autoComplete="new-password"
                    name="passwordConfirm"
                    placeholder="비밀번호 확인"
                    type="password"
                /> */}
                <ButtonWithMarginTop cyan fullWidth>
                    SignUp
                </ButtonWithMarginTop>
            </form>
            <Footer>
                <Link to="/signin">SignIn</Link>
            </Footer>
        </AuthFormBlock>
    );
};

export default SignupView;