import React, { useState, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';

interface Question {
    question: string;
    options: string[];
    answer: string;
}

interface Quiz {
    title: string;
    questions: Question[];
}

interface AdminProps {
    onCreateQuiz: (quiz: Quiz) => void;
}

const QuizForm: React.FC<AdminProps> = ({ onCreateQuiz }) => {
    const [title, setTitle] = useState<string>('');
    const [questions, setQuestions] = useState<Question[]>([]);
    const [currentQuestion, setCurrentQuestion] = useState<string>('');
    const [currentOptions, setCurrentOptions] = useState<string[]>(['', '', '', '']);
    const [currentAnswer, setCurrentAnswer] = useState<string>('');
    const navigate = useNavigate();

    const addQuestion = () => {
        setQuestions([...questions, {
            question: currentQuestion,
            options: currentOptions,
            answer: currentAnswer
        }]);
        setCurrentQuestion('');
        setCurrentOptions(['', '', '', '']);
        setCurrentAnswer('');
    };

    const createQuiz = () => {
        if (title && questions.length) {
            onCreateQuiz({ title, questions });
            setTitle('');
            setQuestions([]);
            navigate('/', { replace: true });
        } else {
            alert('Please provide a title and at least one question.');
        }
    };

    const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };

    const handleQuestionChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCurrentQuestion(e.target.value);
    };

    const handleOptionChange = (index: number, e: ChangeEvent<HTMLInputElement>) => {
        const newOptions = [...currentOptions];
        newOptions[index] = e.target.value;
        setCurrentOptions(newOptions);
    };

    const handleAnswerChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCurrentAnswer(e.target.value);
    };

    return (
        <div className="max-w-xl mx-auto p-6 bg-gray-800 rounded-lg shadow-lg">
            <h2 className="text-3xl mb-6 text-center text-white">Create Quiz</h2>
            <input
                type="text"
                value={title}
                onChange={handleTitleChange}
                placeholder="Quiz Title"
                className="border border-gray-600 p-3 mb-4 w-full rounded focus:outline-none focus:border-blue-500"
            />
            <div className="mb-6">
                <input
                    type="text"
                    value={currentQuestion}
                    onChange={handleQuestionChange}
                    placeholder="Question"
                    className="border border-gray-600 p-3 mb-2 w-full rounded focus:outline-none focus:border-blue-500"
                />
                {currentOptions.map((option, index) => (
                    <input
                        key={index}
                        type="text"
                        value={option}
                        onChange={(e) => handleOptionChange(index, e)}
                        placeholder={`Option ${index + 1}`}
                        className="border border-gray-600 p-3 mb-2 w-full rounded focus:outline-none focus:border-blue-500"
                    />
                ))}
                <input
                    type="text"
                    value={currentAnswer}
                    onChange={handleAnswerChange}
                    placeholder="Correct Answer"
                    className="border border-gray-600 p-3 mb-4 w-full rounded focus:outline-none focus:border-blue-500"
                />
                <button
                    onClick={addQuestion}
                    className="w-full bg-blue-600 text-white py-3 px-4 rounded hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
                >
                    Add Question
                </button>
            </div>
            <button
                onClick={createQuiz}
                className="w-full bg-green-600 text-white py-3 px-4 rounded hover:bg-green-700 focus:outline-none focus:bg-green-700"
            >
                Create Quiz
            </button>
        </div>
    );
};

export default QuizForm;
