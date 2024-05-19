import { useEffect, useState } from 'react';
import { Task, dataTasks, prepareDataTasks } from '../../data/dataTasks';
import classes from './TodoList.module.scss';
import { List } from './components/List/List';
import { v4 as uuidv4 } from 'uuid';
import { HeaderTodoList } from './components/HeaderTodoList/HeaderTodoList';
import {
  getItemsFromLocalStorage,
  setItemToLocalStorage,
} from '../../ts/operateLocalStorage';

export const TodoList = () => {
  const defaultLists = [
    {
      id: uuidv4(),
      title: 'List 1',
      tasks: prepareDataTasks(dataTasks),
    },
  ];

  const [lists, setLists] = useState(getItemsFromLocalStorage(defaultLists));

  useEffect(() => {
    setItemToLocalStorage(lists);
  }, [lists]);

  const handleAddList = (newList: List) => {
    setLists([...lists, newList]);
  };

  const handleDeleteList = (list: List) => {
    setLists(prevLists => prevLists.filter(elem => elem.id !== list.id));
  };

  const handleChangeList = (id: string, title: string, cards: Task[]) => {
    const newLists = lists.map(list => {
      if (list.id === id) {
        return { id, title, tasks: cards };
      }
      return list;
    });
    setLists(newLists);
  };

  return (
    <section className={classes.todoListSection}>
      <HeaderTodoList title="TO-DO List" onAddList={handleAddList} />
      {lists.map(list => (
        <List key={list.id} list={list} onList={handleChangeList} onDeleteList={handleDeleteList} />
      ))}
    </section>
  );
};
