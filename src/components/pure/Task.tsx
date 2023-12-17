import * as PropTypes from 'prop-types';

import style from "../../style/task.module.css";
import { TbTrash } from "react-icons/tb";
import { BsFillCheckCircleFill } from "react-icons/bs";

interface TaskProps {
  task: {
    id: string;
    title: string;
    isCompleted: boolean;
  };
  onComplete: (taskId: string) => void;
  onDelete: (taskId: string) => void;
}

function Task({ task, onComplete, onDelete }: TaskProps): JSX.Element {
  return (
    <div className={style.task}>
      <button
        className={style.checkContainer}
        onClick={() => onComplete(task.id)}
      >
        {task.isCompleted ? <BsFillCheckCircleFill /> : <div />}
      </button>
      <p className={task.isCompleted ? style.textCompleted : ""}>
        {task.title}
      </p>
      <button className={style.deleteButton} onClick={() => onDelete(task.id)}>
        <TbTrash size={20} />
      </button>
    </div>
  );
}

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    isCompleted: PropTypes.bool.isRequired,
  }),
  onComplete: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Task;
