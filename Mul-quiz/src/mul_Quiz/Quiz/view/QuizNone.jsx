import React from 'react';
import { Header, Icon } from "semantic-ui-react";

const QuizNone = () => {
    return (
        <div
            style={{
                position:"relative",
                top:"50%",
                left:"50%",
                transform:"translate(-50%,-50%)",
                padding: "0em",
                marginTop: "2em",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Header
                as="h1"
                icon
                onClick={() => {
                }}
            >
                <Icon name="play" />
                <Header>퀴즈 생성하기</Header>
                <Header.Subheader>
                    현재 진행중인 퀴즈가 존재하지 않습니다. 퀴즈를 생성해보세요.
                </Header.Subheader>
            </Header>
        </div>
    );
};

export default QuizNone;