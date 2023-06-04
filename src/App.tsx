import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";

const LOCAL_STORAGE_KEY = 'todo:tasks'

function App() {
  const [tasks, setTasks] = useState([])

  function loadSavedTasks() {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY)
    if(saved) {
      setTasks(JSON.parse(saved))
    }
  }

  function setTasksAndSave(newTasks:any) {
    setTasks(newTasks)
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks))
  }

  useEffect(() => {
    loadSavedTasks()
  }, [])

  function addTask(taskTitle:any) {
    setTasksAndSave([...tasks, {
      id: crypto.randomUUID(),
      title: taskTitle,
      isCompleted: false
    }])
  }

  function deleteTaskById(taskId:any) {
    const newTasks = tasks.filter((task:any) => task.id !== taskId)
    setTasksAndSave(newTasks)
  }

  function toggleTaskCompletedById(taskId:any) {
    const newTasks = tasks.map((task:any) => {
      if(task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted
        }
      }
      return task
    })
    setTasksAndSave(newTasks)
  }

  return (
    <div>
      <Header handleAddTask={addTask}/>
      <Tasks
        tasks={tasks}
        onDelete={deleteTaskById}
        onComplete={toggleTaskCompletedById}
      />
    </div>
  )
}

export default App