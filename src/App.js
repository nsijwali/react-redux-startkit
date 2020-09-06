import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { getInitialState } from './actions/actionCreator'
import './App.css';

const mapStateToProps = state => {
  return {
    title: state.dummyReducer?.title || ''
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getInitialState: () => getInitialState(dispatch)
  }
}

function App(props) {
  useEffect(() => {
    props.getInitialState();
  }, []);

  return (
    <div className="app">
      <h1>{props.title}</h1>
    </div>
  );
}

App.defaultProps = {
  title: ''
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
