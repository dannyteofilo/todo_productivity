import React, { useState, useEffect } from 'react'
import { ListItem, Checkbox, ListItemAction, Icon, IconToggle } from 'react-mdl';
import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo, setStatus, fetchUpdate } from '../redux/actions/addTodo';
import { Timer } from './Timer';

export const Todo = ({ todo, timer, remove, update }) => {
    const { id, text, completed, status, time } = todo;
    const dispatch = useDispatch();
    const [play, setPlay] = useState(false);

    const inProgress = 'inProgress';
    const onHold = 'onHold';
    const onTodo = 'todo';
    const onDone = 'done';

    const handleStart = (status) => {
        if (!completed) {
            setPlay(true);
            dispatch(setStatus(id, status));
        }
    }

    useEffect(() => {
        console.log('status: ', status);
        if (status === onHold) {
            setPlay(false);
        } else {
            setPlay(true);
        }
    }, [status])

    const onFinish = () => {
        console.log('he finaizado');
        dispatch(toggleTodo(id));
    }

    return (
        <ListItem>
            <Checkbox label={text} ripple checked={completed} onChange={() => dispatch(toggleTodo(id))} />
            <ListItemAction>
                {
                    timer &&
                    <Timer play={play} time={time} finish={onFinish} />
                }
            </ListItemAction>
            <ListItemAction>
                {
                    (status === onTodo || status === onHold) &&
                    <IconToggle ripple name="play_arrow" onClick={() => handleStart(inProgress)} />
                }
            </ListItemAction>
            <ListItemAction>
                {
                    update &&
                    <IconToggle ripple name="edit" onClick={() => dispatch(fetchUpdate(todo))} />
                }
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
