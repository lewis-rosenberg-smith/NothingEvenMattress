import React from 'react'

import Add from './Add'
import { connect } from "react-redux";

import PicList from './PicList'
import { changePage } from '../actions'


const App = () => {
  return (
    <>
      <h1>Nothing Even Mattress</h1>
      <PicList />
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    viewPage: state.viewPage,
  };
};

export default connect(mapStateToProps)(App);