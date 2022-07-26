import React from 'react';
import './App.css';
import HomePage from './Pages/HomePage';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreaters } from './store';
import { useSelector } from 'react-redux';
import { State } from './store/redusers';
const App: React.FC = () => {
  const dispatch = useDispatch();
  const {deposit, withdraw, bankrut} = bindActionCreators(ActionCreaters,dispatch);
  const state = useSelector((state:State) => state.bank)
  return (
    <div className="App">
      <h1>{state}</h1>
      <button onClick={() => deposit(100)}>Deposit</button>
      <button onClick={() => withdraw(100)}>Withdrow</button>
      <button onClick={() => bankrut(1)}>Bnkrupt</button>
    </div>
  );
}

export default App;
