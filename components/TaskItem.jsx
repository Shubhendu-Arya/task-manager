import Button from "./Button";
import { supabase } from "../lib/supabase";

export default function TaskItem({
  task,
  index,
  tasks,
  setTasks,
  editingIndex,
  setEditingIndex,
  editText,
  setEditText,
}) {
  return (
    <li className="flex justify-between items-center bg-gray-100 p-3 rounded-lg mb-2">
      {editingIndex === index ? (
        <input
          className="border rounded-lg px-2 py-1 flex-1 mr-3"
          value={editText}
          onChange={(e) => {
            setEditText(e.target.value);
          }}
        />
      ) : (
        <>
          {task.completed && "✔️ "}
          {task.completed ? <s>{task.text}</s> : task.text}
        </>
      )}

      <div className="flex gap-5">
        <Button
  variant="delete"
  onClick={async () => {
    const { error } = await supabase
      .from("tasks")
      .delete()
      .eq("id", task.id);

    if (error) {
      console.log(error);
      return;
    }

    setTasks(tasks.filter((t) => t.id !== task.id));
  }}
/>

        <Button
  variant="save"
  onClick={async () => {
    const { error } = await supabase
      .from("tasks")
      .update({
        text: editText,
      })
      .eq("id", task.id);

    if (error) {
      console.log(error);
      return;
    }

    setTasks(
      tasks.map((t) => {
        if (t.id === task.id) {
          return {
            ...t,
            text: editText,
          };
        }
        return t;
      })
    );

    setEditingIndex(null);
    setEditText("");
  }}
/>

        <Button
          variant="edit"
          onClick={() => {
            setEditingIndex(index);
            setEditText(task.text);
          }}
        />

        <Button
  variant="complete"
  onClick={async () => {
    const { error } = await supabase
      .from("tasks")
      .update({
        completed: !task.completed,
      })
      .eq("id", task.id);

    if (error) {
      console.log(error);
      return;
    }

    setTasks(
      tasks.map((t) => {
        if (t.id === task.id) {
          return {
            ...t,
            completed: !t.completed,
          };
        }
        return t;
      })
    );
  }}
/>
      </div>
    </li>
  );
}