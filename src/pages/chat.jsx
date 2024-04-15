import { useEffect } from "react";
import Question from "../components/question";
import title from "../assets/title.png";
import { useGlobal } from "../context/GlobalContext";

const Chat = () => {
    const { setSelection } = useGlobal();

    useEffect(() => {
        setSelection(["", "", ""]);
    }, [setSelection]);

    return (
        <div className="chat-container">
            <img src={title} alt="title" className="mb-8" />
            <div className="question-box">
                <Question />
            </div>
        </div>
    );
};

export default Chat;
