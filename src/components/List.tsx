import { useState, ChangeEvent } from 'react'
import { Task } from './Task'
import { v4 as uuidv4 } from 'uuid';
import img from '../assets/Clipboard.svg'

import styles from './List.module.css'
import imgPlus from '../assets/plus.svg'

interface Task {
    id: string,
    content: string,
    isCheck: boolean
}

export function List() {
    const [newTask, setNewTask] = useState('')
    const [tasks, setTasks] = useState<Task[]>([])
    const [isEmpty, setIsEmpty] = useState(true)
    const [taskCheck, setTaskCheck] = useState(0)

    function handleCreateTasks() {
        event!.preventDefault()

        setIsEmpty(true)
        setTasks([...tasks, {
            id: uuidv4(),
            content: newTask,
            isCheck: false
        }])
        setNewTask('')
    }

    function setCheck(id: string){
        const newTasksWithNewCheck = tasks.map(task =>{
            if(task.id === id){
                task.isCheck = !task.isCheck
            }

            return task
        })

        setTasks(newTasksWithNewCheck)
        console.log(newTasksWithNewCheck)
        countTasksCheck()
    }

    function countTasksCheck(){
        const counterTask = tasks.filter(task => {
            return task.isCheck === true
        })

        setTaskCheck(counterTask.length)
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLInputElement>) {
        setNewTask(event.target.value)
        if(event.target.value != ''){
            setIsEmpty(false)
        } else if(event.target.value === '') setIsEmpty(true)
    }

    function deleteTask(taskToDelete: string) {
        const tasksWithoutDeletedOne = tasks.filter(task => {
            return task.id != taskToDelete
        })
        setTasks(tasksWithoutDeletedOne);
    }

    return (
        <div>
            <form onSubmit={handleCreateTasks} className={styles.createTask}>
                <input onChange={handleNewCommentChange} value={newTask} type="text" placeholder='Adicione uma nova tarefa' />
                <button disabled={isEmpty} type='submit'>Criar <img src={imgPlus} alt="icon plus" /></button>
            </form>

            <div className={styles.contentList}>
                <div className={styles.boxList}>
                    <header className={styles.headerList}>
                        <div className={styles.tarefasCriadas}>Tarefas Criadas <div className={styles.numberCount}><span>{tasks.length}</span></div></div>
                        <div className={styles.tarefasConcluidas}>Concluidas <div className={styles.numberCount}><span>{taskCheck}</span></div></div>
                    </header>
                </div>

                <div className={styles.commentList}>
                    {(tasks.length >= 1) ? (
                        tasks.map(task => (
                            <Task 
                                id={task.id} 
                                key={task.id} 
                                content={task.content} 
                                isCheck={false}
                                deleteTask={deleteTask}
                                checkTask={setCheck}
                            />
                        )
                    )) : (
                        <div className={styles.noTask}>
                            <img src={img} alt="" />
                            <div>
                                <p className={styles.bold}>Você ainda não tem tarefas cadastradas</p>
                                <p className={styles.normal}>Crie tarefas e organize seus itens a fazer</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}