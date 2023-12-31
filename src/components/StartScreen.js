import React from 'react'
import { useQuiz } from '../contexts/QuizContext';

export default function StartScreen() {
  const { questions, dispatch} = useQuiz()
  const numQuestions = questions.length;

  return (
    <div className='start'>
      <h2>Welcome to The React Quiz!</h2>
      <h3>{numQuestions} question to test your React Mastery</h3>
      <button className='btn btn-ui' onClick={() => dispatch({type: "start"})}>Lets's Start</button>
    </div>
  )
}
