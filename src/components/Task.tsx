import styles from './Task.module.css'
import trash from '../assets/trash.svg'
import checkImg from '../assets/check.svg'
import img from '../assets/Clipboard.svg'
import { useState } from 'react'

interface Tasks {
    id: string;
    content: string;
    taskIsEmpty: boolean
    deleteTask: (task:string)=>void
}

export function Task({ id, content, taskIsEmpty, deleteTask }: Tasks) {
    const [check, setCheck] = useState(false)

    function handleCheckTask() {
        setCheck(!check)
    }

    function showTask(){
        if(check){
            return <img src={checkImg} alt="" />
        }
    }

    function testTask() {
        if (taskIsEmpty) {
            return noHaveTasks()
        } else return haveTasks()
    }

    function handleDeleteTask(){
        deleteTask(id)
    }

    function haveTasks() {
        if (content != '') {
            return (
                <div className={styles.listTask}>
                    <div className={styles.checkAndText}>
                        <div onClick={handleCheckTask} className={styles.circleCheckBox}>
                            {showTask()}
                        </div>
                        <p>{content}</p>
                    </div>

                    <button onClick={handleDeleteTask} className={styles.trash}><img src={trash} alt="" /></button>
                </div>
            )
        }
    }


    function noHaveTasks() {
        return (
            <div className={styles.noTask}>
                <img src={img} alt="" />
                <div>
                    <p className={styles.bold}>Você ainda não tem tarefas cadastradas</p>
                    <p className={styles.normal}>Crie tarefas e organize seus itens a fazer</p>
                </div>
            </div>
        )
    }

    return (
        <div>
            {testTask()}
        </div>
    )
}
