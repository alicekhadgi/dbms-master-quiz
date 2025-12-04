export interface TableData {
  title: string;
  columns: string[];
  rows: (string | number)[][];
}

export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: string;
  tables?: TableData[]; // Context for practical questions
  explanation?: string; // Explanation shown after answering
}

export interface AnswerRecord {
  questionId: number;
  isCorrect: boolean;
  selectedOption: string;
  correctOption: string;
}

export interface QuizConfig {
  id: string;
  title: string;
  description: string;
  questions: Question[];
}

export enum GameState {
  START = 'START',
  PLAYING = 'PLAYING',
  FINISHED = 'FINISHED'
}