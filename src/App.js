import './App.css';

import Header from './components/Header';
import Info from './components/Info';
import Tabla from './components/Tabla';
import Promedio from './components/Promedio';

function App() {
  return (
    <div className='App'>
      <Header />
      <Info />
      <Tabla />
      <Promedio />
    </div>
  );
}

export default App;
