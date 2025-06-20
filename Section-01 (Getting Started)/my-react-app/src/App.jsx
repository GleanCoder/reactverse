import reactLogo from "./assets/react.svg";
import "./App.css";
import { useState } from "react";

const content = [
  [
    "React is extremely popular",
    "It makes building complex, interactive UIs a breeze",
    "It's powerful & flexible",
    "It has a very active and versatile ecosystem",
  ],
  [
    "Components, JSX & Props",
    "State",
    "Hooks (e.g., useEffect())",
    "Dynamic rendering",
  ],
  [
    "Official web page (react.dev)",
    "Next.js (Fullstack framework)",
    "React Native (build native mobile apps with React)",
  ],
  [
    "Vanilla JavaScript requires imperative programming",
    "Imperative Programming: You define all the steps needed to achieve a result",
    "React on the other hand embraces declarative programming",
    "With React, you define the goal and React figures out how to get there",
  ],
];

function App() {
  const [contentIndex, setdisplayIndex] = useState(0);
  return (
    <>
      <div>
        <div className="flex">
          <img src={reactLogo} alt="react logo" />
          <h1>React=Declarative UI Programming</h1>
        </div>
        <center>
          With React, define the target UI state(s) - not the steps to get
          there!
          <br />
          Instead, React will figure out & perform the necessary steps
        </center>
      </div>
      <div className="margin-top">
        <div id="tabs">
          <menu>
            <button
              className={contentIndex == 0 ? "active" : ""}
              onClick={() => setdisplayIndex(0)}
            >
              Why React?
            </button>
            <button
              className={contentIndex == 1 ? "active" : ""}
              onClick={() => setdisplayIndex(1)}
            >
              Core Features
            </button>
            <button
              className={contentIndex == 2 ? "active" : ""}
              onClick={() => setdisplayIndex(2)}
            >
              Related Resources
            </button>
            <button
              className={contentIndex == 3 ? "active" : ""}
              onClick={() => setdisplayIndex(3)}
            >
              React vs JS
            </button>
          </menu>
          <div id="tab-content">
            <ul>
              {content[contentIndex].map((item) => {
                return <li key={item}>{item}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
