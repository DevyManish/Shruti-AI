import React, { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";

const Chatbot = () => {

    const [input, setInput] = useState("");
    const [conversation, setConversation] = useState([]);

    const programmingKeywords = ["programming", "code", "coding", "program", "developer", "c", "java", "python", "html", "javascript", "react"];

    const handleInput = (e) => {
        setInput(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const options = {
            method: "POST",
            url: "https://chatgpt-api7.p.rapidapi.com/ask",
            headers: {
                "content-type": "application/json",
                "X-RapidAPI-Key": "9ec25d2accmsha2f4b9a8bf1feccp12fd72jsn7fa8b52e09eb",
                "X-RapidAPI-Host": "chatgpt-api7.p.rapidapi.com",
            },
            data: `{"query":"${input}"}`,
        };

        try {
            const response = await axios.request(options);
            const { conversation_id, response: botResponse } = response.data;

            const containsProgrammingKeyword = programmingKeywords.some(keyword => input.toLowerCase().includes(keyword));
            const output = containsProgrammingKeyword ? `${botResponse}` : botResponse;

            setConversation([...conversation, { input, output }]);
            document.title = input;

            const synth = window.speechSynthesis;
            const utterance = new SpeechSynthesisUtterance(botResponse);
            synth.speak(utterance);
        } catch (error) {
            console.error(error);
        }

        setInput("");
    };


    return (
        <>
            <div className="flex justify-center items-center mx-auto">
                <div className="w-11/12 border rounded ">
                    <div>
                        <div className="w-full">
                            <Navbar name="Shruti" logo="https://i.postimg.cc/vBd2MN55/5cb480cd5f1b6d3fbadece79.png" />
                            <div className="relative w-full p-6 overflow-y-auto h-[40rem]">
                                <ul className="space-y-2">
                                    {conversation.map((item, index) => (
                                        <React.Fragment key={index}>
                                            <li className="flex justify-start">
                                                <div className="relative max-w-xl px-4 py-2 text-gray-700 rounded shadow">
                                                    <span className="block">{item.input}</span>
                                                </div>
                                            </li>
                                            <li className="flex justify-end">
                                                <div className="relative max-w-xl px-4 py-2 text-gray-700 bg-gray-100 rounded shadow">
                                                    <span className="block text-justify">
                                                        {programmingKeywords.some((keyword) => item.input.toLowerCase().includes(keyword.toLowerCase())) ? (
                                                            <code>{item.output}</code>
                                                        ) : (
                                                            item.output
                                                        )}
                                                    </span>
                                                </div>
                                            </li>
                                        </React.Fragment>
                                    ))}
                                </ul>
                            </div>
                            <div className="sticky bottom-0 z-10">
                                <form onSubmit={handleSubmit}>
                                    <div className="flex items-center">
                                        <input
                                            type="text"
                                            placeholder="Ask me something..."
                                            value={input}
                                            onChange={handleInput}
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
        </>
    )
}

export default Chatbot