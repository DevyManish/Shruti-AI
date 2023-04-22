import React, { useState } from 'react';
import axios from 'axios';

function Chatbot() {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState(null);
  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleAskQuestion = async () => {
    const options = {
      method: 'POST',
      url: 'https://chatgpt-api7.p.rapidapi.com/ask',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': '9ec25d2accmsha2f4b9a8bf1feccp12fd72jsn7fa8b52e09eb',
        'X-RapidAPI-Host': 'chatgpt-api7.p.rapidapi.com'
      },
      data: `{"query":"${question}"}`
    };

    try {
      const response = await axios.request(options);
      setResponse(response.data.response); 
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1 className='text-2xl flex justify-center items-center'>Chatbot</h1>

      <textarea id="message" rows="8" value={question} onChange={handleQuestionChange} className="md:block hidden p-2.5 w-full text-sm md:text-xl text-gray-900 bg-gray-50 rounded-lg border-blue-500 focus:ring-blue-500 focus:border-blue-500 border-2 md:border-4" ></textarea>
      <div className='flex justify-center items-center my-3'>
      <button type="submit" onClick={handleAskQuestion} className=" flex justify-center items-center focus:outline-none text-white bg-purple-700 hover:bg-purple-900 focus:ring-4 focus:ring-purple-600 font-medium rounded-lg text-xs  md:text-lg px-5 py-2.5" >submit</button>
      </div>
      {response && 
      <code className='flex items-center justify-center text-xl '>{response}</code>
      }
    </div>
  );
}

export default Chatbot;
