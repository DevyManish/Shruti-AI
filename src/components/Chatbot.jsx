import React, { Children, useEffect, useState } from 'react';
import axios from 'axios';

import Navbar from './Navbar';

const apiKey = import.meta.env.VITE_MY_API_KEY;

const Chatbot = () => {
    const [input, setInput] = useState("");
    const [conversation, setConversation] = useState([]);
    const [prompt, setPrompt] = useState("");

    const changeHandler = (e) => {
        setInput(e.target.value);
    }

    const chatResponse = async () => {
        const url = 'https://api.openai.com/v1/chat/completions';
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        };

        const newInput = input;
        setInput(""); 

        const data = {
            model: 'gpt-3.5-turbo',
            messages: conversation.concat([{ role: 'user', content: newInput }]),
            temperature: 0.7
        };

        try {
            setPrompt(newInput);
            const response = await axios.post(url, data, { headers });
            if (response.data.choices && response.data.choices.length > 0) {
                const content = response.data.choices[0].message.content;
                setConversation([...conversation, { role: 'assistant', content }]);
            } else {
                console.log('No response content found.');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };



    const submitHandler = (e) => {
        e.preventDefault();
        if (input.trim() !== "") {
            chatResponse();
        }
    }

    return (
        <div className="flex justify-center items-center mx-auto">
            <div className="w-11/12 border rounded ">
                <div>
                    <div className="w-full">
                        <Navbar name="Shruti" logo="https://i.postimg.cc/vBd2MN55/5cb480cd5f1b6d3fbadece79.png" />
                        <div className="relative w-full p-6 overflow-y-auto h-[40rem]">
                            <ul className="space-y-2">
                                {conversation.map((item, id) => (
                                    <li key={id} className={item.role === 'user' ? 'flex justify-start' : 'flex justify-end'}>
                                        <div className={`relative max-w-xl px-4 py-2 ${item.role === 'user' ? 'text-gray-700' : 'text-gray-700 bg-gray-100'} rounded shadow`}>
                                            <span className="block text-justify">{item.content==="assistant"}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>

                        </div>
                        <div className="sticky bottom-0 z-10">
                            <form onSubmit={submitHandler}>
                                <div className="flex items-center">
                                    <input
                                        type="text"
                                        placeholder="Ask me something..."
                                        value={input}
                                        onChange={changeHandler}
                                        className="w-full px-4 py-2 mr-2 text-gray-700 border rounded focus:outline-none"
                                    />
                                    <button
                                        type="submit"
                                        className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none"
                                    >
                                        Send
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chatbot;
