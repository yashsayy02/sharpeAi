import './App.css';
import {Route, Routes} from "react-router-dom"
import { Toaster } from 'react-hot-toast';

import HomePage from './pages/HomePage';
import TransactionPage from './pages/TransactionPage';
import DataPage from './pages/DataPage';


function App() {
  return (
      <div className="">
        <Toaster/>
          <Routes>
              <Route exact path="/" Component={HomePage}></Route>
              <Route path="/transactionPage" Component={TransactionPage}></Route>
              <Route path="/dataPage" Component={DataPage}></Route>
          </Routes>
      </div>
  );
}

export default App;
