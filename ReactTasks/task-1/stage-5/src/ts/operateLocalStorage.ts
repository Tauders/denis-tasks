import { isLists } from './isType';
import { ListOfTasks } from './types';

const localStorageListsKey = 'lists';

export const getItemsFromLocalStorage = (defaultValues: ListOfTasks[] = []) => {
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

export const setItemToLocalStorage = (lists: ListOfTasks[]) => {
  localStorage.setItem(localStorageListsKey, JSON.stringify(lists));
};
