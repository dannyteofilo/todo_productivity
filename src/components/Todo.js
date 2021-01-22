import React, { useState, useEffect } from 'react'
import { ListItem, Checkbox, ListItemAction, Icon, IconToggle } from 'react-mdl';
import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo, setStatus, fetchUpdate } from '../redux/actions/addTodo';
import { Timer } from './Timer';
import { STATUS } from '../constants/constants';

export const Todo = ({ todo, timer, remove, update }) => {
    const { id, text, completed, status, time } = todo;
    const dispatch = useDispatch();
    const [play, setPlay] = useState(false);

    const handleStart = (status) => {
        if (!completed) {
            setPlay(true);
            dispatch(setStatus(id, status));
        }
    }

    useEffect(() => {
        if (status === STATUS.ONHOLD) {
            setPlay(false);
        } else {
            setPlay(true);
        }
    }, [status])

    const onFinish = () => {
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
                    (status === STATUS.ONTODO || status === STATUS.ONHOLD) &&
                    <IconToggle ripple name="play_arrow" onClick={() => handleStart(STATUS.INPROGRESS)} />
                }
            </ListItemAction>
            <ListItemAction>
                {
                    update &&
                    <IconToggle ripple name="edit" onClick={() => dispatch(fetchUpdate(STATUS.TODO))} />
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
