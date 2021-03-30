import React, { Fragment } from 'react';
import spinner from './spinner.gif';

const Spinner = () => (
  <Fragment>
    <img
      src={spinner}
      style={{
        width: '60px',
        margin: 'auto',
        display: 'block',
        marginTop: '100px'
      }}
      alt='Loading..'
    />
  </Fragment>
);

export default Spinner;
