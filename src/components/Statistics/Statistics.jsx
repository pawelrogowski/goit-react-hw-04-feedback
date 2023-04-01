import PropTypes from 'prop-types';
import styles from './statistics.module.css';

const statClassName = styles.stat;

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <p className={statClassName}>Good: {good}</p>
      <p className={statClassName}>Neutral: {neutral}</p>
      <p className={statClassName}>Bad: {bad}</p>
      <p className={statClassName}>Total: {total}</p>
      <p className={statClassName}>Positive feedback: {positivePercentage}%</p>
    </div>
  );
};

Statistics.propTypes = {
  bad: PropTypes.number.isRequired,
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default Statistics;
