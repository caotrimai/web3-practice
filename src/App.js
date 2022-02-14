import React from 'react';
import { Counter } from './features/counter/Counter';
import { useWeb3 } from './features/web3Api';

function App() {
  const { web3, isInitialize } = useWeb3();
  console.log(web3);
  
  return (
    <div className="App">
      <header className="App-header">
        {isInitialize ? 'Initialize' : 'Not initialize'}
        <Counter />
        <p>
          Wellcome
        </p>
        
      </header>
    </div>
  );
}

export default App;
