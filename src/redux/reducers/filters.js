import { types } from "../../types/types";

const defaultState = 'All';


export const filter = (state = defaultState, action) => {
    switch (action.type) {
        case types.set_filter: {
            return action.payload.filter;
        }
        default: {
            return state;
        }
    }
};

