import { useEffect, useState } from "react";
import "../styles/question.css";
import aiIcon from "../assets/ai.png";
import axios from "axios";

const Question = () => {
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
        const { name, value } = e.target;
        setSelectedCheckbox(prevState => {
            const prev = [...prevState];
            prev[name] = value;
            return prev;
        });
    };

    const fetchData = async url => {
        try {
            const response = await axios.get(url);
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchData("https://ai-karaoke.onrender.com/training");
    }, []);

    const sendData = async () => {
        await fetchData("https://ai-karaoke.onrender.com/training");
    };

    return (
        <>
            {questions.map((q, i) => (
                <div className="container" key={i}>
                    <div className="ai-icon">
                        <img src={aiIcon} alt="Ai logo" />
                    </div>
                    <div className="question-container">
                        <h2 className="question">{q.question}</h2>
                        {q.options.map((option, j) => (
                            <div className="option" key={j}>
                                <input
                                    type="radio"
                                    value={option}
                                    onChange={optionChangeHandler}
                                    name={i}
                                />
                                <label>{option}</label>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
            <div className="flex justify-center">
                <button
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-fit"
                >
                    Proceed
                </button>
            </div>
        </>
    );
};

export default Question;
