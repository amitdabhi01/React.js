import React from 'react'
import QUESTIONS from "../qns"
import { useState } from 'react'

const Quiz = () => {

    const [userAnswer, setUserAnswer] = useState([])

    const qnsIndex = userAnswer.length;

    const handleAnswer = (ans) => {
        setUserAnswer((prevAnswer) => [...prevAnswer,ans])
    }

    const quizComplete = qnsIndex === QUESTIONS.length

    if (quizComplete) {
        return(
            <>
                <h1>Quiz Complete</h1>
            </>
        )
    }

    const shuffledOption = [...QUESTIONS[qnsIndex].option]

    shuffledOption.sort(() => Math.random()-0.5)

    console.log("user answer", userAnswer)

  return (
    <>
        <h1>{QUESTIONS[qnsIndex].qns}</h1>

        <ul>
            {shuffledOption.map((ans) =>(
                <li key={ans}>
                    <button onClick={() => handleAnswer(ans)}>{ans}</button>
                </li>
            ))};
        </ul>
    </>
  )
}

export default Quiz
