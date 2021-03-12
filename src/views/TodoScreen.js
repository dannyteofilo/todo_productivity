import React from 'react';
import { Card } from 'react-mdl';
import { Filters } from '../components/Filters';
import { Form } from '../components/Form';
import { TodoList } from '../components/TodoList';
import { CurrentTodoList } from '../components/CurrentTodoList';
import { useSelector } from 'react-redux'
import { getTodos } from '../redux/selectors';
import {CODE} from '../constants/constants';
import { RandomTodos } from '../components/RandomTodos';


export const TodoScreen = () => {
    const allTodos = useSelector(getTodos);
    return (
        <div className='todo-screen-container'>
            <i className='fas fa-calendar-check fa-4x'></i>
            <Card shadow={4} className="todo-card">
                <div className='title'>
                    <h3><i className='fas fa-check-square'></i>Todo Productivity</h3>
                </div>
                <div className='form'>
                    <Form />
                </div>
                <div className='dividir'></div>
                <div className='list'>
                    <CurrentTodoList />
                </div>
                {
                    allTodos.length !== 0 &&
                    <div>
                        <Filters />
                    </div>
                }
                <div className='list'>
                    <TodoList />
                </div>
                <div>
                    <RandomTodos/>
                </div>
            </Card>
            <div className='button-random'>
                <a href={CODE.url} className='code'><i className="fab fa-github-alt fa-2x"></i><span>Source code</span></a>
            </div>
            
        </div>
    )
}
