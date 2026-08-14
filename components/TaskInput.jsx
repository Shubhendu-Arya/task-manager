import Button from "./Button";
import { supabase } from "../lib/supabase";

export default function TaskInput({
  task,
  setTask,
  tasks,
  setTasks,
}) {
  return (
    <div className="flex justify-end items-end gap-5 mb-6">
      <input
        className="flex-1 border-4 border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400"
        value={task}
        onChange={(e) => {
          setTask(e.target.value);
        }}
      />

      <Button
  variant="add"
  onClick={async () => {
    const { data, error } = await supabase
      .from("tasks")
      .insert([
        {
          text: task,
          completed: false,
        },
      ])
      .select();

    if (error) {
      console.log(error);
      return;
    }

    setTasks([...tasks, data[0]]);
    setTask("");
  }}
      />
    </div>
  );
}