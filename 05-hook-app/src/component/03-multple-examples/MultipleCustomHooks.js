import React from 'react'
import useFetch from 'hooks/useFetch'

const MultipleCustomHooks = () => {

    const url = `https://www.breakingbadapi.com/api/quotes/1`

    const {
        data,
        loading,
    } = useFetch( url );

    return (
        <>{loading && <p>Loading</p>}
          <h1>Custom Hooks!!!!!!</h1>
          <span>{JSON.stringify(data)}</span>
        </>
    )
}

export default MultipleCustomHooks
