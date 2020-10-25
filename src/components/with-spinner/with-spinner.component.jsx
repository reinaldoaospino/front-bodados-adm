import { CircularProgress } from '@material-ui/core';
import React from 'react'

import { SpinnerOverlay } from './with-spinner.styles';

const WithSpinner = WrappedComponent =>({isLoading, ...otherProps})=>{
    console.log('llego')
    return isLoading ? (
        <SpinnerOverlay>
            <CircularProgress/>
        </SpinnerOverlay>
    ) : (
        <WrappedComponent {...otherProps} />
    )
}

export default WithSpinner;