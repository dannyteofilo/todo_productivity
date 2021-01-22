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

export const setStatus = (id, status) => ({
    type: types.set_status,
    payload: { id, status }
});

export const deleteTodo = id => ({
    type: types.delete_todo,
    payload: { id },
})

export const updatetodo= (id,content)  =>({
    type:types.update_todo,
    payload:{id,content}
})

export const fetchUpdate=content=>({
    type:types.fetch_update,
    payload:content,
})

export const fetchUpdateReset=()=>({
    type:types.fetch_update_reset,
})

export const setFilter = filter => ({ type: types.set_filter, payload: { filter } });
