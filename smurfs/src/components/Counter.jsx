import React from 'react';

// STATE
import { connect } from 'react-redux';
import * as actionCreators from '../state/actionCreators';

export function Counter({count, increment}) {
    return (
        <div>
            The counter is: {count} 
            <button onClick={increment}>Increment</button>
        </div>
    )
}

export default connect(
    state => state,
    actionCreators
)(Counter);