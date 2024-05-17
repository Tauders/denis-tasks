import { sortByCardOrder } from '../ts/utils';
import { v4 as uuidv4 } from 'uuid';

export interface Task {
  id?: string;
  order?: number;
  title: string;
  description: string;
}

export const dataTasks: Array<Task> = [
  {
    title: 'task 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet nulla facilisi morbi tempus iaculis urna.',
  },
  {
    title: 'task 2',
    description:
      'Auctor neque vitae tempus quam. Malesuada bibendum arcu vitae elementum curabitur. Volutpat lacus laoreet non curabitur gravida arcu ac tortor.',
  },
  {
    title: 'task 3',
    description:
      'Tellus integer feugiat scelerisque varius morbi enim nunc. Sed felis eget velit aliquet sagittis id consectetur. Amet mauris commodo quis imperdiet massa.',
  },
  {
    title: 'task 4',
    description:
      'Morbi tristique senectus et netus et. Scelerisque fermentum dui faucibus in. Donec massa sapien faucibus et. Quis enim lobortis scelerisque fermentum dui faucibus in. Integer quis auctor elit sed vulputate mi sit amet.',
  },
  {
    title: 'task 5',
    description:
      'Nunc vel risus commodo viverra maecenas accumsan. Lobortis mattis aliquam faucibus purus in. Pellentesque adipiscing commodo elit at.',
  },
];

export const prepareDataTasks = (data: Array<Task>) => {
  return data
    .map((task, index) => {
      task.id = uuidv4();
      task.order = index + 1;
      return task;
    })
    .sort(sortByCardOrder);
};