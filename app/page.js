"use client";
import { useState } from "react";
import TaskInput from "../components/TaskInput";
import TaskList from "../components/TaskList";

export default function Home() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editText, setEditText] = useState("");

  return (
    <div className= "min-h-screen bg-blue-300 flex justify-center items-center">

      <div className= "bg-amber-100 p-8 rounded-2xl shadow-xl w-[700px] h-[600px]" >
      <h1 className= "text-3xl font-bold font-serif text-center mb-6">Task Manager</h1>

      <TaskInput
        task={task}
        setTask={setTask}
        tasks={tasks}
        setTasks={setTasks}
      />
      <TaskList
      tasks={tasks}
      setTasks={setTasks}
      editingIndex={editingIndex}
      setEditingIndex={setEditingIndex}
      editText={editText}
      setEditText={setEditText}
    />
      <h2>
        {task}
      </h2>

    </div>
    </div>
  );
}