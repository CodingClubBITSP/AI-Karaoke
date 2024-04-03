import React, { useState } from "react";
import "./question.css";
import aiIcon from "../assets/ai.png";
function Question() {
    const [selectedCheckbox, setSelectedCheckbox] = useState(["", "", ""]);
    const questions = [
        {
            question: "Mood",
            options: ["Happy", "Sad"]
        },
        {
            question: "Energy",
            options: ["High", "Medium", "Low"]
        },
        {
            question: "Beats",
            options: ["Fast", "Mid-tempo", "Slow"]
        }
    ];
    const optionChangeHandler = e => {
        setSelectedCheckbox(prevState => {
            const prev = [...prevState];
            prev[e.target.name] = e.target.value;
            return prev;
        });
    };
    return (
        <>
            {questions.map((q, i) => {
                return (
                    <div className="container">
                        <div className="ai-icon">
                            <img src={aiIcon} alt="Ai logo" />
                        </div>
                        <div className="question-container">
                            <h2 className="question">{q.question}</h2>
                            {q.options.map((option, j) => {
                                return (
                                    <div className="option">
                                        <input
                                            type="radio"
                                            value={option}
                                            onChange={optionChangeHandler}
                                            name={i}
                                        />
                                        <label htmlFor="">{option}</label>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                );
            })}
            <div className="flex justify-center">
                <button
                    type="button"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-fit"
                >
                    Proceed
                </button>
            </div>
        </>
    );
}

export default Question;
