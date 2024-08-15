import { useState, useEffect, useRef } from "react";
import styles from "./App.module.css";
import Viewer from "./Viewer";
import Controller from "./Controller";
import Even from "./Even";

function App() {
    const [count, setCount] = useState(0);
    const [input, setInput] = useState("");
    const isMount = useRef(false);

    // useEffect(() => {
    //     console.log(`count: ${count} / input: ${input}`);
    // }, [count, input]);
    // //dependency array

    //Life Cycle mount -> depn이 비어있으면 처음에만 실행
    useEffect(() => {
        console.log("mount");
    }, []);

    //Life Cycle update -> depn을 설정 안되어면 State가 바뀔때마다 실행
    useEffect(() => {
        if (!isMount.current) {
            isMount.current = true;
            return;
        }
        console.log("update");
    });

    //Life Cycle unmount -> depn이 비어있으면 처음 mount일때만 실행

    const pressButton = (value) => {
        setCount(count + value);
    };

    return (
        <>
            <h1>Simple Counter</h1>
            <section className={styles.section}>
                <input
                    value={input}
                    onChange={(e) => {
                        setInput(e.target.value);
                    }}
                ></input>
                <Viewer count={count} />
                {count % 2 === 0 ? <Even /> : null}
            </section>
            <section className={styles.section}>
                <Controller pressButton={pressButton} />
            </section>
        </>
    );
}

export default App;
