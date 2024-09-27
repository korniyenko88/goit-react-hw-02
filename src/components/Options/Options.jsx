import styles from './Options.module.css';
const Options = ({ onAddGood, onAddNeutral, onAddBad }) => {
  return (
    <div>
      <button onClick={onAddGood} className={styles.button} type="button">
        Good
      </button>
      <button onClick={onAddNeutral} className={styles.button} type="button">
        Neutral
      </button>
      <button onClick={onAddBad} className={styles.button} type="button">
        Bad
      </button>
      <button className={styles.button} type="button">
        Reset
      </button>
    </div>
  );
};

export default Options;
