import TaskItem from "./TaskItem";

export default function TaskList({
  tasks,
  setTasks,
  editingIndex,
  setEditingIndex,
  editText,
  setEditText,
}) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          index={index}
          tasks={tasks}
          setTasks={setTasks}
          editingIndex={editingIndex}
          setEditingIndex={setEditingIndex}
          editText={editText}
          setEditText={setEditText}
        />
      ))}
    </ul>
  );
}