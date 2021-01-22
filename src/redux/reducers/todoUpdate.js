import { types } from '../../types/types';

const initialstate = null;

export const todoUpdateReducer = (state = initialstate, action) => {

    switch (action.type) {
        case types.fetch_update: {
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
