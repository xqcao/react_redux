import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Welcome from "./components/Welcome";
import About from "./components/About";
import Count from "./components/Count";
import Todo from "./components/Todo";
import ReverseInt from "./components/ReverseInt";
import CodeTest1 from "./components/CodeTest1";
import CodeBlockComponent from "./components/CodeBlockComponent";
import FourSUm from "./components/FourSUm";
import CountAndSay from "./components/CountAndSay";
import UbuntuSparkInit from "./components/UbuntuSparkInit";

const routes = [
  { name: "Welcome", url: "/", component: Welcome },
  // { name: "Welcome", url: "/react_redux", component: Welcome },
  { name: "About Page", url: "/about", component: About },
  { name: "Count Page", url: "/count", component: Count },
  { name: "TODO Page", url: "/todo", component: Todo },
  { name: "Reverse Int", url: "reverseint", component: ReverseInt },
  { name: "Code Test1 Page", url: "/codetest1", component: CodeTest1 },
  { name: "code Block page", url: "/language", component: CodeBlockComponent },
  { name: "4 Sum Code", url: "/4sum", component: FourSUm },
  { name: "Count And Say", url: "/countsay", component: CountAndSay },
  { name: "ubuntu and spark", url: "/ubuntuspark", component: UbuntuSparkInit },
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
