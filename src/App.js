import { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😃": "Smiley",
  "🥰": "Love",
  "🤩": "Star struck",
  "😋": "Craving",
  "😂": "Funny",
  "😉": "Wrinking Face"
};

var emojies = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "This emoji is not available in Database";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Inside Outt!</h1>
      <input onChange={emojiInputHandler}></input>
      <div> {meaning}</div>
      <h3>Emojies we know</h3>
      {emojies.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "2rem" }}
            key={emoji}
          >
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}
