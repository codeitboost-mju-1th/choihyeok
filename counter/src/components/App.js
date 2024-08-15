import { useState } from "react";
import styles from "./App.module.css";
import Viewer from "./Viewer";
import Controller from "./Controller";

function App() {
    const [count, setCount] = useState(0);
    const pressButton = (value) => {
        setCount(count + value);
    };

    return (
        <>
            <h1>Simple Counter</h1>
            <section className={styles.section}>
                <Viewer count={count} />
            </section>
            <section className={styles.section}>
                <Controller pressButton={pressButton} />
            </section>
        </>
    );
}

export default App;
