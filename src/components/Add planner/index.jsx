import { useState, useEffect } from "react";
import TaskList from "./TaskList";

function AddPlanner() {
  const [myTasks, setMyTasks] = useState([]);
  const [subject, setSubject] = useState("");
  const [hours, setHours] = useState("");

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
      setMyTasks(storedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(myTasks));
  }, [myTasks]);

  const handleAddTask = () => {
    if (!subject || !hours) return;

    const newTask = {
      subject,
      hours: parseInt(hours), // Parse hours as integer
    };

    setMyTasks([...myTasks, newTask]);
    setSubject("");
    setHours("");
  };

  const handleIncreaseHours = (index) => {
    const updatedTasks = [...myTasks];
    updatedTasks[index].hours += 1;
    setMyTasks(updatedTasks);
  };

  const handleDecreaseHours = (index) => {
    const updatedTasks = [...myTasks];
    updatedTasks[index].hours -= 1;
    setMyTasks(updatedTasks);
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      <h2 style={{ marginBottom: "20px" }}>Geekster Education Planner</h2>
      <section style={{ marginBottom: "20px" }}>
        <input
          value={subject}
          type="text"
          placeholder="Subject"
          onChange={(e) => setSubject(e.target.value)}
          style={{ padding: "10px", marginRight: "10px", width: "200px" }}
        />
        <input
          value={hours}
          type="number"
          placeholder="Hours"
          onChange={(e) => setHours(e.target.value)}
          style={{ padding: "10px", marginRight: "10px", width: "100px" }}
        />
        <button
          onClick={handleAddTask}
          style={{
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "3px",
            cursor: "pointer",
          }}
        >
          Add
        </button>
      </section>

      <section>
        {myTasks.map((task, index) => (
          <TaskList
            key={index}
            subject={task.subject}
            hours={task.hours}
            onIncrease={() => handleIncreaseHours(index)}
            onDecrease={() => handleDecreaseHours(index)}
          />
        ))}
      </section>
    </div>
  );
}

export default AddPlanner;
