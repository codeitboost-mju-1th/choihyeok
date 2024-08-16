import { useState } from "react";
import styles from "./List.module.css";
import TodoItem from "./TodoItem";

function List({ todos, onUpdate, onDelete }) {
    const [search, setSearch] = useState("");

    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    };

    const getFilteredData = () => {
        if (search === "") {
            return todos;
        }
        return todos.filter((todo) =>
            todo.content.toLowerCase().includes(search.toLowerCase())
        );
    };

    const filteredTodos = getFilteredData();

    return (
        <div className={styles.List}>
            <h4>Todo List 🌱</h4>
            <input
                value={search}
                onChange={onChangeSearch}
                placeholder="검색어를 입력하세요"
            ></input>
            <div className={styles.todos_wrapper}>
                {filteredTodos.map((todo) => {
                    return (
                        <TodoItem
                            key={todo.id}
                            {...todo}
                            onUpdate={onUpdate}
                            onDelete={onDelete}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default List;
