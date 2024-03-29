import React, { useState } from "react";
import "./header.css";
import { Router, Link } from "react-router-dom";

const refreshPage = () => {
  window.location.reload();
};

function Header({ handleCallBack }) {
  const [show, setShow] = useState(false);
  const [times, setTimes] = useState({
    one: 25,
    two: 15,
    three: 5,
    task: []
  });
  //console.log(times);
  const handleSetting = () => {
    setShow(!show);
  };
  const handleChange = (e) => {
    setTimes({ ...times, [e.target.name]: e.target.value });
  };
  const onTrigger = () => {
    handleCallBack(times);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setShow(false);
    onTrigger();
    const mainData = JSON.parse(localStorage.getItem("mainArr")) || [];
    mainData.push(times);
    localStorage.setItem("mainArr", JSON.stringify(mainData));
    const arr = JSON.parse(localStorage.getItem("timesData")) || [];
    arr.push(times);
    localStorage.setItem("timesData", JSON.stringify(arr));
  };

  return (
    <>
      <ul className="header">
        <div className="logo" onClick={refreshPage}>
          <img src="https://pomofocus.io/icons/icon-white.png" alt="valide" />
          <h3 className="title">Pomofocus</h3>
        </div>
        <li className="items">
          <Link className="link" to="/reports">
            <div className="item">
              <img src="https://pomofocus.io/icons/graph-white.png" alt="" />
              <div className="itemtext">Report</div>
            </div>
          </Link>
        </li>
        <li className="items">
          <Link className="link" to="/">
            <div className="item" onClick={handleSetting}>
              <img src="https://pomofocus.io/icons/config-white.png" alt="" />
              <div className="itemtext">Setting</div>
            </div>
          </Link>
        </li>
        <li className="items">
          <Link className="link" to="/login">
            <div className="item">
              <img src="https://pomofocus.io/icons/user-white.png" alt="" />
              <div>Login</div>
            </div>
          </Link>
        </li>
      </ul>
      {show && (
        <div className="container">
          <div className="head">
            <h4>TIMER SETTING</h4>
            <div onClick={handleSetting} className="remove">
              <img alt="remove" />
            </div>
          </div>
          <div className="time">
            <h4>Time (minutes)</h4>
            <div className="pomo">
              <div className="pomoD">
                <h5>Pomodoro</h5>
                <input
                  value={times.one}
                  type="number"
                  name="one"
                  onChange={handleChange}
                />
              </div>
              <div className="pomoD">
                <h5>Short</h5>
                <input
                  value={times.three}
                  type="number"
                  name="three"
                  onChange={handleChange}
                />
              </div>
              <div className="pomoD">
                <h5>Long</h5>
                <input
                  value={times.two}
                  type="number"
                  name="two"
                  onChange={handleChange}
                />
                <h5>task</h5>
                <input
                  value={times.task}
                  type="text"
                  name="task"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="fotter">
            <button className="btnOk" onClick={handleSubmit}>
              OK
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
