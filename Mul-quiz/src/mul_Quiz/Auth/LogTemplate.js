import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// * 회원가입 / 로그인 페이지의 레이아웃을 담당하는 컴포넌트.
/* 화면 전체를 채움 */
const AuthTemplateBlock = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background:url("/quiz_images/gameImg.jpg");
  /* flex로 내부 내용 중앙 정렬 */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

/* 흰색 박스 */
const WhiteBox = styled.div`
  .logo-area {
    display: block;
    margin-bottom: 10px;
    text-align: center;
    font-weight: bold;
    letter-spacing: 2px;
    font-size:30px;
    img{
      opacity:0.8;
    }
    .logoForm{
      margin:0 auto;
      width:40%;
      display:block;
      .logoImg{
        width:100%;
      }
    }
  }
  box-shadow: 0px 0px 10px 2px rgba(255,255,255,0.9);
  padding:50px 30px;
  width: 550px;
  background:rgba(255,255,255,0.8);
  border-radius: 10px;
  box-sizing:border-box;
`;

class LogTemplate extends Component {
    render() {

        return (
            <AuthTemplateBlock>
                <WhiteBox>
                    <div className="logo-area">
                        <Link to="/" className={"logoForm"}>
                          <img src="/logo_Images/logLogo.png" alt={"loginLogo"} className={"logoImg"}/>
                        </Link>
                    </div>
                    {this.props.children} 
                </WhiteBox>
            </AuthTemplateBlock>
        );
    }
}

export default LogTemplate;