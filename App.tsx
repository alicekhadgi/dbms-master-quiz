import React, { useState, useCallback } from 'react';
import { QUIZZES } from './constants';
import { QuizCard } from './components/QuizCard';
import { ResultsView } from './components/ResultsView';
import { Button } from './components/Button';
import { Question, AnswerRecord, GameState, QuizConfig } from './types';
import { PlayCircle, BookOpen, Database, Sigma, ArrowLeft, Terminal, Network, Layers, Table, GraduationCap, ClipboardList } from 'lucide-react';

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>(GameState.START);
  const [selectedQuiz, setSelectedQuiz] = useState<QuizConfig | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<AnswerRecord[]>([]);

  const selectQuiz = (quiz: QuizConfig) => {
    setSelectedQuiz(quiz);
  };

  const clearSelection = () => {
    setSelectedQuiz(null);
    setGameState(GameState.START);
  }

  const startQuiz = useCallback(() => {
    if (!selectedQuiz) return;
    
    // Shuffle questions
    const shuffled = [...selectedQuiz.questions].sort(() => Math.random() - 0.5);
    setQuestions(shuffled);
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setGameState(GameState.PLAYING);
  }, [selectedQuiz]);

  const handleAnswer = (isCorrect: boolean, selectedOption: string) => {
    const currentQuestion = questions[currentQuestionIndex];
    setAnswers(prev => [
      ...prev,
      {
        questionId: currentQuestion.id,
        isCorrect,
        selectedOption,
        correctOption: currentQuestion.correctAnswer
      }
    ]);
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setGameState(GameState.FINISHED);
    }
  };

  const calculateScore = () => answers.filter(a => a.isCorrect).length;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 px-6 py-4 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div 
            className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
            onClick={clearSelection}
          >
            <div className="bg-indigo-600 p-2 rounded-lg">
                <BookOpen className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-xl font-bold text-slate-900 hidden sm:block">DBMS Master Quiz</h1>
          </div>
          {gameState === GameState.PLAYING && (
             <div className="text-sm font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                Score: {calculateScore()} / {answers.length}
             </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-6">
        
        {/* Quiz Selection Screen */}
        {gameState === GameState.START && !selectedQuiz && (
            <div className="max-w-4xl w-full mx-auto space-y-12 animate-fade-in-up">
                <div className="text-center space-y-4">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                        Select Your <span className="text-indigo-600">Challenge</span>
                    </h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Choose a topic to test your knowledge. From basic concepts to advanced query languages.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {QUIZZES.map((quiz) => (
                        <button 
                            key={quiz.id}
                            onClick={() => selectQuiz(quiz)}
                            className="group relative bg-white rounded-3xl p-8 text-left shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border-2 border-transparent hover:border-indigo-100"
                        >
                            <div className="absolute top-8 right-8 bg-indigo-50 p-3 rounded-2xl group-hover:bg-indigo-100 transition-colors">
                                {quiz.id === 'dbms-concepts' ? (
                                    <Database className="w-8 h-8 text-indigo-600" />
                                ) : quiz.id === 'relational-algebra' ? (
                                    <Sigma className="w-8 h-8 text-indigo-600" />
                                ) : quiz.id === 'sql-mastery' ? (
                                    <Terminal className="w-8 h-8 text-indigo-600" />
                                ) : quiz.id === 'database-design' ? (
                                    <Network className="w-8 h-8 text-indigo-600" />
                                ) : quiz.id === 'advanced-modeling' ? (
                                    <Layers className="w-8 h-8 text-indigo-600" />
                                ) : quiz.id === 'normalization' ? (
                                    <Table className="w-8 h-8 text-indigo-600" />
                                ) : quiz.id === 'practical-scenarios' ? (
                                    <ClipboardList className="w-8 h-8 text-indigo-600" />
                                ) : (
                                    <GraduationCap className="w-8 h-8 text-indigo-600" />
                                )}
                            </div>
                            
                            <div className="space-y-4">
                                <span className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wide">
                                    {quiz.questions.length} Questions
                                </span>
                                <h3 className="text-2xl font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">
                                    {quiz.title}
                                </h3>
                                <p className="text-slate-500 pr-12">
                                    {quiz.description}
                                </p>
                                <div className="pt-4 flex items-center text-indigo-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0">
                                    Start Quiz <PlayCircle className="w-5 h-5 ml-2" />
                                </div>
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        )}

        {/* Quiz Intro Screen */}
        {gameState === GameState.START && selectedQuiz && (
          <div className="text-center max-w-lg mx-auto space-y-8 animate-fade-in-up">
            <button 
                onClick={clearSelection}
                className="absolute top-24 left-6 md:left-auto md:top-auto md:absolute md:top-24 text-slate-400 hover:text-slate-600 flex items-center gap-2 transition-colors"
            >
                <ArrowLeft className="w-5 h-5" /> Back
            </button>

            <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                {selectedQuiz.title}
                </h1>
                <p className="text-lg text-slate-600 leading-relaxed">
                {selectedQuiz.description}
                </p>
            </div>
            
            <div className="p-6 bg-white rounded-2xl shadow-lg border border-slate-100 flex justify-center">
                <div className="text-center">
                    <div className="text-3xl font-bold text-indigo-600">{selectedQuiz.questions.length}</div>
                    <div className="text-sm text-slate-500 font-medium">Questions</div>
                </div>
            </div>

            <Button onClick={startQuiz} size="lg" className="w-full md:w-auto text-lg px-12 py-4 shadow-indigo-300 shadow-xl">
              <PlayCircle className="w-6 h-6" /> Start Quiz Now
            </Button>
          </div>
        )}

        {gameState === GameState.PLAYING && questions.length > 0 && (
          <QuizCard
            question={questions[currentQuestionIndex]}
            currentQuestionIndex={currentQuestionIndex}
            totalQuestions={questions.length}
            onAnswer={handleAnswer}
            onNext={handleNext}
          />
        )}

        {gameState === GameState.FINISHED && (
          <ResultsView
            score={calculateScore()}
            totalQuestions={questions.length}
            answers={answers}
            onRestart={startQuiz}
            onHome={clearSelection}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="py-6 text-center text-slate-400 text-sm">
        <p>&copy; {new Date().getFullYear()} DBMS Master Quiz. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;