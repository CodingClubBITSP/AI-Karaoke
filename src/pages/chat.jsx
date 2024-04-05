import "../styles/chat.css";
import Question from "../components/question";
import title from "../assets/title.png";
import { useGlobal } from "../context/GlobalContext";
import { useEffect } from "react";

const Chat = () => {
    const { setSelection } = useGlobal();

    useEffect(() => {
        setSelection(["", "", ""]);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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
