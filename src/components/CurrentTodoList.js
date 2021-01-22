import React from 'react'
import { useSelector } from 'react-redux'
import { getTodos } from '../redux/selectors';
import { List, Card, ProgressBar,Icon } from 'react-mdl';
import { Todo } from './Todo';


export const CurrentTodoList = () => {
    const allTodos = useSelector(getTodos);
    const state = useSelector(state => state);
    const todos = allTodos.filter(todo => todo.status === 'inProgress' || todo.status === 'onHold');
    console.log('alltodos: ', allTodos);
    return (
        <ul className='todo-list'>
            {
                todos && todos.length &&
                <div className='current'>
                    <div className='title'>
                    <Icon name="timelapse" />
                    <h5>Todo in progress</h5>
                    </div>
                    {/* <ProgressBar indelterminate /> */}
                    <List>
                        {
                            todos.map((todo, index) => {
                                return <Card shadow={3} >
                                    <Todo key={index} todo={todo} timer={true} remove={false} update={false} />
                                </Card>
                            })
                        }
                    </List>
                </div>
            }
        </ul>
    )
}
