import React from 'react'
import { useSelector } from 'react-redux'
import { getTodos } from '../redux/selectors';
import { List } from 'react-mdl';
import { Todo } from './Todo';

export const TodoList = () => {
    const allTodos = useSelector(getTodos)
    const todos = allTodos;
    console.log('alltodos: ', allTodos);
    return (
        <ul className='todo-list'>
            {
                todos && todos.length ?
                    <List style={{ width: '300px' }}>
                        {
                            todos.map((todo, index) => {
                                return <Todo key={index} todo={todo} />
                            })
                        }
                    </List>
                    : 'List empty'
            }
        </ul>
    )
}
