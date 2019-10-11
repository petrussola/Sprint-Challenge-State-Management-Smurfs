import React, { useEffect } from 'react';

// STATE
import * as actionCreators from '../state/actionCreators';
import { connect } from 'react-redux';


export function Village({fetchDataApi}) {
    useEffect(() => {
        fetchDataApi();
    }, [])
    return (
        <div>
            Village
        </div>
    )
}

export default connect (
    state => state,
    actionCreators
)(Village);