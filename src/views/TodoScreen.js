import React from 'react';
import { Card } from 'react-mdl';
import { Form } from '../components/Form';
import { TodoList } from '../components/TodoList';


export const TodoScreen = () => {
    return (
        <div className='todo-screen-container'>
            <i className='fas fa-calendar-check fa-5x'></i>
            <Card shadow={4} className="todo-card">
                <div className='title'>
                    <h3><i className='fas fa-check-square'></i>Todo Productivity</h3>
                </div>
                <div className='form'>
                    <Form />
                </div>
                <div className='list'>
                    <TodoList/>
                </div>
            </Card>
        </div>
    )
}
