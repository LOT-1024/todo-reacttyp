import todoLogo from '../../assets/todoLogo.svg'
import styles from './header.module.css'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { useState } from 'react'

export function Header({ handleAddTask } : {handleAddTask: any}) {
    const [title, setTitle] = useState('')

    function handleSubmit(event:any) {
        event.preventDefault()

        handleAddTask(title)
        setTitle('')
    }

    function onChangeTitle(event:any) {
        setTitle(event.target.value)
    }

    return(
        <header className={styles.header}>
            <img src={todoLogo} />

            <form onSubmit={handleSubmit} className={styles.newTaskForm}>
                <input type="text" placeholder='Add a new task' onChange={onChangeTitle} value={title} />
                <button>Create <AiOutlinePlusCircle size={20} /></button>
            </form>
        </header>
    )
}