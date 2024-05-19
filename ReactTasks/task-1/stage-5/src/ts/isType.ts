import { Task } from '../data/dataTasks';
import { List } from '../pages/TodoList/components/List/List';

export const isTask = (task: unknown): task is Task => {
  if (
    !(task instanceof Object) ||
    ('id' in task && typeof task.id !== 'string') ||
    ('order' in task && typeof task.order !== 'number')
  ) {
    return false;
  }
  if (
    'title' in task &&
    typeof task.title === 'string' &&
    'description' in task &&
    typeof task.description === 'string'
  ) {
    return true;
  }
  return false;
};

export const isTasks = (tasks: unknown): tasks is Task[] => {
  if (!Array.isArray(tasks)) {
    return false;
  }
  for (const task of tasks) {
    if (!isTask(task)) {
      return false;
    }
  }
  return true;
};

export const isList = (list: unknown): list is List => {
  if (
    !(list instanceof Object) ||
    !('title' in list) ||
    typeof list.title !== 'string' ||
    !('id' in list) ||
    typeof list.id !== 'string' ||
    !('tasks' in list) ||
    !Array.isArray(list.tasks)
  ) {
    return false;
  }
  if (!isTasks(list.tasks)) {
    return false;
  }
  return true;
};

export const isLists = (lists: unknown): lists is List[] => {
  if (!Array.isArray(lists)) {
    return false;
  }
  for (const list of lists) {
    if (!isList(list)) {
      return false;
    }
  }
  return true;
};
