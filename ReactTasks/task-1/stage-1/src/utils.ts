import { task } from './data/dataTasks';

function sort(a: task, b: task) {
  if (a.order === undefined || b.order === undefined) {
    return 0;
  }
  if (a.order > b.order) {
    return 1;
  } else {
    return -1;
  }
}

function generateID(set: Set<number>) {
  let id = Math.floor(Math.random() * 10000);
  while (set.has(id)) {
    id = Math.floor(Math.random() * 10000);
  }
  set.add(id);
  return id;
}

export { sort, generateID };
