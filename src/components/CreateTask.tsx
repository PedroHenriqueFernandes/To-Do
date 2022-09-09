import styles from './CreateTask.module.css'
import img from '../assets/plus.svg'

export function CreateTask(){
    return(
        <form className={styles.createTask}>
            <input  type="text" placeholder='Adicione uma nova tarefa'/>
            <button>Criar <img src={img} alt="icon plus" /></button>
        </form>
    )
}