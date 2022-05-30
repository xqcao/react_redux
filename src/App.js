import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Welcome from "./components/Welcome";
import About from "./components/About";
import Count from "./components/Count";
import Todo from "./components/Todo";

const routes = [
  { name: "Welcome", url: "/", component: Welcome },
  { name: "About Page", url: "/about", component: About },
  { name: "Count Page", url: "/count", component: Count },
  { name: "TODO Page", url: "/todo", component: Todo },
];

function App() {
  return (
    <div>
      <h2 className="App">How nginx host python flask webapp</h2>
      <ol>
        {routes.map((el, idx) => (
          <li key={el.name + "-" + idx}>
            <Link to={el.url}>{el.name}</Link>
          </li>
        ))}
      </ol>
      <hr />
      <Routes>
        {routes.map((el, idx) => (
          <Route
            key={el.name + "_" + idx}
            path={el.url}
            element={<el.component />}
          />
        ))}
      </Routes>
    </div>
  );
}

export default App;
