import React from "react";
import { shuffleArray } from "./Utils";


export type Question = {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string;
  };

  export type QuestionState = Question & { answer: string[] };// adding a new property to the question type


export enum Difficulty {
  EASY = "easy",
  MEDUIM = "medium",
  HARD = "hard",
}









export const fetchQuestions = async (
  amount: number,
  difficulty: Difficulty
) => {
  const url = `http://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;

  const response = await fetch(url);
  const data = await response.json();
   return data.results.map((question: Question) => ({
    ...question,
    answer: shuffleArray([
      ...question.incorrect_answers,
        question.correct_answer,
      
    ]),

    
  }));
  
};
