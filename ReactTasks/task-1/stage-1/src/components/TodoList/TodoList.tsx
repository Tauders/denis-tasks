import Card from '../Card/Card';
import classes from './TodoList.module.scss';
import dataTasks, { task } from '../../data/dataTasks';
import { sort, generateID } from '../../utils';

type TodolistProps = {
  title: string;
};

const Todolist: React.FC<TodolistProps> = ({ title }) => {
  const setId: Set<number> = new Set();
  const list: Array<task> = dataTasks.map((task, index) => {
    task.id = generateID(setId);
    task.order = index + 1;
    return task;
  });
  return (
    <section className={classes.todoListSection}>
      <h2 className={classes.todoListSection__title}>{title}</h2>
      <ul className={classes.list}>
        {list.sort(sort).map(item => {
          return (
            <Card
              key={item.id}
              title={item.title}
              description={item.description}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Todolist;
