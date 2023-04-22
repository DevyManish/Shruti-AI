// import React, { useState } from "react";
// import axios from "axios";

// function App() {
//   const [input, setInput] = useState("");
//   const [conversation, setConversation] = useState([]);

//   const handleInput = (e) => {
//     setInput(e.target.value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const options = {
//       method: "POST",
//       url: "https://chatgpt-api7.p.rapidapi.com/ask",
//       headers: {
//         "content-type": "application/json",
//         "X-RapidAPI-Key": "9ec25d2accmsha2f4b9a8bf1feccp12fd72jsn7fa8b52e09eb",
//         "X-RapidAPI-Host": "chatgpt-api7.p.rapidapi.com",
//       },
//       data: `{"query":"${input}"}`,
//     };

//     try {
//       const response = await axios.request(options);
//       const { conversation_id, response: botResponse } = response.data;

//       setConversation([...conversation, { input, output: botResponse }]);

//       // Speak the bot response
//       const synth = window.speechSynthesis;
//       const utterance = new SpeechSynthesisUtterance(botResponse);
//       synth.speak(utterance);
//     } catch (error) {
//       console.error(error);
//     }

//     setInput("");
//   };

//   return (
//     <>
//       <h1 className="flex justify-center items-center my-3 text-2xl mb">Chatbot Demo</h1>
//       <div className="flex justify-center items-center">
//         <ul>
//           {conversation.map((item, index) => (
//             <React.Fragment key={index}>
//               <li>
//                 <strong className="text-lg">Me:</strong>{" "}
//                 <span className="text-lg">{item.input}</span>
//               </li>
//               <li>
//                 <strong>Bot:</strong> {item.output}
//               </li>
//             </React.Fragment>
//           ))}
//         </ul>
//       </div>
//       <form onSubmit={handleSubmit}>
//         <input type="text" value={input} onChange={handleInput} />
//         <button type="submit" className=" flex justify-center items-center focus:outline-none text-white bg-purple-700 hover:bg-purple-900 focus:ring-4 focus:ring-purple-600 font-medium rounded-lg text-xs  md:text-lg px-5 py-2.5" >submit</button>
//       </form>
//     </>
//   );
// }

// export default App;

import React from 'react';
import Test from './Test';
function App(props) {
  return (
    <div>
      <Test name="Shruti" />
    </div>
  )
}

export default App
