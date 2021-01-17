import React from 'react';
import { Card } from 'react-mdl';
import { Form } from '../components/Form';


export const TodoScreen = () => {
    return (
        <div className='todo-screen-container'>
            <i className='fas fa-check-square fa-5x'></i>
            <Card shadow={4} className="todo-card">
                <div className='title'>
                    <h3>Todo Productivity</h3>
                </div>
                <div className='form'>
                    <Form />
                </div>
                <div className='list'>
                    List
                </div>
            </Card>
        </div>
    )
}
