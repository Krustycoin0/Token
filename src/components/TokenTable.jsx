import React from 'react';

function TokenTable() {
    const tokens = [
        { id: 1, name: 'Token A', price: '$0.12', change: '+1.2%', volume: '$100K' },
        { id: 2, name: 'Token B', price: '$0.55', change: '-0.7%', volume: '$150K' },
         { id: 3, name: 'Token C', price: '$0.22', change: '+0.3%', volume: '$200K' },
        { id: 4, name: 'Token D', price: '$0.35', change: '-0.3%', volume: '$250K' },
         { id: 5, name: 'Token E', price: '$0.42', change: '+0.1%', volume: '$300K' },
        { id: 6, name: 'Token F', price: '$0.65', change: '-1.7%', volume: '$350K' }
    ];
  return (
    <div className="overflow-x-auto">
       <table className="min-w-full bg-gray-800 border-collapse">
        <thead className="border-b border-gray-700">
          <tr>
            <th className="py-2 px-4">Name</th>
            <th className="py-2 px-4">Price</th>
            <th className="py-2 px-4">24H Change</th>
            <th className="py-2 px-4">24H Volume</th>
          </tr>
        </thead>
        <tbody>
          {tokens.map(token => (
             <tr key={token.id} className="border-b border-gray-700">
              <td className="py-2 px-4">{token.name}</td>
              <td className="py-2 px-4">{token.price}</td>
              <td className={`py-2 px-4 ${token.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                {token.change}
                </td>
              <td className="py-2 px-4">{token.volume}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TokenTable;
