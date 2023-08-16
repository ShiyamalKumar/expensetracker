import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ExpenseTracker from './components/ExpenseTracker';
import './App.css'; 

function App() {
  return (
    <ExpenseTracker/>
  );
}

export default App;
