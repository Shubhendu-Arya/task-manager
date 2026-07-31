export default function Button({
  variant,
  onClick,
}) {

  let classes = "";
  let text = "";

  if (variant === "add") {
    classes = "bg-blue-400 hover:bg-blue-600";
    text = "Add";
  }

  if (variant === "delete") {
    classes = "bg-red-500 hover:bg-red-600";
    text = "Delete";
  }

  if (variant === "edit") {
    classes = "bg-yellow-500 hover:bg-yellow-600";
    text = "Edit";
  }

  if (variant === "save") {
    classes = "bg-green-500 hover:bg-green-600";
    text = "Save";
  }

  if (variant === "complete") {
    classes = "bg-purple-500 hover:bg-purple-600";
    text = "Complete";
  }
  

  return (
    <button
      className={`${classes} text-white px-4 py-1.5 rounded-lg transition shadow-md shadow-black`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}