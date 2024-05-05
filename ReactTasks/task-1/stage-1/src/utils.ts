import { Task } from './data/dataTasks';

export const sortByCardOrder = (a: Task, b: Task) => {
  if (a.order === undefined || b.order === undefined) {
    return 0;
  }
  return a.order > b.order ? 1 : -1;
};
