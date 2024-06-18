import { TodoLists } from './pages/TodoLists/TodoLists';
import classes from './App.module.scss';

export const App = () => {
  return (
    <main className={classes.main}>
      <TodoLists />
    </main>
  );
};
