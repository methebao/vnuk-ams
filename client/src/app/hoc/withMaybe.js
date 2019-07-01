import React from 'react';

const withMaybe = conditionalRenderingFn => Component => props =>
    conditionalRenderingFn(props) ? null : <Component {...props} />;

const withLoadingIndicator = Component => ({ isLoading, ...props }) => {
    if (!isLoading) {
        return <Component {...props} />;
    }
    return (
        <div>
            <p>Loading...</p>
        </div>
    );
};
export default withMaybe;
