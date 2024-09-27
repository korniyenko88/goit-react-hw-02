const Feedback = ({feedback}) => {
  return (
    <div>
      <ul>
        <li>Good: {feedback.good}</li>
        <li>Neutral: {feedback.neutral}</li>
          <li>Bad: {feedback.bad}</li>
        <li>Total: 0</li>
        <li>positive: 0%</li>
      </ul>
    </div>
  );
};

export default Feedback;
