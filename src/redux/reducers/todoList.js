import { types } from '../../types/types';

const initialstate = [];

export const todoListReducer = (state = initialstate, action) => {

    switch (action.type) {
        case types.add_todo: {
            const { id, content } = action.payload;
            return [
                ...state,
                {
                    id,
                    content,
                    completed: false
                }
            ]
        }

        case types.toggle_todo: {
            const { id } = action.payload;
            return state.map(todo => (
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            ))
        }

        case types.delete_todo: {
            const { id } = action.payload;
            return state.filter(todo => todo.id !== id)
        }

        default:
            return state;
    }
}
