import Descriotion from './components/Description/Descriotion';
import Feedback from './components/Feedback/Feedback';
import Options from './components/Options/Options';
import { useState } from 'react';
import './App.css';

function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const onAddGood = () => {
    setFeedback({ ...feedback, good: feedback.good + 1 });
  };
  const onAddNeutral = () => {
    setFeedback({ ...feedback, neutral: feedback.neutral + 1 });
  };
  const onAddBad = () => {
    setFeedback({ ...feedback, bad: feedback.bad + 1 });
  };

  return (
    <div>
      <Descriotion />
      <Options
        onAddGood={onAddGood}
        onAddNeutral={onAddNeutral}
        onAddBad={onAddBad}
      />
      <Feedback feedback={feedback} />
    </div>
  );
}

export default App;
