import { useEffect } from "react";
import "../styles/question.css";
import axios from "axios";
import { useGlobal } from "../context/GlobalContext";
import aiIcon from "../assets/ai.png";
import { useNavigate } from "react-router-dom";

const Question = () => {
    const navigate = useNavigate();
    const { selection, setSelection, setSongs } = useGlobal();

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
            options: ["Fast", "Slow", "Mid-tempo"]
        }
    ];

    useEffect(() => {
        initAPI();
    }, []);

    const initAPI = async () => {
        try {
            const res = await axios.get(
                "https://ai-karaoke.onrender.com/training",
                { headers: { "Content-Type": "application/json" } }
            );
            console.log(res);
        } catch (err) {
            console.log(err);
        }
    };

    const optionChangeHandler = (e, index) => {
        const { value } = e.target;
        setSelection(prevState => {
            const updatedSelection = [...prevState];
            updatedSelection[index] = value;
            return updatedSelection;
        });
    };

    const submitHandler = () => {
        if (selection.every(value => value !== "")) {
            axios
                .post(
                    "https://ai-karaoke.onrender.com/prediction/",
                    { data: selection },
                    { headers: { "Content-Type": "application/json" } }
                )
                .then(res => {
                    setSongs(res.data.prediction);
                    navigate("/karaoke");
                })
                .catch(err => console.log(err));
        } else {
            alert("Please select an option for each question");
        }
    };

    return (
        <>
            {questions.map((q, i) => (
                <div className="container" key={i}>
                    <div className="ai-icon">
                        <img src={aiIcon} alt="AI" />
                    </div>
                    <div className="question-container">
                        <h2 className="font-semibold mb-2 text-xl">
                            {`Q${i + 1}. Choose your ${q.question}.`}
                        </h2>
                        <div className="grid grid-cols-3 gap-4">
                            {q.options.map((option, j) => (
                                <div key={j} className="flex items-center">
                                    <input
                                        type="radio"
                                        value={option}
                                        id={`${option}-${i}`}
                                        onChange={e =>
                                            optionChangeHandler(e, i)
                                        }
                                        name={`question-${i}`}
                                        className="mr-2 cursor-pointer"
                                    />
                                    <label
                                        htmlFor={`${option}-${i}`}
                                        className="text-base font-medium cursor-pointer"
                                    >
                                        {option}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
            <div className="flex justify-center mt-2">
                <div
                    className="text-white bg-default-green font-medium rounded-lg text-sm px-5 py-2.5 w-fit cursor-pointer hover:opacity-80"
                    onClick={submitHandler}
                >
                    Save and Proceed
                </div>
            </div>
        </>
    );
};

export default Question;
