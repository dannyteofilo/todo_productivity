import { types } from "../../types/types";

const initialState = {
    requesting: false,
    error: null,
    data: null
}

export const TodoListReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.todo_list_request_start:
            return {
                ...state,
                requesting: true,
                error: false
            };

        case types.todo_list_request_success:
            return {
                ...state,
                data: action.payload
            };

        case types.todo_list_request_failed:
            return {
                ...state,
                ...action.payload
            };

        case types.todo_list_request_ends:
            return {
                ...state,
                requesting: false
            };

        default:
            return state;
    }
}