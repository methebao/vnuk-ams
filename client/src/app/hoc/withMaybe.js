import React from 'react';

const withMaybe = conditionalRenderingFn => Component => props =>
    conditionalRenderingFn(props) ? null : <Component {...props} />;

export default withMaybe;
