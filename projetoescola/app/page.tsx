import React from 'react'; 
import Cabecalho from '@/components/Cabecalho'; 
import Footer from '@/components/Footer'; 
import ListaDeAlunos from "@/components/listaDeAlunos";
import { listaData} from "@/data/dataAlunos";
 

function Home() { 

  return ( 

    <> 
      <Cabecalho /> 

      <main> 
      <h1>MERCADO</h1>
            <p>Lista de Itens Gerais</p>
            <ListaDeAlunos itens={listaData} />
      </main> 

      <Footer /> 
    </> 

  ); 

} 

 

export default Home; 