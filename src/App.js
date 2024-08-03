import React from 'react';
import RomanConverter from './components/RomanConverter';
import './App.css';
import TreeMap from './components/TreeMap';
import footballClubs from './data/footballClubs';

function App() {
  const data = footballClubs.flatMap(league => league.children);
  return (
    <div className="App">
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 pt-12">
          TreeMap de Clubes de Futebol
        </h1>
        <TreeMap data={data} width={600} height={400} />
        <RomanConverter />
        
      </div>
    </div>
  );
}

export default App;
