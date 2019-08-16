import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import { Button, Segment } from 'semantic-ui-react';

import { getData } from '../actions';
import Breweries from './Breweries';

const BreweriesList = props => {
  return (
    <div>
      <h1>List of Breweries in Idaho!</h1>
      <Segment inverted>
        <Button inverted color='violet' onClick={props.getData}>
          {props.isLoading ? (
            <Loader type='ThreeDots' color='#00BFFF' height='100' width='100' />
          ) : (
            'Get List of Breweries!'
          )}
        </Button>
      </Segment>
      {props.breweries &&
        props.breweries.map(brew => (
          <Breweries key={brew.name} breweries={brew} />
        ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    breweries: state.breweries,
  };
};

export default connect(
  mapStateToProps,
  { getData },
)(BreweriesList);
