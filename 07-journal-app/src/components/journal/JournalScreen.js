import React from 'react'

import NoteScreen from 'components/notes/NoteScreen'

import Sidebar from './Sidebar'
import NothingSelected from './NothingSelected'

const JournalScreen = () => {
  return (
    <div className="journal__main-context">
        <Sidebar />

        <main>

        <NoteScreen />

        {/* <NothingSelected /> */}

        </main>
    </div>
  )
}

export default JournalScreen
