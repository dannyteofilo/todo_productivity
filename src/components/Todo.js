import React, { useState } from 'react'
import { ListItem, Checkbox, ListItemAction, Icon, IconToggle } from 'react-mdl';
import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo, setStatus, fetchUpdate } from '../redux/actions/addTodo';
import { Timer } from './Timer';

export const Todo = ({ todo, timer, remove }) => {
    const { id, text, completed, status } = todo;
    const dispatch = useDispatch();
    const [play, setplay] = useState(false)

    const inProgress = 'inProgress';
    const onHold = 'onHold';
    const onTodo = 'todo';
    const onDone = 'done';

    const handleStart = (status) => {
        if (!completed) {
            dispatch(setStatus(id, status));
        }
    }
    return (
        <ListItem>
            <Checkbox label={text} ripple checked={completed} onChange={() => dispatch(toggleTodo(id))} />
            <ListItemAction>
                {
                    timer &&
                    <div className='todo-timer'>
                        <Icon name="timer" />
                        <Timer play={play} time={20} />
                    </div>
                }
            </ListItemAction>
            <ListItemAction>
                {
                    (status === onTodo || status === onHold) &&
                    <IconToggle ripple name="play_arrow" onClick={() => handleStart(inProgress)} />
                }
                {
                    (status === inProgress && timer) &&
                    <IconToggle ripple name="pause_arrow" onClick={() => handleStart(onHold)} />
                }
                {
                    (status === onDone && timer) &&
                    <IconToggle ripple name="restore" onClick={() => handleStart(inProgress)} />
                }
            </ListItemAction>
            <ListItemAction>
                <IconToggle ripple name="edit" onClick={() => dispatch(fetchUpdate(todo))} />
            </ListItemAction>
            <ListItemAction>
                {
                    remove &&
                    <IconToggle ripple name="delete" onClick={() => dispatch(deleteTodo(id))} />
                }
            </ListItemAction>
        </ListItem>
    )
}
