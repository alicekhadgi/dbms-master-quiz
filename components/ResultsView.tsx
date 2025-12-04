import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { Button } from './Button';
import { AnswerRecord } from '../types';
import { RefreshCw, Trophy, Target, AlertCircle, Home } from 'lucide-react';

interface ResultsViewProps {
  score: number;
  totalQuestions: number;
  answers: AnswerRecord[];
  onRestart: () => void;
  onHome: () => void;
}

export const ResultsView: React.FC<ResultsViewProps> = ({ score, totalQuestions, answers, onRestart, onHome }) => {
  const percentage = Math.round((score / totalQuestions) * 100);
  const incorrect = totalQuestions - score;

  const data = [
    { name: 'Correct', value: score },
    { name: 'Incorrect', value: incorrect },
  ];

  const COLORS = ['#22c55e', '#ef4444'];

  const getMessage = () => {
    if (percentage === 100) return "Perfect Score! You're a DBMS Master!";
    if (percentage >= 80) return "Excellent work! You really know your stuff.";
    if (percentage >= 60) return "Good job! A little more study and you'll be perfect.";
    return "Keep practicing! You'll get it next time.";
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-8 md:p-12 text-center animate-fade-in">
      <div className="mb-8 flex justify-center">
        <div className="relative">
            <div className="w-24 h-24 bg-yellow-100 rounded-full flex items-center justify-center animate-bounce">
                <Trophy className="w-12 h-12 text-yellow-600" />
            </div>
            <div className="absolute -top-2 -right-2 bg-indigo-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg border-4 border-white">
                {percentage}%
            </div>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-slate-800 mb-2">Quiz Completed!</h2>
      <p className="text-slate-500 text-lg mb-8">{getMessage()}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
            <PieChart>
                <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
                >
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
                </Pie>
                <Tooltip />
                <Legend verticalAlign="bottom" height={36} iconType="circle" />
            </PieChart>
            </ResponsiveContainer>
        </div>

        <div className="flex flex-col justify-center space-y-4">
            <div className="bg-green-50 p-4 rounded-xl flex items-center gap-4 border border-green-100">
                <div className="p-2 bg-green-100 rounded-lg">
                    <Target className="w-6 h-6 text-green-600" />
                </div>
                <div className="text-left">
                    <p className="text-sm text-green-600 font-semibold uppercase">Correct Answers</p>
                    <p className="text-2xl font-bold text-green-700">{score}</p>
                </div>
            </div>

            <div className="bg-red-50 p-4 rounded-xl flex items-center gap-4 border border-red-100">
                <div className="p-2 bg-red-100 rounded-lg">
                    <AlertCircle className="w-6 h-6 text-red-600" />
                </div>
                <div className="text-left">
                    <p className="text-sm text-red-600 font-semibold uppercase">Incorrect Answers</p>
                    <p className="text-2xl font-bold text-red-700">{incorrect}</p>
                </div>
            </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button onClick={onRestart} size="lg" className="w-full sm:w-auto">
          <RefreshCw className="w-5 h-5" /> Take Quiz Again
        </Button>
        <Button onClick={onHome} variant="secondary" size="lg" className="w-full sm:w-auto">
          <Home className="w-5 h-5" /> Choose Another Quiz
        </Button>
      </div>
    </div>
  );
};