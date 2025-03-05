import dataAlunos from '@/data/dataAlunos';

function Aluno(){
    return(
        <>
        {
            dataAlunos.map(function (aluno){
                return(
                    <div key ={aluno.id}>
                        <h3>Nome: {aluno.nome}</h3>
                        <p>Idade: {aluno.idade}</p>
                        <p>turma: {aluno.turma}</p>
                        <img src={aluno.image} alt={aluno.nome}width="200px" style={{borderRadius: 30}}/>
                    </div>
                )
            })
        }
        </>
    );
}
export default Aluno;