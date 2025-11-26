import { useState } from "react";

export default function App() {
  const [currentMood, setCurrentMood] = useState("");
  const [moodHistory, setMoodHistory] = useState([]);
  const [view, setView] = useState(""); // what to show?

  function handleMoodSelect(mood) {
    setCurrentMood(mood);
    setMoodHistory(prev => [...prev, mood]);
  }

  return (
    <>
    <h1>How are you feeling today!</h1>
      <button onClick={() => handleMoodSelect("Happy")}>☺️<br />Happy</button>
      <button onClick={() => handleMoodSelect("Sad")}>😔<br />Sad</button>
      <button onClick={() => handleMoodSelect("Cry")}>😢<br />Cry</button>
      <button onClick={() => handleMoodSelect("Worried")}>😟<br />Worry</button>
      <button onClick={() => handleMoodSelect("Angry")}>😡<br />Angry</button>

      <br /><br />

      <button onClick={() => setView("today")}>Today's Mood</button>
      <button onClick={() => setView("history")}>Mood History</button>

      <br /><br />

      {view === "today" && (
        <p>Today’s Mood: {currentMood || "No mood selected yet."}</p>
      )}

      {view === "history" && (
        <>
          <h3>Past Mood:</h3>
          {moodHistory.length === 0 ? (
            <p>No mood history yet.</p>
          ) : (
            moodHistory.map((mood, index) => (
              <p key={index}>{index + 1}. {mood}</p>
            ))
          )}
        </>
      )}
    </>
  );
}
