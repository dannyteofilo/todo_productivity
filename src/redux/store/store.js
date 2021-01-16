import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { TodoListReducer } from '../reducers/todoList';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    todoList: TodoListReducer,
})

let store = null;
const sagaMiddleware = createSagaMiddleware();

const configureStore = () => {
    return new Promise((resolve, reject) => {
        try {
            store = createStore(
                reducers,
                composeEnhancers(
                    applyMiddleware(sagaMiddleware)
                )
            );
            sagaMiddleware.run(rootSaga);
            setTimeout(() => resolve(store));
        } catch (e) {
            reject(e);
        }
    });
}

export const getStore = () => {
    return store;
}

export default configureStore;
