import './App.css';
import PrvaKompa from './components/PrvaKompa';
import DrugaKompa from './components/DrugaKompa';
import {TrecaKompa, CetvrtaKompa} from './components/OstaleKompe';

function App() {
  return (
    <div className="App">
      <h1>Algebra</h1>
      <PrvaKompa />
      <DrugaKompa />
      <TrecaKompa />
      <CetvrtaKompa />
    </div>
  );
}


export default App;
