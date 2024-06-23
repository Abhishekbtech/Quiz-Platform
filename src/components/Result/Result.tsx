import React from 'react';

interface Question {
    question: string;
    answer: string;
}

interface Quiz {
    questions: Question[];
}

interface ResultProps {
    quiz: Quiz | null;
    answers: string[];
}

const Result: React.FC<ResultProps> = ({ quiz, answers }) => {
    if (!quiz || answers.length !== quiz.questions.length) {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="bg-yellow-300 shadow-md rounded-lg p-8 max-w-lg w-full">
                    <h2 className="text-3xl mb-6 text-center">Quiz Results</h2>
                    <p className="text-red-500 text-xl text-center">Quiz data is incomplete.</p>
                </div>
            </div>
        );
    }

    const score = quiz.questions.reduce((acc, question, index) => {
        return acc + (question.answer === answers[index] ? 1 : 0);
    }, 0);

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="bg-green-300 shadow-md rounded-lg p-8 max-w-lg w-full">
                <h2 className="text-3xl mb-6 text-center">Quiz Results</h2>
                <p className="mb-6 text-red-500 text-xl text-center">Your Score: {score} / {quiz.questions.length}</p>
                {quiz.questions.map((q, index) => (
                    <div key={index} className="mb-6">
                        <p className="mb-2 text-blue-800 text-xl">{q.question}</p>
                        <p className={`mb-1 ${answers[index] === q.answer ? 'text-blue-800' : 'text-red-500'}`}>
                            Your Answer: {answers[index]}
                        </p>
                        {answers[index] !== q.answer && (
                            <p className="text-green-500">Correct Answer: {q.answer}</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Result;