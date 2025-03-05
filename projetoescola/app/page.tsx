import React from 'react'; 
import Cabecalho from '@/components/Cabecalho'; 
import Footer from '@/components/Footer'; 
import '../app/global.css';
import '@/components/Aluno';
import Aluno from '@/components/Aluno';
 

function Home() { 

  return ( 

    <> 
      <Cabecalho /> 

      <Aluno/>

      <Footer /> 
    </> 

  ); 

} 

 

export default Home; 