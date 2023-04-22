import React, { useState } from "react";
import axios from "axios";

function Test(props) {

    const [input, setInput] = useState("");
    const [conversation, setConversation] = useState([]);

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

            setConversation([...conversation, { input, output: botResponse }]);

            // Speak the bot response
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
            <div className="container flex justify-center items-center">
                <div className="w-11/12 border rounded">
                    <div>
                        <div className="w-full">
                            <div className="relative flex items-center p-3 border-b border-gray-300">
                                <img
                                    className="object-cover w-10 h-10 rounded-full"
                                    src="https://i.postimg.cc/vBd2MN55/5cb480cd5f1b6d3fbadece79.png"
                                    alt="username"
                                />
                                <span className="block ml-2 font-bold text-gray-600">{props.name}</span>
                                <span className="absolute w-3 h-3 bg-green-600 rounded-full left-10 top-3"></span>
                            </div>
                            <div className=" w-full p-6 overflow-y-auto h-[40rem]">
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
                                                    <span className="block">{item.output}</span>
                                                </div>
                                            </li>
                                        </React.Fragment>
                                    ))}
                                </ul>
                            </div>

                            <div className="flex justify-between w-full p-3 border-t border-gray-300">
                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <input
                                            type="text" value={input} onChange={handleInput}
                                            placeholder="Message"
                                            className="block w-full py-2 pl-4 mx-3 bg-gray-100 rounded-full outline-none focus:text-gray-700"
                                            name="message"
                                            required=""
                                        />
                                    </div>
                                    <div>
                                        <button type="submit">
                                            <svg
                                                className="w-5 h-5 text-gray-500 origin-center transform rotate-90"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                                            </svg>
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

export default Test
