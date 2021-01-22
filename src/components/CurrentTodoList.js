import React from 'react'
import { useSelector } from 'react-redux'
import { getTodos } from '../redux/selectors';
import { List, Card, Icon } from 'react-mdl';
import { Todo } from './Todo';
import { STATUS } from '../constants/constants';


export const CurrentTodoList = () => {
    const allTodos = useSelector(getTodos);
    const todos = allTodos.filter(todo => todo.status === STATUS.INPROGRESS || todo.status === STATUS.ONHOLD);
    return (
        <ul className='todo-list'>
            {
                todos.length !== 0 &&
                <div className='current'>
                    <div className='title'>
                        <Icon name="timelapse" />
                        <h5>Todo in progress</h5>
                    </div>
                    <List>
                        {
                            todos.map((todo, index) => {
                                return <Card shadow={3} key={index}>
                                    <Todo todo={todo} timer={true} remove={false} update={false} />
                                </Card>
                            })
                        }
                    </List>
                </div>
            }
        </ul>
    )
}
