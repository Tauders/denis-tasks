import { useEffect, useState } from 'react';
import { dataTasks, prepareDataTasks } from '../../data/dataTasks';
import classes from './TodoLists.module.scss';
import { List } from './components/List/List';
import { v4 as uuidv4 } from 'uuid';
import { HeaderTodoLists } from './components/HeaderTodoLists/HeaderTodoLists';
import {
  getItemsFromLocalStorage,
  setItemToLocalStorage,
} from '../../ts/operateLocalStorage';
import { ListOfTasks, Task } from '../../ts/types';



const defaultLists: ListOfTasks[] = [
  {
    id: uuidv4(),
    title: 'List 1',
    tasks: prepareDataTasks(dataTasks),
  },
];

export const TodoLists = () => {
  const [lists, setLists] = useState(getItemsFromLocalStorage(defaultLists));

  useEffect(() => {
    setItemToLocalStorage(lists);
  }, [lists]);

  const handleAddList = (newList: ListOfTasks) => {
    setLists([...lists, newList]);
  };

  const handleDeleteList = (list: ListOfTasks) => {
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
    <section className={classes.todoListsSection}>
      <HeaderTodoLists title="TO-DO Lists" onAddList={handleAddList} />
      {lists.map(list => (
        <List
          key={list.id}
          list={list}
          onChangeList={handleChangeList}
          onDeleteList={handleDeleteList}
        />
      ))}
    </section>
  );
};
