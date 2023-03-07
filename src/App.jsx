import './App.css';
import PrvaKompa from './components/PrvaKompa';
import DrugaKompa from './components/DrugaKompa';
import {TrecaKompa, CetvrtaKompa} from './components/OstaleKompe';

function App() {
  //const jasnoSvima = false; - primjer za ternary operator
  const jasnoSvima = 23;
  
  //ternary operator
  const podnaslov = jasnoSvima 
  ? 
  <h2>Svima je jasno, baš super</h2> 
  : 
  <h2>Svi samo klimaju glavom, nikome nije jasno</h2>;

  //and operator
  const pozdravniFooter = jasnoSvima && <h2>Pozdrav do četvrtka</h2>;
  return (
    <div className="App">
      <h1>Algebra</h1>
      {podnaslov}
      <PrvaKompa />
      <DrugaKompa />
      <TrecaKompa />
      <CetvrtaKompa />
      {pozdravniFooter}
    </div>
  );
}


export default App;
