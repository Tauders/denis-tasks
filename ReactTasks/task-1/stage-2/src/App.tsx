import classes from './App.module.scss';
import { TodoList } from './pages/TodoList/TodoList';

export const App = () => {
  return (
    <main className={classes.main}>
      <h1 className={classes.main__title}>TO-DO List</h1>
      <TodoList title="Tasks" />
    </main>
  );
};
