import React, { useState, useEffect } from 'react'
import { useForm } from '../hooks/useForm';
import { Textfield, Button, Icon } from 'react-mdl';
import { addTodo, fetchUpdateReset, updatetodo } from '../redux/actions/addTodo';
import { useDispatch, useSelector } from 'react-redux';

export const Form = () => {

    const defaultForm = {
        text: '',
        timeSelect: '0',
        isUpdate: false
    }
    const timeOpt = ['Small', 'Medium', 'Large']


    const store = useSelector(store => store)
    const dispatch = useDispatch();

    const { update } = store;
    const [form, setform] = useState({ defaultForm })
    const [formValues, handleInputChange, reset] = useForm(defaultForm);
    const { text, timeSelect } = formValues

    useEffect(() => {
        const { text, timeSelect } = formValues;
        setform({ text, timeSelect })
    }, [formValues])

    useEffect(() => {
        if (update) {
            const { id, text, timeSelect } = update;
            reset({ id, text, timeSelect, isUpdate: true });
        }
        return () => {
            dispatch(fetchUpdateReset())
        }
    }, [update])

    const handleAdd = (e) => {
        const { isUpdate, id } = formValues
        e.preventDefault();
        const data = { ...formValues, status: 'todo', date: new Date(), time: setTime() }
        if (isUpdate) {
            dispatch(updatetodo(id, data))
        } else {
            dispatch(addTodo(data))
        }
        reset();
    }

    const setTime = () => {
        const hour = 60, small = 30, medium = 45, large = 60;
        switch (form.timeSelect) {
            case '0': {
                return small * hour;
            }
            case '1': {
                return medium * hour;
            }

            default: {
                return large * hour;
            }
        }
    }

    const handleSelect = (e) => {
        console.log('handle select: ', e);
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
                    <select name='timeSelect' value={form.timeSelect ? form.timeSelect : timeSelect} onChange={handleSelect}>
                        {timeOpt.map((item, index) => {
                            return <option key={index} value={index}>{item}</option>
                        })}
                    </select>
                </div>
                <Button type='submit' raised accent>Add</Button>
            </form>
        </div>
    )
}
