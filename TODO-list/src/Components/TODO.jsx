import { useEffect, useRef, useState } from "react";
import "./CSS/TODO.css";
import { TODOitems } from "./TODOitems.jsx";
let count = 0;
export const TODO = () => {
    const [todos, setTodos] = useState([]);
    const inputref = useRef(null);
    const add = () => {
        setTodos([
            ...todos,
            { no: count++, text: inputref.current.value, display: "" },
        ]);
        inputref.current.value = "";
        localStorage.setItem("todos_count", count);
    };
    useEffect(() => {
        const data = localStorage.getItem("todos");
        if (data) {
            setTodos(JSON.parse(data));
            count = localStorage.getItem("todos_count");
        }
    }, []);
    useEffect(() => {
        setTimeout(() => {
            console.log(todos);
            localStorage.setItem("todos", JSON.stringify(todos));
        }, 100);
    }, [todos]);
    return (
        <div className="todo">
            <div className="todo-header">To-Do List</div>
            <div className="todo-add">
                <input
                    ref={inputref}
                    type="text"
                    placeholder="Add Your Task"
                    className="todo-input"
                />
                <button
                    onClick={() => {
                        add();
                    }}
                    className="todo-button"
                >
                    Add
                </button>
            </div>
            <div className="todo-list">
                {todos.map((item, index) => {
                    return (
                        <TODOitems
                            key={index}
                            setTodos={setTodos}
                            no={item.no}
                            display={item.display}
                            text={item.text}
                        />
                    );
                })}
            </div>
        </div>
    );
};
