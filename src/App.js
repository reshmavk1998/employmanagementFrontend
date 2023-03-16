
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Admin from './component/Admin';
import Add from './component/Add';
import Edit from './component/Edit';
import View from './component/View';
import Pnf from './component/Pnf';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='' element={<Admin/>} />
        <Route path='add' element={<Add/>} />
        <Route path='edit/:id' element={<Edit/>} />
        <Route path='view/:id' element={<View/>} />
        <Route path={'*'} element={<Pnf/>} />

</Routes>
    </div>
  );
}

export default App;
