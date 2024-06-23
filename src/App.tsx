import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import Admin from './components/Admin/Admin';
import QuizForm from './components/Admin/QuizForm';
import Quiz from './components/Quiz/Quiz';
import Result from './components/Result/Result';

interface Question {
  question: string;
  options: string[];
  answer: string;
}

interface Quizs {
  title: string;
  questions: Question[];
}

// Quiz component updated to handle nullable quiz prop
interface QuizProps {
  quiz: Quizs | null;
  onSubmitQuiz: (submittedAnswers: string[]) => void;
}

const QuizComponent: React.FC<QuizProps> = ({ quiz, onSubmitQuiz }) => {
  if (!quiz) {
    return (
      <div className='mt-50 flex items-center justify-center h-full text-[50] font-extrabold'>
        No quiz available
      </div>
    );
  }

  // Render quiz components
  return (
    <Quiz quiz={quiz} onSubmitQuiz={onSubmitQuiz} />
  );
};

const App: React.FC = () => {
  const [createdQuiz, setCreatedQuiz] = useState<Quizs | null>(null);
  const [answers, setAnswers] = useState<string[]>([]);

  const handleCreateQuiz = (quiz: Quizs) => {
    setCreatedQuiz(quiz);
  };

  const handleSubmitQuiz = (submittedAnswers: string[]) => {
    setAnswers(submittedAnswers);
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/quizform" element={<QuizForm onCreateQuiz={handleCreateQuiz} />} />
          <Route
            path="/quiz"
            element={<QuizComponent quiz={createdQuiz} onSubmitQuiz={handleSubmitQuiz} />}
          />
          <Route path="/result" element={<Result quiz={createdQuiz} answers={answers} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
