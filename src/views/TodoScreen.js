import React from 'react'
import { Card, CardTitle, CardText, CardActions, CardMenu, IconButton, Button } from 'react-mdl'

export const TodoScreen = () => {
    return (
        <div className='todo-screen-container'>
            <Card shadow={4} className="todo-card">
                <div className='title'>
                    Todo Productivity
                </div>
                <div className='form'>
                    Form
                </div>
                <div className='list'>
                    List
                </div>
            </Card>
        </div>
    )
}
