import React, { useState } from 'react';
import useCounter from 'hooks/useCounter';
import Small from './Small';

const Memorize = () => {
  const { counter, increment } = useCounter(13);

  const [show, setShow] = useState(false);
  return (
    <div>
      <h1>
        Counter:
        <Small value={counter} />
      </h1>
      <hr />

      <button
        type="button"
        className="btn btn-primary"
        onClick={increment}
      >
        +1
      </button>

      <button
        type="button"
        onClick={() => setShow(!show)}
        className="btn btn-outline-primary ml-3"
      >
        show / Hidde {JSON.stringify(show)}
      </button>
    </div>
  );
};

export default Memorize;
