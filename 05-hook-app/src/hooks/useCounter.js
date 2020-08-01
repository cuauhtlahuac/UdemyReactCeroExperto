import { useState } from "react"

export default function useCounter( initialState = 13 ) {
    const [counter, setCounter] = useState( initialState )

    function decrement({ factor = 1 }) {
        setCounter(( counter <= 0 ) ? 0 : counter - factor);
    };

    function reset() {
        setCounter( initialState );
    };

    function increment({ factor = 1 }) {
        setCounter(counter + factor);
    };

    return {
        counter,
        decrement,
        reset,
        increment,
    }
}
