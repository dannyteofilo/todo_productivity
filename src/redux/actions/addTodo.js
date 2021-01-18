import { types } from '../../types/types';

let nextTodoId = 0;

export const addTodo = content => ({
    type: types.add_todo,
    payload: {
        id: ++nextTodoId,
        content
    }
})

export const toggleTodo = id => ({
    type: types.toggle_todo,
    payload: { id }
});

export const deleteTodo = id => ({
    type: types.delete_todo,
    payload: { id },
})
