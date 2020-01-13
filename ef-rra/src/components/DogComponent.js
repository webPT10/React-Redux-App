import React from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';
import { getDogs } from '../actions';

const Img = styled.img`
    width: 10%;
    height: auto;
    margin: 2%;
    border-radius: 20px;
    box-shadow: 10px 10px hotpink;

    &:hover {
        transform: scale(1.3);
    }
`
const DogSection = styled.section`
    display: flex;
    flex-flow: row wrap;
    margin-top: 5%;
`

const DogComponent = (props) => {
    const fetchDogs = e => {
        e.preventDefault();
        props.getDogs();
    }
    console.log(props);
    return (
        <>
        <h2>Release the Hounds!</h2>
        <button onClick={fetchDogs}>Cave Canem</button>
        <DogSection>
            {props.dogs.map( dog => <Img src={dog} alt='German Shepherds'/>)}
        </DogSection>
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
  