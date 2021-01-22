import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getTodos } from '../redux/selectors';
import { List } from 'react-mdl';
import { Todo } from './Todo';
import { FILTERS } from '../constants/constants';

export const TodoList = () => {
    const allTodos = useSelector(getTodos);
    const state = useSelector(state => state);
    const [todos, setTodos] = useState([]);
    const [dragId, setDragId] = useState();

    const { filter } = state;


    useEffect(() => {
        const todos = filter === FILTERS[0].value ? allTodos : filter === FILTERS[1].value ?
            allTodos.filter(todo => todo.size === FILTERS[1].value) : filter === FILTERS[2].value ?
                allTodos.filter(todo => todo.size === FILTERS[2].value) : allTodos.filter(todo => todo.size === FILTERS[3].value);
        setTodos(todos)
    }, [allTodos, filter])

    const handleDrag = (ev) => {
        setDragId(ev);
    };

    const handleDrop = (ev) => {
        const todoBox = todos.find((todo) => todo.id === dragId);
        const dropTodoBox = todos.find((todo) => todo.id === ev);

        const todoBoxOrder = todoBox.order;
        const dropTodoBoxOrder = dropTodoBox.order;

        const newTodosState = todos.map((todo) => {

            if (todo.id === dragId) {
                todo.order = dropTodoBoxOrder;
            }
            if (todo.id === ev) {
                todo.order = todoBoxOrder;
            }
            return todo;
        });

        setTodos(newTodosState);
    };
    return (
        <ul className='todo-list'>
            {
                todos && todos.length ?
                    <List>
                        {todos
                            .sort((a, b) => a.order - b.order)
                            .map((todo, index) => {
                                return <Todo key={index}
                                    todo={todo}
                                    draggable={true}
                                    timer={false}
                                    remove={true}
                                    update={true}
                                    boxNumber={todo.id}
                                    handleDrag={(e) => handleDrag(e)}
                                    handleDrop={(e) => handleDrop(e)} />
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
