import React from 'react';

import { connect } from 'react-redux';

const Title = () => {
    return (
        <>
        <h2>Title</h2>
        </>
    )
  };
  const mapStateToProps = (state) => {
    console.log(state)
    return {
      state
    }
  }
  export default connect(mapStateToProps, {})(Title);
  