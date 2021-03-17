import React, { useState, useEffect } from 'react'
import { ListItem, Checkbox, ListItemAction, Icon, IconToggle, ListItemContent } from 'react-mdl';
import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo, setStatus, fetchUpdate } from '../redux/actions/addTodo';
import { Timer } from './Timer';
import { STATUS } from '../constants/constants';

export const Todo = ({ todo, timer, remove, update, boxNumber, handleDrag, handleDrop, draggable }) => {
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

    const handleDragStart = () => {
        handleDrag(boxNumber)
    }

    const handleOnDrop = (e) => {
        const id = parseInt(e.currentTarget.id)
        handleDrop(id)
    }

    return (
        <ListItem
            threeLine
            draggable={draggable}
            id={boxNumber}
            onDragOver={(ev) => ev.preventDefault()}
            onDragStart={handleDragStart}
            onDrop={handleOnDrop}>
            <ListItemAction>
                <Checkbox ripple checked={completed} onChange={() => dispatch(toggleTodo(id))} />
            </ListItemAction>
            <ListItemContent>
                {text}
            </ListItemContent>
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
                    <IconToggle ripple name="edit" onClick={() => dispatch(fetchUpdate(todo))} />
                }
            </ListItemAction>
            <ListItemAction>
                {
                    remove &&
                    <IconToggle ripple name="delete" onClick={() => dispatch(deleteTodo(id))} />
                }
            </ListItemAction>
            <ListItemAction className='dragg'>
                {
                    draggable &&
                    <Icon name='drag_handle' className='drag'></Icon>
                }
            </ListItemAction>

        </ListItem >
    )
}
