import { useState } from "react";
import "./styles.css";

const techDict = {
  "Web Development": [
    "Thapa Technical",
    "CodeWithHarry",
    "Tanay Pratap",
    "Programming with Mosh",
    "freeCodeCamp",
    "Hitesh Choudhary"
  ],
  "Machine Learning": [
    "Kris Naik",
    "3Blue1Brown",
    "Sentdex",
    "Steve Brunton",
    "freeCodeCamp",
    "CodeWithHarry"
  ],
  "D.S.A": [
    "Apna College",
    "freeCodeCamp",
    "Jenny's lectures CS",
    "Apni Kaksha",
    "freeCodeCamp",
    "CodeWithHarry"
  ]
};

export default function App() {
  var techArr = Object.keys(techDict);

  const [meaning, setterOutput] = useState("");

  function clickEventHandler(item) {
    setterOutput(techDict[item].map((e, v) => e));
  }
  return (
    <div className="App">
      <header>
        <span className="main">
          <div id="brand">By Abhishek Mishra</div>
          <span id="heading"> Hand Picked from Youtube</span>
        </span>
      </header>
      {/* <span className="para">{head2}</span> */}
      <div className="info">
        {techArr.map(function (tech) {
          return (
            <div
              id="techArr"
              key={tech}
              onClick={() => clickEventHandler(tech)}
            >
              <div className="contents">{tech}</div>
            </div>
          );
        })}
      </div>
      <div className="meaning">
        <span>{meaning[0]}</span>
        <span>{meaning[1]}</span>
        <span>{meaning[2]}</span>
        <span>{meaning[3]}</span>
        <span>{meaning[4]}</span>
        <span>{meaning[5]}</span>
      </div>
      <footer>
        <span className="foot">
          <span id="headingf">
            About: This WebApp Recommends you the best & hand-picked youtube
            channels for learning the above listed technologies
          </span>
        </span>
      </footer>
    </div>
  );
}
