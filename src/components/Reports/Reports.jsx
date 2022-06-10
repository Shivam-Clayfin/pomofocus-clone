import { Link } from "react-router-dom";
import "./reports.css";

export default function Reports() {
  const mainData = JSON.parse(localStorage.getItem("mainArr")) || [];
  const removeTodoList = (index) => {
    mainData.splice(index, 1);
    localStorage.setItem("mainArr", JSON.stringify(mainData));
  };
  return (
    <div className="containerR">
      <ul className="header">
        <li className="items">
          <Link className="link" to="/">
            <div className="logo">
              <img
                src="https://pomofocus.io/icons/icon-white.png"
                alt="valide"
              />
              <h3 className="title">Pomofocus</h3>
            </div>
          </Link>
        </li>
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
            <div className="item">
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
      <h2 className="taskText"> Previous Tasks</h2>
      {mainData.map((e) => {
        return (
          <>
            <div className="taskList">
              <h4>Task : {e.task}</h4>
            </div>
            <button className="cross" onClick={removeTodoList}>
              dlt
            </button>
          </>
        );
      })}
    </div>
  );
}
