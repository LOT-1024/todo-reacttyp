import { Task } from "../Task";
import styles from './tasks.module.css'

export function Tasks({ tasks, onDelete, onComplete} : {tasks:any, onDelete:any, onComplete:any}) {
  const taskQuantity = tasks.length
  const completedTasks = tasks.filter((task:any) => task.isCompleted).length

  return (
    <section className={styles.tasks}>
      <header className={styles.header}>
        <div>
          <p>Created tasks</p>
          <span>{taskQuantity}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Completed tasks</p>
          <span>{completedTasks} of {taskQuantity}</span>
        </div>
      </header>

      <div className={styles.list}>
        {tasks.map((task:any) => (
          <Task key={task.id} task={task} onDelete={onDelete} onComplete={onComplete}/>
        ))}
      </div>
    </section>
  )
}
