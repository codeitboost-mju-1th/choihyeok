import styles from "./TodoItem.module.css";

function TodoItem({ id, isDone, content, date, onUpdate, onDelete }) {
    const onChangeCheckBox = () => {
        onUpdate(id);
    };

    const onClickDeleteButton = () => {
        onDelete(id);
    };

    return (
        <div className={styles.TodoItem}>
            <input
                onChange={onChangeCheckBox}
                checked={isDone}
                type="checkbox"
            ></input>
            <div className={styles.content}>{content}</div>
            <div className={styles.date}>
                {new Date().toLocaleDateString(date)}
            </div>
            <button onClick={onClickDeleteButton}>삭제</button>
        </div>
    );
}

export default TodoItem;
