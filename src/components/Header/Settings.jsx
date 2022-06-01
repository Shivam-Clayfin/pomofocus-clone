import React, { useState } from "react";

export default function Settings() {
  const [show, setShow] = useState(false);
  const [times, setTimes] = useState({
    one: 25,
    two: 15,
    three: 5,
    task: ""
  });

  const handleChange = (e) => {
    setTimes({ ...times, [e.target.name]: e.target.value });
  };
  console.log(times);
  const handleSetting = () => {
    setShow(!show);
  };
  const handleSubmit = (e) => {
    setShow(false);
    e.preventDefault();
  };
  return (
    <>
      <div>
        <h1>TIMER SETTING</h1>
        <div onClick={handleSetting}>
          <img alt="remove" />
        </div>
      </div>
      <div>
        <h1>Time (minutes)</h1>
        <div>
          <div>
            <h4>Pomodoro</h4>
            <input
              value={times.one}
              type="number"
              name="one"
              onChange={handleChange}
            />
          </div>
          <div>
            <h4>Short</h4>
            <input
              value={times.three}
              type="number"
              name="three"
              onChange={handleChange}
            />
          </div>
          <div>
            <h4>Long</h4>
            <input
              value={times.two}
              type="number"
              name="two"
              onChange={handleChange}
            />
            <h4>task</h4>
            <input
              value={times.task}
              type="text"
              name="task"
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div>
        <button onClick={handleSubmit}>OK</button>
      </div>
    </>
  );
}
