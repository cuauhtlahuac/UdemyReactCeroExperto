import { useState } from "react"

export default function useCounter( initialState = 13 ) {
    const [state, setState] = useState( initialState )

    function decrement({ factor = 1 }) {
        setState(( state <= 0 ) ? 0 : state - factor);
    };

    function reset() {
        setState( initialState );
    };

    function increment({ factor = 1 }) {
        setState(state + factor);
    };

    return {
        state,
        decrement,
        reset,
        increment,
    }
}
