import React, { useState, useEffect } from 'react'
import { useForm } from '../hooks/useForm';
import { Textfield, Button, Icon } from 'react-mdl';
import { addTodo, updatetodo } from '../redux/actions/addTodo';
import { useDispatch, useSelector } from 'react-redux';
import { SIZEOPTIONS } from '../constants/constants';
import { setTime } from '../utils/timerSize';

export const Form = () => {

    const defaultForm = {
        text: '',
        size: 'small',
        isUpdate: false
    }
    const timeOpt = [...SIZEOPTIONS]


    const store = useSelector(store => store)
    const dispatch = useDispatch();

    const { update } = store;
    const [form, setform] = useState({ defaultForm })
    const [formValues, handleInputChange, reset] = useForm(defaultForm);
    const { text, size } = formValues

    useEffect(() => {
        const { text, size } = formValues;
        setform({ text, size })
    }, [formValues])

    useEffect(() => {
        if (update) {
            const { id, text, size } = update;
            reset({ id, text, size, isUpdate: true });
        }
    }, [update])

    const handleAdd = (e) => {
        console.log('form Values: ', formValues);
        const { isUpdate, id, size } = formValues
        e.preventDefault();
        const data = { ...formValues, status: 'todo', date: new Date(), time: setTime(size) }
        if (isUpdate) {
            dispatch(updatetodo(id, data))
        } else {
            dispatch(addTodo(data))
        }
        reset();
    }

    const handleSelect = (e) => {
        handleInputChange(e);
    }
    return (
        <div className='form-container'>
            <form onSubmit={handleAdd}>
                <Textfield
                    onChange={handleInputChange}
                    label="Text..."
                    name='text'
                    value={form.text ? form.text : text}
                    required={true}
                />
                <div className='select'>
                    <Icon name="timer" />
                    <select name='size' value={form.size ? form.size : size} onChange={handleSelect}>
                        {timeOpt.map((item, index) => {
                            return <option key={index} value={item.value}>{item.label}</option>
                        })}
                    </select>
                </div>
                <Button type='submit' raised accent>Add</Button>
            </form>
        </div>
    )
}
