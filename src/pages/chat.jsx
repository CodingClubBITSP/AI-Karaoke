import "../styles/chat.css";
import Question from "./question";

const Chat = () => {
    return (
        <div className="chat-container">
            <div className="question-box">
                <Question />
            </div>
        </div>
    );
};

export default Chat;
