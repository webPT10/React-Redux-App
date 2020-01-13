import React from 'react';

import { connect } from 'react-redux';
import { getDogs } from '../actions';

const DogComponent = (props) => {
    const fetchDogs = e => {
        e.preventDefault();
        props.getDogs();
    }
    console.log(props);
    return (
        <>
        <h2>Release the Hounds!</h2>
        <button onClick={fetchDogs}>button</button>
        <div>
            {props.dogs.map( dog => <img src={dog} alt='German Shepherds'/>)}
        </div>
        </>
    )
  };
  const mapStateToProps = (state) => {
    console.log(state)
    return {
      dogs: state.dogs,
      error: state.error,
      isFetching: state.isFetching
    }
  }
  export default connect(mapStateToProps, { getDogs })(DogComponent);
  