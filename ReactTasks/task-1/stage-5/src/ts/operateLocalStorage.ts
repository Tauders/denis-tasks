import { List } from '../pages/TodoList/components/List/List';
import { isLists } from './isType';

const localStorageListsKey = 'lists';

export const getItemsFromLocalStorage = (defaultValues: List[] = []) => {
  const listsJson = localStorage.getItem(localStorageListsKey);
  if (listsJson === null) {
    return defaultValues;
  }

  const lists = JSON.parse(listsJson);

  if (!isLists(lists)) {
    return defaultValues;
  }

  return lists;
};

export const setItemToLocalStorage = (lists: List[]) => {
  localStorage.setItem(localStorageListsKey, JSON.stringify(lists));
};
