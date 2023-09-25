import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [apiType, setApiType] = useState('');
  const [apiSpec, setApiSpec] = useState('');
  const [apiToken, setApiToken] = useState('');
  const [apiUrl, setApiUrl] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/execute-command', {
        apiType,
        apiSpec,
        apiToken,
        apiUrl,
      });
      setResult(response.data);
    } catch (error) {
      setResult('Error occurred.');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-3xl font-semibold text-center mb-4 text-blue-600">
          Security Suite
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="apiType" className="text-sm font-medium">
              API Type:
            </label>
            <input
              type="text"
              className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              id="apiType"
              value={apiType}
              onChange={(e) => setApiType(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="apiSpec" className="text-sm font-medium">
              API Spec:
            </label>
            <input
              type="text"
              className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              id="apiSpec"
              value={apiSpec}
              onChange={(e) => setApiSpec(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="apiToken" className="text-sm font-medium">
              API Token:
            </label>
            <input
              type="text"
              className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              id="apiToken"
              value={apiToken}
              onChange={(e) => setApiToken(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="apiUrl" className="text-sm font-medium">
              API URL:
            </label>
            <input
              type="text"
              className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              id="apiUrl"
              value={apiUrl}
              onChange={(e) => setApiUrl(e.target.value)}
            />
          </div>
          <div className="text-center">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mx-auto">
              Run Test
            </button>
          </div>
        </form>
        <div className="mt-4">
          <h2 className="text-2xl font-semibold">Result:</h2>
          <pre className="bg-gray-200 p-4">{result}</pre>
        </div>
      </div>
    </div>
  );
}

export default App;
