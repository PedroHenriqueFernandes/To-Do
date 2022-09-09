import { useState, ChangeEvent } from 'react'
import { Task } from './Task'

import styles from './List.module.css'
import imgPlus from '../assets/plus.svg'

export function List() {
    const [tasks, setTasks] = useState([''])

    function handleCreateTasks() {
        event!.preventDefault()

        setTasks([...tasks, newTask])
        setNewTask('')
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLInputElement>) {
        setNewTask(event.target.value)
    }

    const [newTask, setNewTask] = useState('')

    const isNewTaskEmpty = tasks.length === 1

    return (
        <div>
            <form onSubmit={handleCreateTasks} className={styles.createTask}>
                <input onChange={handleNewCommentChange} value={newTask} type="text" placeholder='Adicione uma nova tarefa' />
                <button type='submit'>Criar <img src={imgPlus} alt="icon plus" /></button>
            </form>

            <div className={styles.contentList}>
                <div className={styles.boxList}>
                    <header className={styles.headerList}>
                        <div className={styles.tarefasCriadas}>Tarefas Criadas <div className={styles.numberCount}><span>0</span></div></div>
                        <div className={styles.tarefasConcluidas}>Concluidas <div className={styles.numberCount}><span>0</span></div></div>
                    </header>
                </div>

                <div className={styles.commentList}>
                    {tasks.map(task => {
                        return <Task key={task} content={task} taskIsEmpty={isNewTaskEmpty} />
                    })}
                </div>
            </div>
        </div>
    )
}