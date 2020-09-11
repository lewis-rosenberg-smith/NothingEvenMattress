import React from 'react'
import Delete from './Delete'


import PicList from './PicList'

const App = () => {
  return (
    <>
      <h1>App</h1>
      <Delete id={2} />
      <PicList />
    </>
  )
}

export default App