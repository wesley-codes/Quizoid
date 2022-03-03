import React from "react";
import { AnswerObject } from "../App";
import { ButtonContainer, OptionsButtons,ButtonWrapper, Question, QuestionContainer, QuestionContinerBox, QuestionNo } from "./Index.styles";
type Props = {
  question: string;
  answers: string[];
  callBack: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNo: number;
  totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callBack,
  userAnswer,
  questionNo,
  totalQuestions,
}) => {
  return (
    <QuestionContinerBox>
      <QuestionNo>
        Question: {questionNo}/ {totalQuestions}
      </QuestionNo>
    <QuestionContainer>
      
      <Question dangerouslySetInnerHTML={{ __html: question }} />
      <ButtonContainer>
        {answers.map((answer) => (
          <ButtonWrapper key={answer}
          >
            <OptionsButtons
              disabled={userAnswer ? true : false}
              value={answer}
              onClick={callBack}
              correct = {userAnswer?.correctAnswer===answer}// add proops from styled components
         userClicked={userAnswer?.answer === answer}// add props from styled components

            >
              <span dangerouslySetInnerHTML={{ __html: answer }} />
            </OptionsButtons>
          </ButtonWrapper>
        ))}
      </ButtonContainer>
      </QuestionContainer>
      </QuestionContinerBox>
  );
};





export default QuestionCard;
