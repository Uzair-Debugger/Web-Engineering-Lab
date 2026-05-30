import { useState, useEffect } from "react";

const TrackState = () => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Clicked ${count} times`;
    }, [count]);

    return (
        <div>
            <h2>Count: {count}</h2>

            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    )
}

export default TrackState;