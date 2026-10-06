import { useState, useEffect } from 'react';
import Header from './Components/Header/Header.tsx';
import Screen from './Components/Screen/Screen.tsx'
import './App.css';
import { AppProvider } from './contexts/context.tsx';

function App() {

return (
  <AppProvider>
    <Header/>
    <Screen/>
  </AppProvider>
);
}

export default App;