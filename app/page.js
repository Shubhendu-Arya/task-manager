"use client";
import { useState } from "react";

export default function Home() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editText, setEditText] = useState("");

  return (
    <div className= "min-h-screen bg-blue-300 flex justify-center items-center">

      <div className= "bg-amber-100 p-8 rounded-2xl shadow-xl w-[700px] h-[600px]" >
      <h1 className= "text-3xl font-bold font-serif text-center mb-6">Task Manager</h1>

      <div className="flex justify-end items-end gap-5 mb-6">
      <input 
      className="flex-1 border-4 border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400"
      value = {task}
      onChange={(Event) => {
        setTask(Event.target.value);
      }}/>
      <button
      className="bg-blue-400 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition shadow-md shadow-black"
      onClick={() => {
        setTasks([...tasks,
          {
            text: task,
            completed: false
          },
        ]);
        setTask("");
      }}
      >Add</button>
      </div>
      <ul>
        {tasks.map((task, index) =>{
        return <li
          className="flex justify-between items-center bg-gray-100 p-3 rounded-lg mb-2"

          key={index}>
                    {
          editingIndex === index
          ?
          <input
          className="border rounded-lg px-2 py-1 flex-1 mr-3"
          value={editText}
          onChange={(e)=>{
              setEditText(e.target.value);
          }}
          />
          :
          <>
              {task.completed && "✔️ "}
              {task.completed ? <s>{task.text}</s> : task.text}
          </>
          }

         {/*{task.completed ? <s>{task.text}</s>: task.text} */}

        <div className="flex gap-5"> 

        <button 
        className="bg-blue-400 text-white px-4 py-1.5 rounded-lg hover:bg-blue-600 transition shadow-md shadow-black"
        onClick={() => {
          setTasks(
            tasks.filter((task,i)=> {
              return i !== index;
            })                                    
          );
        }}>
          delete
        </button>
        <button
        className="bg-green-500 text-white px-4 py-1.5 rounded-lg hover:bg-green-600 transition shadow-md shadow-black"
        onClick={()=>{
            setTasks(
                tasks.map((task,i)=>{
                    if(i===index){
                        return{
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
        >
        Save
        </button>
        <button
        className="bg-blue-400 text-white px-4 py-1.5 rounded-lg hover:bg-blue-600 transition shadow-md shadow-black"
        onClick={()=>{
        setEditingIndex(index);
        setEditText(task.text);
        }}

        >Edit</button>
        <button
        className="bg-blue-400 text-white px-4 py-1.5 rounded-lg hover:bg-blue-600 transition shadow-md shadow-black"
        onClick={() =>
        {
          setTasks(tasks.map((task,i)=> {
            if(i === index){
              return{
                ...task,
                completed: !task.completed,
              };
            }
            return task;
          }
        ));
        }
        }
        >
          completed
        </button>
        </div>
        </li>;
        })}
      </ul>
      <h2>
        {task}
      </h2>

    </div>
    </div>
  );
}