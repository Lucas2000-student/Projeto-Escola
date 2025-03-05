import dataAlunos from '@/data/dataAlunos';
import styles from '@/components/Aluno.module.css'

function Aluno(){
    return(
        <>
        {
            dataAlunos.map(function (aluno){
                return(
                    <div key ={aluno.id} className={styles.card}>
                        <img src={aluno.image} alt={aluno.nome}width="200px" style={{borderRadius: 30}}/>
                        <div className={styles.content}>
                            <h3>Nome: {aluno.nome}</h3>
                            <p>Idade: {aluno.idade}</p>
                            <p>turma: {aluno.turma}</p>
                        </div>
                    </div>
                )
            })
        }
        </>
    );
}
export default Aluno;