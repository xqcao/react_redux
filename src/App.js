import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Welcome from "./components/Welcome";
import About from "./components/About";
import Count from "./components/Count";
import Todo from "./components/Todo";
import ReverseInt from "./components/ReverseInt";

const routes = [
  { name: "Welcome", url: "/", component: Welcome },
  // { name: "Welcome", url: "/react_redux", component: Welcome },
  { name: "About Page", url: "/about", component: About },
  { name: "Count Page", url: "/count", component: Count },
  { name: "TODO Page", url: "/todo", component: Todo },
  { name: "Reverse Int", url: "reverseint", component: ReverseInt },
];

function App() {
  // useRoutes([
  //   // { path: "/", element: <Welcome /> },
  //   // { path: "/react_redux", element: <Welcome /> },
  // ]);
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
        <Route path="/react_redux" element={<Welcome />} />
      </Routes>
    </div>
  );
}

export default App;
