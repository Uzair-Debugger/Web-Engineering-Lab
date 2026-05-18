import { useState } from "react";

const Counter = () => {

    const [count, setCount] = useState(0);
    return (
        <div className="counter">
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <div>
                <span>{count}</span>
            </div>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    )
}

export default Counter;