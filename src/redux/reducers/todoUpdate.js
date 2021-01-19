import { types } from '../../types/types';

const initialstate = null;

export const todoUpdateReducer = (state = initialstate, action) => {

    switch (action.type) {
        case types.fetch_update: {
            console.log('content: ', action.payload);
            return {
                ...action.payload
            }
        }

        case types.fetch_update_reset:{
            return initialstate
        }

        default:
            return state;
    }
}
