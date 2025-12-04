import React, { useState, useEffect } from 'react';
import { Question, TableData } from '../types';
import { Button } from './Button';
import { CheckCircle2, XCircle, ArrowRight, Lightbulb } from 'lucide-react';
import { ProgressBar } from './ProgressBar';

interface QuizCardProps {
  question: Question;
  currentQuestionIndex: number;
  totalQuestions: number;
  onAnswer: (isCorrect: boolean, selectedOption: string) => void;
  onNext: () => void;
}

const TableRenderer: React.FC<{ table: TableData }> = ({ table }) => (
  <div className="mb-6 overflow-hidden rounded-xl border border-slate-200 shadow-sm">
    <div className="bg-slate-100 px-4 py-2 border-b border-slate-200 font-semibold text-slate-700 text-sm uppercase tracking-wide">
      {table.title}
    </div>
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left">
        <thead className="bg-slate-50 text-slate-500 font-medium">
          <tr>
            {table.columns.map((col, idx) => (
              <th key={idx} className="px-4 py-2 border-b border-slate-100 whitespace-nowrap">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row, rIdx) => (
            <tr key={rIdx} className="odd:bg-white even:bg-slate-50 hover:bg-indigo-50/50 transition-colors">
              {row.map((cell, cIdx) => (
                <td key={cIdx} className="px-4 py-2 border-b border-slate-100 text-slate-700 whitespace-nowrap">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export const QuizCard: React.FC<QuizCardProps> = ({
  question,
  currentQuestionIndex,
  totalQuestions,
  onAnswer,
  onNext
}) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  useEffect(() => {
    setSelectedOption(null);
    setIsAnswered(false);
  }, [question]);

  const handleOptionClick = (option: string) => {
    if (isAnswered) return;
    
    setSelectedOption(option);
    setIsAnswered(true);
    
    const isCorrect = option === question.correctAnswer;
    onAnswer(isCorrect, option);
  };

  const getOptionStyles = (option: string) => {
    const base = "w-full text-left p-4 rounded-xl border-2 transition-all duration-200 flex items-center justify-between group relative overflow-hidden";
    
    if (!isAnswered) {
      return `${base} border-slate-200 hover:border-indigo-400 hover:bg-indigo-50 bg-white`;
    }

    if (option === question.correctAnswer) {
      return `${base} border-green-500 bg-green-50 text-green-800 font-medium shadow-md shadow-green-100`;
    }

    if (option === selectedOption && option !== question.correctAnswer) {
      return `${base} border-red-500 bg-red-50 text-red-800 font-medium`;
    }

    return `${base} border-slate-100 text-slate-400 bg-slate-50 opacity-50`;
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="mb-6 space-y-2">
        <div className="flex justify-between text-sm font-medium text-slate-500 uppercase tracking-wider">
          <span>Question {currentQuestionIndex + 1}</span>
          <span>{totalQuestions} total</span>
        </div>
        <ProgressBar current={currentQuestionIndex + 1} total={totalQuestions} />
      </div>

      <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-6 md:p-8 border border-white">
        
        {/* Render Scenario Tables if present */}
        {question.tables && (
          <div className="mb-8 grid grid-cols-1 lg:grid-cols-2 gap-4">
            {question.tables.map((table, idx) => (
              <TableRenderer key={idx} table={table} />
            ))}
          </div>
        )}

        <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-8 leading-snug">
          {question.text}
        </h2>

        <div className="space-y-3">
          {question.options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => handleOptionClick(option)}
              disabled={isAnswered}
              className={getOptionStyles(option)}
            >
              <span className="z-10 relative">{option}</span>
              {isAnswered && option === question.correctAnswer && (
                <CheckCircle2 className="w-6 h-6 text-green-500 z-10 relative shrink-0 ml-2" />
              )}
              {isAnswered && option === selectedOption && option !== question.correctAnswer && (
                <XCircle className="w-6 h-6 text-red-500 z-10 relative shrink-0 ml-2" />
              )}
            </button>
          ))}
        </div>

        {/* Explanation Section */}
        <div className={`mt-8 overflow-hidden transition-all duration-500 ${isAnswered ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          {question.explanation && (
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 mb-6 flex gap-4">
              <div className="bg-blue-100 p-2 rounded-lg h-fit">
                <Lightbulb className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h4 className="font-bold text-blue-800 mb-1">Explanation</h4>
                <p className="text-blue-700 text-sm leading-relaxed whitespace-pre-line">
                  {question.explanation}
                </p>
              </div>
            </div>
          )}
          
          <div className="flex justify-end">
            <Button onClick={onNext} className="pl-8 pr-6">
              Next Question <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};