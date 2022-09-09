import { useState, ChangeEvent } from 'react'
import { Task } from './Task'
import { v4 as uuidv4 } from 'uuid';

import styles from './List.module.css'
import imgPlus from '../assets/plus.svg'

export function List() {
    const [tasks, setTasks] = useState([{
        id: uuidv4(),
        content: ''
    }])
    const [isEmpty, setIsEmpty] = useState(true)

    function handleCreateTasks() {
        event!.preventDefault()

        setIsEmpty(true)
        setTasks([...tasks, {
            id: uuidv4(),
            content: newTask,
        }])
        setNewTask('')
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLInputElement>) {
        setNewTask(event.target.value)
        if(event.target.value != ''){
            setIsEmpty(false)
        } else if(event.target.value === '') setIsEmpty(true)
    }

    function deleteTask(commentToDelete: string) {
        const commentsWithoutDeletedOne = tasks.filter(task => {
            return task.id != commentToDelete
        })
        setTasks(commentsWithoutDeletedOne);
    }

    const [newTask, setNewTask] = useState('')

    const isNewTaskEmpty = tasks.length === 1
    const taskLength = tasks.length -1

    return (
        <div>
            <form onSubmit={handleCreateTasks} className={styles.createTask}>
                <input onChange={handleNewCommentChange} value={newTask} type="text" placeholder='Adicione uma nova tarefa' />
                <button disabled={isEmpty} type='submit'>Criar <img src={imgPlus} alt="icon plus" /></button>
            </form>

            <div className={styles.contentList}>
                <div className={styles.boxList}>
                    <header className={styles.headerList}>
                        <div className={styles.tarefasCriadas}>Tarefas Criadas <div className={styles.numberCount}><span>{taskLength}</span></div></div>
                        <div className={styles.tarefasConcluidas}>Concluidas <div className={styles.numberCount}><span>0</span></div></div>
                    </header>
                </div>

                <div className={styles.commentList}>
                    {tasks.map(task => {
                        return <Task 
                        id={task.id} 
                        key={task.id} 
                        content={task.content} 
                        taskIsEmpty={isNewTaskEmpty} 
                        deleteTask={deleteTask}
                        />
                    })}
                </div>
            </div>
        </div>
    )
}