import { useReducer } from "react";

const reducer = (state, action) => {
    switch (action.type) {
        case "increment": return { count: state.count + 1 };
        case "decrement": return { count: state.count - 1 };
        case "reset":     return { count: 0 };
        default:          return state;
    }
};

const CounterReducer = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 });
    return (
        <div className="counter">
            <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
            <span>{state.count}</span>
            <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
            <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
        </div>
    );
};

export default CounterReducer;
