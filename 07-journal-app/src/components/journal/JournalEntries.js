import React from 'react'

import JournalEntry from './JournalEntry'
import { useSelector } from 'react-redux'

const JournalEntries = () => {

    const entries = useSelector(state => state.notes.list) 
  
  return (
    <div className="journal__entries">
        {
          entries.map( value => ( 
              <JournalEntry key={ value } />
          ))
        }
    </div>
  )
}

export default JournalEntries
