import Description from './components/Description/Description';
import Feedback from './components/Feedback/Feedback';
import Options from './components/Options/Options';
import Notification from './components/Notification/Notification';
import { useState } from 'react';
import './App.css';
import { useEffect } from 'react';

function App() {
 const [feedback, setFeedback] = useState(() => {
   const val = localStorage.getItem('countValue');
   const parsedVal = JSON.parse(val) ?? { good: 0, neutral: 0, bad: 0 };
   return parsedVal;
 });
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback =
    totalFeedback > 0
      ? Math.round((feedback.good / (feedback.good + feedback.bad)) * 100)
      : 0;
  useEffect(() => {
    const stringifiedValue = JSON.stringify(feedback);
     localStorage.setItem('countValue', stringifiedValue);

  }, [feedback]);
  

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
