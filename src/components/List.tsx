import img from '../assets/Clipboard.svg'
import styles from './List.module.css'

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
                </main>
            </div>
        </div>
    )
}