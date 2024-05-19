import { TodoList } from './pages/TodoList/TodoList';
import classes from './App.module.scss';

export const App = () => {
  return (
    <main className={classes.main}>
      <TodoList />
    </main>
  );
};
