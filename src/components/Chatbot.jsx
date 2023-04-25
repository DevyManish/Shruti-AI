import React, { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";

const Chatbot = () => {

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
            document.title = input;
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
                                                    <span className="block">{item.output}</span>
                                                </div>
                                            </li>
                                        </React.Fragment>
                                    ))}
                                </ul>
                            </div>
                            <div className="sticky bottom-0 z-10">
                                <form onSubmit={handleSubmit}>
                                    <input
                                        type="text" value={input} onChange={handleInput}
                                        placeholder="Message"
                                        className=" w-11/12 py-2 pl-4 mx-3 bg-gray-100 rounded-full outline-none focus:text-gray-700"
                                        name="message"
                                        required=""
                                    />
                                    <button type="button">
                                        <svg
                                            className="hidden md:block w-5 h-5 text-gray-500 origin-center transform rotate-90"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                                        </svg>
                                    </button>
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


// pixabay
// import React, { useState } from "react";
// import axios from "axios";
// import Navbar from "./components/Navbar";

// const Chatbot = () => {

//     const [input, setInput] = useState("");
//     const [conversation, setConversation] = useState([]);
//     const [images, setImages] = useState([]);

//     const handleInput = (e) => {
//         setInput(e.target.value);
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         const chatOptions = {
//             method: "POST",
//             url: "https://chatgpt-api7.p.rapidapi.com/ask",
//             headers: {
//                 "content-type": "application/json",
//                 "X-RapidAPI-Key": "9ec25d2accmsha2f4b9a8bf1feccp12fd72jsn7fa8b52e09eb",
//                 "X-RapidAPI-Host": "chatgpt-api7.p.rapidapi.com",
//             },
//             data: `{"query":"${input}"}`,
//         };

//         try {
//             const chatResponse = await axios.request(chatOptions);
//             const { conversation_id, response: botResponse } = chatResponse.data;
//             document.title=botResponse;

//             setConversation([...conversation, { input, output: botResponse }]);

//             // Image search
//             const imageOptions = {
//                 method: "GET",
//                 url: "https://pixabay.com/api/",
//                 params: {
//                     key: "35712083-cb7a628512ad42923db3bec83",
//                     q: input,
//                     safesearch: true,
//                     per_page: 3,
//                     image_type: "photo"
//                 }
//             };

//             const imageResponse = await axios.request(imageOptions);
//             setImages(imageResponse.data.hits);

//             // Speak the bot response
//             const synth = window.speechSynthesis;
//             const utterance = new SpeechSynthesisUtterance(botResponse);
//             synth.speak(utterance);
//         } catch (error) {
//             console.error(error);
//         }

//         setInput("");
//     };

//     return (
//         <>
//             <div className="flex justify-center items-center mx-auto">
//                 <div className="w-11/12 border rounded ">
//                     <div>
//                         <div className="w-full">
//                             <Navbar name="Shruti" logo="https://i.postimg.cc/vBd2MN55/5cb480cd5f1b6d3fbadece79.png" />
//                             <div className="relative w-full p-6 overflow-y-auto h-[40rem]">
//                                 <ul className="space-y-2">
//                                     {conversation.map((item, index) => (
//                                         <React.Fragment key={index}>
//                                             <li className="flex justify-start">
//                                                 <div className="relative max-w-xl px-4 py-2 text-gray-700 rounded shadow">
//                                                     <span className="block">{item.input}</span>
//                                                 </div>
//                                             </li>
//                                             <li className="flex justify-end">
//                                                 <div className="relative max-w-xl px-4 py-2 text-gray-700 bg-gray-100 rounded shadow">
//                                                     <span className="block">{item.output}</span>
//                                                 </div>
//                                             </li>
//                                         </React.Fragment>
//                                     ))}
//                                 </ul>
//                                 <div className="flex justify-center">
//                                     {images.map((image, index) => (
//                                         <div key={index} className="w-1/3 p-2">
//                                             <img src={image.webformatURL} alt={image.tags} className="w-full" />
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>
//                             <div className="sticky bottom-0 z-10">
//                                 <form onSubmit={handleSubmit}>
//                                     <div className="flex items-center">
//                                         <input
//                                             type="text"
//                                             placeholder="Ask me something..."
//                                             value={input}
//                                             onChange={handleInput}
//                                             className="w-full px-4 py-2 mr-2 text-gray-700 border rounded focus:outline-none"
//                                         />
//                                         <button
//                                             type="submit"
//                                             className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none"
//                                         >
//                                             Send
//                                         </button>
//                                     </div>
//                                 </form>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default Chatbot