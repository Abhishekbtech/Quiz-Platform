import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface QuizProps {
    quiz: {
        title: string;
        questions: {
            question: string;
            options: string[];
        }[];
    };
    onSubmitQuiz: (answers: string[]) => void;
}

const Quiz: React.FC<QuizProps> = ({ quiz, onSubmitQuiz }) => {
    const [answers, setAnswers] = useState<string[]>(Array(quiz.questions.length).fill(''));
    const [submitted, setSubmitted] = useState<boolean>(false);
    const navigate = useNavigate();

    const handleChange = (index: number, value: string) => {
        const newAnswers = [...answers];
        newAnswers[index] = value;
        setAnswers(newAnswers);
    };

    const handleSubmit = () => {
        setSubmitted(true);
        onSubmitQuiz(answers);
        navigate('/result', { replace: true });
    };

    if (submitted) {
        return <div className="p-4 text-center text-xl text-gray-700">Thank you for submitting the quiz!</div>;
    }

    return (
        <div className="max-w-3xl mx-auto p-6 bg-gray-800 rounded-lg shadow-lg">
            <h2 className="text-4xl mb-6 text-center text-white">Solved Quiz</h2>
            <h3 className="text-2xl mb-6 text-center text-gray-300">Title: {quiz.title}</h3>
            {quiz.questions.map((q, index) => (
                <div key={index} className="mb-6">
                    <p className="mb-4 text-lg text-white">{index + 1}:-  {q.question}</p>
                    {q.options.map((option, i) => (
                        <div key={i} className="mb-2 flex items-center">
                            <input
                                type="radio"
                                name={`question-${index}`}
                                value={option}
                                checked={answers[index] === option}
                                onChange={() => handleChange(index, option)}
                                className="mr-3 h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                            />
                            <label className="text-gray-300">{option}</label>
                        </div>
                    ))}
                </div>
            ))}
            <button
                onClick={handleSubmit}
                className="mt-4 w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
            >
                Submit Quiz
            </button>
        </div>
    );
};

export default Quiz;