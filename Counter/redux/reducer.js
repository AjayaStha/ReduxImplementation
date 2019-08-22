import { createStore } from 'redux';

const initialState = {
    count: 20
};

const rootReducer = (state=initialState, action) => {
    const newState = { ...state};

    if(action.type === 'INCREMENT') {
        newState.count++;
    }

    if(action.type === 'DECREMENT') {
        newState.count--;
    }
    return newState
};

export default (rootReducer)