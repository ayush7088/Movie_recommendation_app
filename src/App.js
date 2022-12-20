import React, { useState } from "react";
import "./styles.css";

const data = {
  Comedy: [
    [
      "Ted",
      "4/5",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm7RSp4_Fx2f0_dAioftUZGMvkP8WGSn1jDA&usqp=CAU"
    ],
    [
      "The Hangover",
      "4.5/5",
      "https://m.media-amazon.com/images/I/81OwO1F-SMS.jpg"
    ],
    [
      "You Don't Mess With The Zohan",
      "4/5",
      "https://64.media.tumblr.com/e8d18bb4dbbe468c0c8e54386b0e73fb/tumblr_pkrzq1oZTH1r8iw09o1_1280.jpg"
    ]
  ],
  Inspirational: [
    [
      "October Sky",
      "4.5/5",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgm9DK7DTCFUPeMF4xeRBvzTw3h0R_Jg1BSg&usqp=CAU"
    ],
    [
      "Udaan",
      "4.5/5",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDQV0zF0THBaFMQFJRBx2G3-AqLqmLS6gaPA&usqp=CAU"
    ]
  ],
  Action: [
    [
      "A-Team",
      "3.5/5",
      "https://image3.mouthshut.com/images/imagesp/925602661s.jpg"
    ],
    [
      "Olympus Has Fallen",
      "4/5",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWnfv_WgpZfQDfyFOd8x3MgZoJDW-5X3hC7Q&usqp=CAU"
    ],
    [
      "Top-Gun:Maverick",
      "5/5",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSyS9Y3C0KtbPpJ27hv5130nB-eTKf_TUvsg&usqp=CAU"
    ]
  ]
};

const list = Object.keys(data);

export default function App() {
  const [meaning, setMeaning] = useState([
    [
      "Ted",
      "4/5",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm7RSp4_Fx2f0_dAioftUZGMvkP8WGSn1jDA&usqp=CAU"
    ],
    [
      "The Hangover",
      "4.5/5",
      "https://images.moviesanywhere.com/eebd935228b3a121b0b07c023ca5651e/92201c53-a2d7-40f9-a0c9-ae018f711cfc.jpg"
    ],
    [
      "You Don't Mess The The Zohan",
      "4/5",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFC7C7q5rZ7xQG-fzLRrLXtG8Gw5B82FyYDg&usqp=CAU"
    ]
  ]);

  function listItemClickHandler(item) {
    var meaning = data[item];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>
        My Movie Recommedations
        <span>🎥🎞🎬</span>
      </h1>
      <p className="intro">See my favourite movies based on genres.</p>
      {list.map((item) => {
        return (
          <span
            className="btn"
            key={item}
            onClick={() => listItemClickHandler(item)}
            style={{
              cursor: "pointer",
              border: "1px solid black"
            }}
          >
            {item}
          </span>
        );
      })}
      <hr className="break" />
      <div class="output-div">
        {meaning.map((item) => {
          return (
            <div className="output">
              <div className="title">{item[0]}</div>
              <div className="rating">Rating: {item[1]}</div>
              <div className="photo">
                <img class="photo" src={item[2]} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
