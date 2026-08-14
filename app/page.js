"use client";
import { useState, useEffect } from "react";
import TaskInput from "../components/TaskInput";
import TaskList from "../components/TaskList";
import { supabase } from "../lib/supabase";

export default function Home() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editText, setEditText] = useState("");
  useEffect(() => {
  async function getTasks() {
    const { data, error } = await supabase
      .from("tasks")
      .select("*");

    if (error) {
      console.log(error);
      return;
    }

    setTasks(data);
  }

  getTasks();
}, []);

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