import React from 'react'
import Delete from './Delete'

import Add from './Add'

import PicList from './PicList'

const App = () => {
  return (
    <>
      <h1>Nothing Even Mattress</h1>
      <PicList />
      <div id="add">
        <h2>Add A New Position</h2>
        <Add />
      </div>
    </>
  )
}

export default App