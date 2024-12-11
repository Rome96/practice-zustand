import { create, StateCreator } from "zustand";
import { devtools } from "zustand/middleware";
import type { Task, TaskStatus } from "../../interfaces";

// 1. Define the state: {'ID': {id: '1', title: 'titulo', status: 'open'}}

interface TaskState {
  tasks: Record<string, Task> //{[key: string]: Task}
  getTaskByStatus: (status: TaskStatus) => Task[];
}



const storeAPI: StateCreator<TaskState, [["zustand/devtools", never]]> = (set, get) => ({
  tasks: {
    'ABC-1': {id: 'ABC-1', title: 'titulo 1', status: 'open'},
    'ABC-2': {id: 'ABC-2', title: 'titulo 2', status: 'in-progress'},
    'ABC-3': {id: 'ABC-3', title: 'titulo 3', status: 'completed'},
    'ABC-4': {id: 'ABC-4', title: 'titulo 4', status: 'open'},
    'ABC-5': {id: 'ABC-5', title: 'titulo 5', status: 'open'},
    'ABC-6': {id: 'ABC-6', title: 'titulo 6', status: 'in-progress'},
  },

  getTaskByStatus: (status: TaskStatus) => Object.values(get().tasks).filter((task) => task.status === status),
 
})

export const useTaskStore = create<TaskState>()(devtools(storeAPI))