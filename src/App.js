import "./App.css";
import QLCho from "./components/QLCho";
import InfoCms from "./components/InfoCms";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Chitiet from "./screens/Chitiet/Chitiet";
import Boloc from "./screens/Filter";

function App() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/info">Gửi thông báo CMS</Link>
        </li>
        <li>
          <Link to="/qlcho">Quản lý chợ</Link>
        </li>
        <li>
          <Link to="/boloc">Bộ Lọc</Link>
        </li>
      </ul>
      <Route path="/info" exact component={InfoCms}></Route>
      <Route path="/qlcho" exact component={QLCho}></Route>
      <Route path="/chitiet" exact component={Chitiet}></Route>
      <Route path="/boloc" exact component={Boloc}></Route>
    </Router>
  );
}

export default App;
