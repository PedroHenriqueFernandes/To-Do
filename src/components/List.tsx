import img from '../assets/Clipboard.svg'
import styles from './List.module.css'
import trash from '../assets/trash.svg'

export function List() {
    return (
        <div className={styles.contentList}>
            <div className={styles.boxList}>
                <header className={styles.headerList}>
                    <div className={styles.tarefasCriadas}>Tarefas Criadas <div className={styles.numberCount}><span>0</span></div></div>
                    <div className={styles.tarefasConcluidas}>Concluidas <div className={styles.numberCount}><span>0</span></div></div>
                </header>

                <main>
                    <div className={styles.noTask}>
                        <img src={img} alt="" />
                        <p>
                            <p className={styles.bold}>Você ainda não tem tarefas cadastradas</p>
                            <p className={styles.normal}>Crie tarefas e organize seus itens a fazer</p>
                        </p>
                    </div>

                    <div className={styles.listTask}>
                        <div className={styles.checkAndText}>

                            <input className={styles.optionInput} type="chekced" />

                            <p>Tarefa 1</p>
                        </div>

                        <div className={styles.trash}><img src={trash} alt="" /></div>
                    </div>
                </main>
            </div>
        </div>
    )
}