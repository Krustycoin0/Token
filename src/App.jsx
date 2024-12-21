import React from 'react';
import Header from './components/Header';
import TokenTable from './components/TokenTable';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gray-900 text-white">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">Solana Hot Tokens</h2>
        <TokenTable />
      </div>
      <Footer />
    </div>
  );
}

export default App;
