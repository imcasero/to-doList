import * as PropTypes from 'prop-types';
import style from "../../style/tasks.module.css";
import Task from "../pure/Task";

interface TaskType {
  id: string;
  title: string;
  isCompleted: boolean;
}

interface TasksProps {
  tasks: TaskType[];
  onComplete: (taskId: string) => void;
  onDelete: (taskId: string) => void;
}

function Tasks({ tasks, onComplete, onDelete }: TasksProps): JSX.Element {
  const taskQuantity = tasks.length;
  const completedTaskQuantity = tasks.filter((task) => task.isCompleted)
    .length;

  return (
    <section className={style.tasks}>
      <header className={style.header}>
        <div>
          <p>Create tasks</p>
          <span>{taskQuantity}</span>
        </div>

        <div>
          <p className={style.textPurple}>Completed</p>
          <span>
            {completedTaskQuantity} of {taskQuantity}
          </span>
        </div>
      </header>
      <div className={style.list}>
        {Array.isArray(tasks) &&
          tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              onComplete={onComplete}
              onDelete={onDelete}
            />
          ))}
      </div>
    </section>
  );
}

Tasks.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      isCompleted: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onComplete: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Tasks;
