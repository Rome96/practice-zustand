import { useShallow } from 'zustand/shallow';
import { JiraTasks } from '../../components';
import { useTaskStore } from '../../stores/tasks/tasks.store';

export const JiraPage = () => {
  const pendingTasks = useTaskStore(useShallow((state) => state.getTaskByStatus('open')));
  const completedTasks = useTaskStore(useShallow((state) => state.getTaskByStatus('completed')));
  const inProgressTasks = useTaskStore(useShallow((state) => state.getTaskByStatus('in-progress')));

  console.log(pendingTasks, completedTasks, inProgressTasks);

  return (
    <>
      <h1>Tareas</h1>
      <p>Manejo de estado con objectos de Zustand</p>
      <hr />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <JiraTasks title='Pendientes' value='open' tasks={ pendingTasks } />
          <JiraTasks title='Avanzando' value='in-progress' tasks={ inProgressTasks } />
          <JiraTasks title='Terminadas' value='completed' tasks={ completedTasks } />
      </div>
    </>
  );
};