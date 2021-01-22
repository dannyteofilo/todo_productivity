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
                    order:id,
                    completed: false,
                    ...content,
                }
            ]
        }

        case types.toggle_todo: {
            const { id } = action.payload;
            return state.map(todo => (
                todo.id === id ? { ...todo, completed: !todo.completed, status: !todo.completed ? 'done' : 'todo' } : todo
            ))
        }

        case types.set_status: {
            const { id, status } = action.payload;
            return state.map(todo => (
                todo.id === id ? { ...todo, status } : todo
            ))
        }

        case types.delete_todo: {
            const { id } = action.payload;
            return state.filter(todo => todo.id !== id)
        }

        case types.update_todo: {
            const { id, content } = action.payload;
            return state.map(todo => (
                todo.id === id ? { ...content, completed: false } : todo
            ))
        }

        default:
            return state;
    }
}
