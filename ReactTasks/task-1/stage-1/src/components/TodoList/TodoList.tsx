import Card from '../Card/Card';
import classes from './TodoList.module.scss';
import { dataTasks, Task } from '../../data/dataTasks';
import { sortByCardOrder } from '../../utils';
import { v4 as uuidv4 } from 'uuid';

type TodoListProps = {
  title: string;
};

const TodoList = ({ title }: TodoListProps) => {
  const list: Array<Task> = dataTasks.map((task, index) => {
    task.id = uuidv4();
    task.order = index + 1;
    return task;
  });
  return (
    <section className={classes.todoListSection}>
      <h2 className={classes.todoListSection__title}>{title}</h2>
      <ul className={classes.todoListList}>
        {list.sort(sortByCardOrder).map(item => {
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

export default TodoList;
