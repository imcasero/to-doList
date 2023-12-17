import Header from "./components/pure/Header";
import Tasks from "./components/container/Tasks";
import { useEffect, useState } from "react";

interface Task {
  id: string;
  title: string;
  isCompleted: boolean;
}

const LOCAL_STORAGE_KEY = "todo:tasks";

function App(): JSX.Element {
  const [tasks, setTasks] = useState<Task[]>([]);

  function loadSavedTask(): void {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      setTasks(JSON.parse(saved));
    }
  }

  useEffect(() => {
    loadSavedTask();
  }, []);

  function setTasksAndSave(newTasks: Task[]): void {
    setTasks(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
  }

  function addTask(taskTitle: string): void {
    setTasksAndSave([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false,
      },
    ]);
  }

  function toggleTaskCompletedById(taskId: string): void {
    const newTasks = tasks.map((task) => {
      if (taskId === task.id) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });
    setTasksAndSave(newTasks);
  }

  function deleteTaskById(taskId: string): void {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasksAndSave(newTasks);
  }

  return (
    <>
      <Header onAddTask={addTask} />
      <Tasks
        tasks={tasks}
        onComplete={toggleTaskCompletedById}
        onDelete={deleteTaskById}
      />
    </>
  );
}

export default App;
