import React, { useState } from "react";
import { QuestionCard } from "./QuestionCard";
import { fetchQuizQuestions } from "../API/API";
import { Difficulty } from "../API/API";

const TOTAL_QUESTIONS = 10;

export const Quiz = () => {
  // const startTrivia = async (params: any) => {};

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};

  const nextQuestion = () => {};

  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  console.log(fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY));
  return (
    <div className="App">
      <h1>REACT QUIZ</h1>
      <button className="start">Start</button>
      <p>Score :</p>
      <p>Loading Questions ...</p>
      {/* <QuestionCard
        questionNr={number + 1}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswer={userAnswers ? userAnswers[number] : undefined}
        callback={checkAnswer}
      /> */}
      <button className="next" onClick={nextQuestion}>
        Next Question
      </button>
    </div>
  );
};
