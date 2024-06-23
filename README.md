# An Online Quiz Platform

Creating an online quiz platform with the specified requirements involves integrating React for frontend development, Vite for build optimization, TypeScript for type safety, and Tailwind CSS for styling.

## Technologies Used

- React: For building UI components and managing application state.
- Vite: Fast build tool that provides a great development experience.
- TypeScript: Adds static types to JavaScript to improve code quality and developer productivity.
- Tailwind CSS: Utility-first CSS framework for styling with a focus on responsiveness and mobile-first design.

## Functionality Overview

### Quiz Creation (Admin)
- First login with admin (username) and password (Password)
- Admin can create quizzes with multiple-choice questions and specify correct answers.
- Each question should be associated with a correct answer.
- Validation and error handling for form inputs.

### Quiz Taking (User)
- Users can select and take quizzes.
- Questions are presented one at a time with options to choose from.

### Submit Quiz:
- After completing the quiz, users submit their answers.
- Score calculation based on correct answers.
- Results stored locally for review.

### View Results:
- Users can view their scores immediately after completing the quiz.
- Correct answers are displayed for review purposes.

### Responsive Design:
- Tailwind CSS used for responsive design to ensure compatibility with various screen sizes.

### Animations:
- Tailwind CSS animations utilized for transitions between quiz components and displaying results.

## Installation and Setup
### Prerequisites

- Node.js and npm installed on your machine.

### Steps

1. Clone the repository:
    ```sh
        git clone https://github.com/Abhishekbtech/Quiz-Platform.git
        cd my-quizapp
    ```
2. Install dependencies:
    ```sh
        npm install
    ```
3. Start the development server
    ```sh
        npm run dev
    ```

4. The application will be available at `http://localhost:5173`

## Deploy on Vercel

Deployment link of my project `https://to-do-lovat-tau.vercel.app/`