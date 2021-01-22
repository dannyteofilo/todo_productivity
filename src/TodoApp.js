import './styles/styles.scss';
import { Provider } from 'react-redux';
import { getStore } from './redux/store/store';
import { TodoScreen } from './views/TodoScreen';


function TodoApp() {
  return (
    <Provider store={getStore()}>
      <TodoScreen />
    </Provider>
  );
}

export default TodoApp;
