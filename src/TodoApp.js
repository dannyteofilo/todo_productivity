import './styles/styles.scss';
import { Provider } from 'react-redux';
import  {getStore}  from './redux/store/store';


function TodoApp() {
  return (
    <Provider store={getStore()}>
      hello
    </Provider>
  );
}

export default TodoApp;
