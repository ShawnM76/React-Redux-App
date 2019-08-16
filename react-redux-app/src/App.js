import React from 'react';
import { connect } from 'react-redux';
import BreweriesList from './components/BreweriesList';
import './App.css';

const App = props => {
  const { state } = props;

  return (
    <div className='App'>
      <header className='App-header'>
        <BreweriesList />
      </header>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    state,
  };
};

export default connect(
  mapStateToProps,
  {},
  null,
)(App);
