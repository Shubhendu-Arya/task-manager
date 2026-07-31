import Button from "./Button";

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
          onClick={() => {
            setTasks(tasks.filter((task, i) => i !== index));
          }}
        />

        <Button
          variant="save"
          onClick={() => {
            setTasks(
              tasks.map((task, i) => {
                if (i === index) {
                  return {
                    ...task,
                    text: editText,
                  };
                }
                return task;
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
          onClick={() => {
            setTasks(
              tasks.map((task, i) => {
                if (i === index) {
                  return {
                    ...task,
                    completed: !task.completed,
                  };
                }
                return task;
              })
            );
          }}
        />
      </div>
    </li>
  );
}