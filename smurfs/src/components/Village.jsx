import React, { useEffect } from 'react';

// STATE
import * as actionCreators from '../state/actionCreators';
import { connect } from 'react-redux';

// COMPONENTS

import Inhabitant from './Inhabitant';

export function Village({village, fetchDataApi}) {
    useEffect(() => {
        fetchDataApi();
    }, [])
    return (
        village.map( inhabitant => {
            return <Inhabitant inhabitant={inhabitant} />
        })
    )
}

export default connect (
    state => state,
    actionCreators
)(Village);