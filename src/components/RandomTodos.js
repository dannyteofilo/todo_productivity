import React, { useEffect, useState } from 'react'
import { Button } from 'react-mdl';
import { useDispatch, useSelector } from 'react-redux';
import { getTodos } from '../redux/selectors';
import { fetchRandomTodos } from '../redux/actions/addTodo';
import { RANDOMTEXT, SIZEOPTIONS } from '../constants/constants';
import { setTime } from '../utils/timerSize';


export const RandomTodos = () => {

    const allTodos = useSelector(getTodos);
    const [id, setId] = useState(1);

    const defaultTotal = 50;
    const todos = [];

    const texts = [...RANDOMTEXT];
    const sizeOpt = [...SIZEOPTIONS];

    const defaultForm = {
        id: 0,
        order: 0,
        completed: true,
        text: '',
        size: '',
        isUpdate: false,
        status: "done",
        date: '',
        time: 0,
    }

    const dispatch = useDispatch();

    useEffect(() => {
        if (allTodos.length !== 0) {
            const auxId = allTodos[allTodos.length - 1].id;
            setId(auxId);
        }
    }, [allTodos])

    const setText = () => {
        let randomText = Math.random() * (texts.length);
        randomText = Math.floor(randomText)
        return texts[randomText];
    }

    const setSize = () => {
        let randomSize = Math.random() * (sizeOpt.length);
        randomSize = Math.floor(randomSize);
        return sizeOpt[randomSize].value;
    }  

    const handleMake = () => {
        let count = id;

        while (count < id + defaultTotal) {
            const size = setSize();
            const form = {
                ...defaultForm,
                id: count,
                order: count,
                text: setText(),
                size: size,
                date: new Date(),
                time: setTime(size),

            }
            todos.push(form);
            count++;
        }
        dispatch(fetchRandomTodos(todos, count));
    }
    return (
        <div>
            <Button raised colored onClick={handleMake}>Generate random Todos</Button>
        </div>
    )
}
