import { useRef, useState } from "react";
import styles from "./App.module.css";
import Header from "./Header";
import Editor from "./Editor";
import List from "./List";
const mockData = [
    {
        id: 0,
        isDone: false,
        content: "React 공부하기",
        date: new Date().getTime(),
    },
    {
        id: 1,
        isDone: false,
        content: "빨래하기",
        date: new Date().getTime(),
    },
    {
        id: 2,
        isDone: false,
        content: "노래 연습하기",
        date: new Date().getTime(),
    },
];

function App() {
    const [todos, setTodos] = useState(mockData);
    const idRef = useRef(3);
    const onCreate = (content) => {
        const newTodo = {
            id: idRef.current++,
            isDone: false,
            content: content,
            date: new Date().getTime(),
        };

        setTodos([newTodo, ...todos]);
    };

    const onUpdate = (targetId) => {
        //기존의 todo리스트에서 체크한 id의 isDone값만 바뀐 배열을 새로 만들어서 set한다
        setTodos(
            todos.map((todo) =>
                todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo
            )
        );
    };

    const onDelete = (targetId) => {
        setTodos(todos.filter((todo) => todo.id !== targetId));
    };

    return (
        <div className={styles.App}>
            <h1>TodoList</h1>
            <Header />
            <Editor onCreate={onCreate} />
            <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
        </div>
    );
}

export default App;
