import React from 'react'
import { useSelector } from 'react-redux'
import { getTodos } from '../redux/selectors';
import { List } from 'react-mdl';
import { Todo } from './Todo';
import { FILTERS } from '../constants/constants';

export const TodoList = () => {
    const allTodos = useSelector(getTodos);
    const state = useSelector(state => state);
    const { filter } = state;
    const todos = filter === FILTERS[0].value ? allTodos : filter === FILTERS[1].value ?
        allTodos.filter(todo => todo.size === FILTERS[1].value) : filter === FILTERS[2].value ?
            allTodos.filter(todo => todo.size === FILTERS[2].value) : allTodos.filter(todo => todo.size === FILTERS[3].value);
    return (
        <ul className='todo-list'>
            {
                todos && todos.length ?
                    <List>
                        {
                            todos.map((todo, index) => {
                                return <Todo key={index} todo={todo} timer={false} remove={true} update={true} />
                            })
                        }
                    </List>
                    : <div className='list-empty'>
                        <i className='fas fa-list fa-1x'></i>
                        <span>List todo Empty </span>
                    </div>
            }
        </ul>
    )
}
