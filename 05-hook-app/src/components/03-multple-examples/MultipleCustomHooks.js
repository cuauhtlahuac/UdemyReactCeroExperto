import React from 'react'
import useFetch from 'hooks/useFetch'
import useCounter from 'hooks/useCounter'

const MultipleCustomHooks = () => {

    const { counter, increment } = useCounter(1)

    const url = `https://www.breakingbadapi.com/api/quotes/${ counter }`

    const {
        data,
        loading,
    } = useFetch( url );

    const { author, quote } = !!data && data[0];

    return (
        <>
          <h1>Breaking Bad Quotes</h1>
            <hr/>

            { loading ?
            (
                <div className="d-flex mb-2 justify-content-end">
                    <div className="spinner-grow bg-info" style={{ width: '3rem', height: '3rem' }} role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            ) : (
                <blockquote className="blockquote text-right">
                    <p className="mb-0">{ quote }</p>
                    <footer className="blockquote-footer">{ author }</footer>
                </blockquote>
            )}

            <button className="btn btn-primary" onClick={ increment }>
                next quote 
            </button>
        </>
    )
}

export default MultipleCustomHooks
