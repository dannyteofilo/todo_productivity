import React from 'react'
import { useForm } from '../hooks/useForm';
import { Textfield, Button } from 'react-mdl';

export const Form = () => {

    const [formValues, handleInputChange] = useForm({
        description: ''
    })

    const { description } = formValues;
    const handleAdd = (e) => {
        e.preventDefault();
        console.log('e: ', e, formValues);
    }
    return (
        <div className='form-container'>
            <form onSubmit={handleAdd}>
                <Textfield
                    onChange={handleInputChange}
                    label="Text..."
                    name='description'
                    value={description}
                />
                <Button type='submit' raised accent>Add</Button>
            </form>
        </div>
    )
}
