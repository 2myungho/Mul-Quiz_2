import React,{useRef,useEffect} from 'react';
import Quizitem from "./Quizitem";
import { ItemGroup } from "semantic-ui-react";
import styled from "styled-components";
import Add from "./item/Add";
import Import from "./item/Import";
import AllRemove from "./item/AllRemove";

const MapList = styled.div`
  box-shadow: 0px 0px 4px #b3b3b3;
  height: 100%;
  overflow: scroll;
  .center {
    display: block;
    margin: 0 auto;
  }
  .import > button {
    margin-top: 20px;
    width:80%;
    font-size:16px;
  }
`;

const Quizlist = ({
  quizs,
  onRemove,
  onSelect,
  onAddQuiz,
  selectquiz,
  onItemMouseOver,
  hoverquiz,
  gamestart,
  onAllRemove
}) => {
  const box = useRef(null);

  const scrollToBottom = () => {
    const { scrollHeight, clientHeight } = box.current;
    box.current.scrollTop = scrollHeight - clientHeight;
  };
  useEffect(() => {
    scrollToBottom()
  },[quizs]) 

  const quizlist = quizs.map((quiz, index) => (
    <Quizitem
      index={index + 1}
      quiz={quiz}
      onRemove={onRemove}
      onSelect={onSelect}
      onAddQuiz={onAddQuiz}
      selectquiz={selectquiz}
      onItemMouseOver={onItemMouseOver}
      hoverquiz={hoverquiz}
      gamestart={gamestart}
    />
  ));

  return (
    <MapList ref={box}>
      <ItemGroup>{quizlist}</ItemGroup>
      {gamestart && true ? "" :
        <>
          <Add onAddQuiz={onAddQuiz} scrollToBottom={scrollToBottom} />
          <AllRemove onAllRemove={onAllRemove} />
        </>
      }
      {/* <div className={"import"}>
          <Import />
        </div> */}
    </MapList>
  );
};

export default Quizlist;