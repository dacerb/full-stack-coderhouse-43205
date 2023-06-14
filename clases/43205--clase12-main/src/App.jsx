import TecnicaUno from './componentes/TecnicaUno/TecnicaUno';
import TecnicaDos from './componentes/TecnicaDos/TecnicaDos';
import TecnicaTres from './componentes/TecnicaTres/TecnicaTres';
import EstilosCondicional from './componentes/EstilosCondicional/EstilosCondicional';
import BotonCondicional from './componentes/BotonCondicional/BotonCondicional';
import './App.css';

function App() {
  return (
    <>
      <h1>Renderizado Condicional</h1>
      <TecnicaUno nombre={"Tinki Winki"}/>
      <TecnicaDos booleano={false}/>
      <TecnicaTres booleano={false}/>
      <EstilosCondicional booleano={true} clase={"nuevaClase"}/>
      <BotonCondicional/>
    </>
  );
}

export default App;
