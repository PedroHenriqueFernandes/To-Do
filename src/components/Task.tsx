import styles from './Task.module.css'
import trash from '../assets/trash.svg'
import checkImg from '../assets/check.svg'
import { useState } from 'react'

interface Tasks {
    id: string;
    content: string;
    deleteTask: (task:string)=>void
}

export function Task({ id, content, deleteTask }: Tasks) {
    const [check, setCheck] = useState(false)

    function handleCheckTask() {
        setCheck(!check)
    }

    function showTask(){
        if(check){
            return <img src={checkImg} alt="" />
        }
    }

    function handleDeleteTask(){
        deleteTask(id)
    }

    return (
        <div>
            <div className={styles.listTask}>
                <div className={styles.checkAndText}>
                    <div onClick={handleCheckTask} className={styles.circleCheckBox}>
                        {showTask()}
                    </div>
                    <p>{content}</p>
                </div>

                <button onClick={handleDeleteTask} className={styles.trash}><img src={trash} alt="" /></button>
            </div>
        </div>
    )
}
