import { useState, useRef } from "react";
import styles from "./Editor.module.css";

function Editor({ onCreate }) {
    const [content, setContent] = useState("");
    const onChangeContent = (e) => {
        setContent(e.target.value);
    };
    const contentRef = useRef();

    const onKeydown = (e) => {
        if (e.keyCode === 13) {
            onSubmit();
        }
    };

    const onSubmit = () => {
        if (content === "") {
            contentRef.current.focus();
            return;
        }
        onCreate(content);
        setContent("");
    };
    return (
        <div className={styles.Editor}>
            <input
                ref={contentRef}
                value={content}
                onKeyDown={onKeydown}
                onChange={onChangeContent}
                placeholder="새로운 Todo..."
            ></input>
            <button onClick={onSubmit}>추가</button>
        </div>
    );
}

export default Editor;
