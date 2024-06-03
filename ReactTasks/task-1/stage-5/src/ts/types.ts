export interface Task {
  id?: string;
  order?: number;
  title: string;
  description: string;
}

export type ListOfTasks = {
  id: string;
  title: string;
  tasks: Task[];
};

