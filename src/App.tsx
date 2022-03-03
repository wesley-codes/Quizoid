import React, { useState } from "react";
import QuestionCard from "./Components/QuestionCard";
import {
  fetchQuestions,
  Difficulty,
  QuestionState,
} from "./Components/http";
import Quiz from "./Assets/Images/Quiz.svg";
import NavBar from "./Components/Navbar/NavBar";
import {
  Wrapper,
  StartButton,
  Container,
  Score,
  QuestionWrapper,
  Image,
  ImageContainer,
  NextButton,
  LoadingSpinner,
} from "./Components/Index.styles";
import SVGComponent from "./Components/SVG/ArrowSvg";
export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

function App() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);
    const newQuestions = await fetchQuestions(10, Difficulty.EASY);

    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = e.currentTarget.value;
      const correct = questions[number].correct_answer === answer; //correct answer

      if (correct) setScore((prev) => prev + 1);

      const answerObject = {
        question: questions[number].question,

        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      console.log(answerObject);

      setUserAnswers((prevState) => [...prevState, answerObject]);
    }
  };

  const nextQuestion = () => {
    const nextQuestion = number + 1;
    if (nextQuestion === totalQuestions) {
      setGameOver(true);
    } else {
      setNumber(nextQuestion);
    }
  };
  const totalQuestions: number = 10;

  return (
    <Container>
      <NavBar title="Quiz" />
      {gameOver || userAnswers.length === totalQuestions ? (
        <Wrapper>
          {" "}
          <StartButton onClick={startTrivia}>Start</StartButton>
        </Wrapper>
      ) : null}
      {!gameOver ? <Score>Score: {score}</Score> : null}
      <QuestionWrapper>
        {loading && <LoadingSpinner />}
        {!loading && !gameOver && (
          <div>
            <ImageContainer>
              <Image src={Quiz} alt="" />
            </ImageContainer>

            <QuestionCard
              questionNo={number + 1}
              answers={questions[number].answer}
              totalQuestions={totalQuestions}
              question={questions[number].question}
              userAnswer={userAnswers ? userAnswers[number] : undefined}
              callBack={checkAnswer}
            />
          </div>
        )}
      </QuestionWrapper>
      {!gameOver &&
      !loading &&
      userAnswers.length === number + 1 &&
      number !== totalQuestions - 1 ? (
        <NextButton onClick={nextQuestion}>
          Next Question <SVGComponent />{" "}
        </NextButton>
      ) : null}{" "}
    </Container>
  );
}

export default App;
