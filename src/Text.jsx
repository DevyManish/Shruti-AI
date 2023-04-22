import React, { useState } from "react";
import axios from "axios";

function Text() {
  const [input, setInput] = useState("");
  const [conversation, setConversation] = useState([]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const options = {
      method: "POST",
      url: "https://chatgpt-api7.p.rapidapi.com/ask",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "9ec25d2accmsha2f4b9a8bf1feccp12fd72jsn7fa8b52e09eb",
        "X-RapidAPI-Host": "chatgpt-api7.p.rapidapi.com",
      },
      data: JSON.stringify({ query: input }),
    };

    axios
      .request(options)
      .then(function (response) {
        const { conversation_id, response: output } = response.data;

        const speechOptions = {
          method: "POST",
          url: "https://voicerss-text-to-speech.p.rapidapi.com/",
          params: { key: "a2931e5820ef4ce6945537f9827726be" },
          headers: {
            "content-type": "application/x-www-form-urlencoded",
            "X-RapidAPI-Key":
              "9ec25d2accmsha2f4b9a8bf1feccp12fd72jsn7fa8b52e09eb",
            "X-RapidAPI-Host": "voicerss-text-to-speech.p.rapidapi.com",
          },
          data: new URLSearchParams({
            src: output,
            hl: "en-us",
            r: "0",
            c: "mp3",
            f: "44khz_16bit_stereo",
            ssml: "false",
            b64: "false",
          }),
        };

        axios.request(speechOptions).then(function (response) {
          const audio = new Audio("data:audio/mp3;base64," + response.data);
          audio.play();
        });

        setConversation([...conversation, { input, output }]);
        setInput("");
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <>
      <div>
        <h1>Chatbot</h1>
        <form onSubmit={handleFormSubmit}>
          <input type="text" value={input} onChange={handleInputChange} />
          <button type="submit">Send</button>
        </form>
        <ul>
        <ul>
  {this.state.history.map((item, index) => (
    <React.Fragment key={index}>
      <li key={index}>
        <strong>Me:</strong> {item.input}
      </li>
      <li key={`${index}-output`}>
        <strong>Bot:</strong> {item.output}
      </li>
    </React.Fragment>
  ))}
</ul>

        </ul>
      </div>
    </>
  );
}

export default Text;
