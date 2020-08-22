import React from 'react'
import HeroesList from 'components/heroes/HeroesList'

const MarvelScreen = () => {
  return (
    <div>
      <h1>Marvel</h1>
      <HeroesList publisher="Marvel Comics" />
    </div>
  )
}

export default MarvelScreen
