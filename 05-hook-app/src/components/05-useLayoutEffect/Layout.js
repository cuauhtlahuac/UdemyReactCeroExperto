import React, { useLayoutEffect, useState, useRef } from 'react';

import useFetch from 'hooks/useFetch';
import useCounter from 'hooks/useCounter';

import './layout.css';

const Layout = () => {
  const { counter, increment } = useCounter(1);

  const url = `https://www.breakingbadapi.com/api/quotes/${counter}`;

  const {
    data,
  } = useFetch(url);

  const { quote } = !!data && data[0];

  const pRef = useRef();

  const [boxSize, setBoxSize] = useState({});

  useLayoutEffect(() => {
    const boxDimensions = pRef.current.getBoundingClientRect();

    setBoxSize(boxDimensions);
  }, [quote]);

  return (
    <>
      <h1>Breaking Bad Quotes</h1>
      <hr />

      <blockquote className="blockquote text-right">
        <p
          className="mb-0"
          ref={pRef}
        >
          {quote}
        </p>
      </blockquote>

      <pre>{JSON.stringify(boxSize, null, 3)}</pre>

      <button className="btn btn-primary" type="button" onClick={increment}>
        next quote
      </button>
    </>
  );
};

export default Layout;
