import "./CSS/TODOitems.css";
import tick from "./Assets/tick.png";
import not_tick from "./Assets/not_tick.png";
import cross from "./Assets/cross.png";

export const TODOitems = ({ no, display, text, setTodos }) => {
    const toggle = (no) => {
        let data = JSON.parse(localStorage.getItem("todos"));
        for (let i = 0; data.length; i++) {
            if (data[i].no === no) {
                data[i].display = data[i].display === "" ? "none" : "";
                break;
            }
        }
        setTodos(data);
    };
    const deleteTodo = (no) => {
        let data = JSON.parse(localStorage.getItem("todos"));
        data = data.filter((todo) => todo.no !== no);
        setTodos(data);
        localStorage.setItem("todos", JSON.stringify(data));
    };
    return (
        <div className="todoitems">
            <div
                className={`todoitems-container ${display}`}
                onClick={() => {
                    toggle(no);
                }}
            >
                {display === "" ? (
                    <img className="not-tick" src={not_tick} alt="" />
                ) : (
                    <img className="tick" src={tick} alt="" />
                )}

                <div className="todoitems-text">{text}</div>
            </div>
            <img
                className="cross"
                onClick={() => {
                    deleteTodo(no);
                }}
                src={cross}
                alt=""
            />
        </div>
    );
};
