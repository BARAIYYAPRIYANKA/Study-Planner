import PropTypes from "prop-types";
import "./TaskList.css"; // Import CSS file for styling

function TaskList({ subject, hours, onIncrease, onDecrease }) {
  return (
    <div className="task-item">
      <span>{subject}</span>
      <span>{hours} hours</span>
      <div>
      <button   onClick={onIncrease} className="action-button">+</button>
      <button onClick={onDecrease} className="action-button">-</button>
      </div>
    </div>
  );
}

TaskList.propTypes = {
    subject: PropTypes.string,
    hours: PropTypes.number,
    onIncrease: PropTypes.func,
    onDecrease: PropTypes.func,
  };
  

export default TaskList;

