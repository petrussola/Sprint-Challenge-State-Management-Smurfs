import * as types from './actionTypes';

const initialCout = 0;

export function countReducer(count = initialCout, action) {
    switch (action.type) {
        case types.INCREMENT:
            return count + 1;
        default: 
        return count;
    }
}