import React from 'react';
import loaderSrc from '../../assets/loader.gif'

const Loader = props => (
  <div>
    <img
      style={{ width: 50}}
      alt=""
      src={loaderSrc} />
  </div>
);

export default Loader;