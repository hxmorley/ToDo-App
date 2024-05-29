import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul className="Navbar">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/AddTasksPage">Add A Task</Link>
        </li>
        <li>
          <Link to="/DisplayTasksPage">Display All Tasks</Link>
        </li>
      </ul>
    </nav>
  );
}