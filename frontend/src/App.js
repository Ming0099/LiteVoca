import React, { useState } from 'react';
import { fetchHello } from './services/api';

function App() {
  const [message, setMessage] = useState('');

  const handleClick = async () => {
    const result = await fetchHello();
    setMessage(result);
  };

  return (
    <div style={{ padding: 20 }}>
      <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={handleClick}>Spring API 호출 테스트</button>
      <p>{message}</p>

      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">LiteVoca</h1>
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          tailwind CSS 테스트
        </button>
      </div>
    </div>
  );
}

export default App;
