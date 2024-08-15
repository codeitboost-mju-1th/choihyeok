function Controller({ pressButton }) {
    return (
        <div>
            <button
                onClick={() => {
                    pressButton(-1);
                }}
            >
                -1
            </button>
            <button
                onClick={() => {
                    pressButton(-10);
                }}
            >
                -10
            </button>
            <button
                onClick={() => {
                    pressButton(-100);
                }}
            >
                -100
            </button>
            <button
                onClick={() => {
                    pressButton(100);
                }}
            >
                +100
            </button>
            <button
                onClick={() => {
                    pressButton(10);
                }}
            >
                +10
            </button>
            <button
                onClick={() => {
                    pressButton(1);
                }}
            >
                +1
            </button>
        </div>
    );
}

export default Controller;
