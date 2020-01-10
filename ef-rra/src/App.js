import React from 'react';
import './App.css';
import Title from './components/Title';

import { connect } from 'react-redux';

const App = () => {
  return (
    <>
    <Title />
    </>
  );
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    state
  }
}
export default connect(mapStateToProps, {})(App);
