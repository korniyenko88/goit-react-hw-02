import styles from './Options.module.css';
const Options = ({ onAddFeedback }) => {
  return (
    <div>
      <button
        onClick={() => onAddFeedback('good')}
        className={styles.button}
        type="button"
      >
        Good
      </button>
      <button
        onClick={() => onAddFeedback('neutral')}
        className={styles.button}
        type="button"
      >
        Neutral
      </button>
      <button
        onClick={() => onAddFeedback('bad')}
        className={styles.button}
        type="button"
      >
        Bad
      </button>
      <button className={styles.button} type="button">
        Reset
      </button>
    </div>
  );
};

export default Options;
