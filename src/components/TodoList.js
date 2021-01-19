import React from 'react'
import { useSelector } from 'react-redux'
import { getTodos } from '../redux/selectors';
import { List } from 'react-mdl';
import { Todo } from './Todo';

export const TodoList = () => {
    const allTodos = useSelector(getTodos);
    const state = useSelector(state => state);
    const { filter } = state;
    const todos = filter === 'All' ? allTodos.filter(todo => (todo.status === 'done' || todo.status === 'todo')) :
        filter === 'Completed' ? allTodos.filter(todo => todo.completed) : allTodos.filter(todo => !todo.completed);
    console.log('alltodos: ', allTodos);
    return (
        <ul className='todo-list'>
            {
                todos && todos.length ?
                    <List style={{ width: '300px' }}>
                        {
                            todos.map((todo, index) => {
                                return <Todo key={index} todo={todo} timer={false} remove={true} />
                            })
                        }
                    </List>
                    : <div className='list'>
                        <span>List todo Empty </span>
                        <i className='fas fa-list fa-4x'></i>
                    </div>
            }
        </ul>
    )
}
