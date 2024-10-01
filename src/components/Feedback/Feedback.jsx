import styles from "./Feedback.module.css"

const Feedback = ({ feedback, totalFeedback, positiveFeedback }) => {
  return (
    <div>
      <ul className={styles.feedback}>
        <li>Good: {feedback.good}</li>
        <li>Neutral: {feedback.neutral}</li>
        <li>Bad: {feedback.bad}</li>
        <li>Total: {totalFeedback}</li>
        <li>positive: {positiveFeedback}%</li>
      </ul>
    </div>
  );
};

export default Feedback;
