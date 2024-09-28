import Description from './components/Description/Description';
import Feedback from './components/Feedback/Feedback';
import Options from './components/Options/Options';
import Notification from './components/Notification/Notification';
import { useState } from 'react';
import './App.css';

function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);

  const updateFeedback = feedbackType => {
    if (feedbackType === 'good') {
      setFeedback({ ...feedback, good: feedback.good + 1 });
    }
    if (feedbackType === 'neutral') {
      setFeedback({ ...feedback, neutral: feedback.neutral + 1 });
    }
    if (feedbackType === 'bad') {
      setFeedback({ ...feedback, bad: feedback.bad + 1 });
    }
  };
  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };
  const hasFeedback =
    feedback.good > 0 || feedback.neutral > 0 || feedback.bad > 0;
  return (
    <div>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        hasFeedback={hasFeedback}
        resetFeedback={resetFeedback}
      />
      {!hasFeedback && <Notification message="No feedback yet" />}
      {hasFeedback && (
        <Feedback
          feedback={feedback}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      )}
    </div>
  );
}

export default App;
