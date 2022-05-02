import { Link, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Logout } from "./components/Logout";
import { NewOrder } from "./components/NewOrder";
import { Orders } from "./components/Orders";
import { ProtectedRoute } from "./components/ProtextedRoute";

function App() {
  return (
    <div className="App">
      <div>
        <Link className="nav-home" to="/">
          Home
        </Link>
        {/* Show either login or logout below */}
        <Link className="nav-logout" to="/logout">
          Logout
        </Link>
        <Link className="nav-login" to="/login">
          Login
        </Link>
      </div>

      <Routes>
      <Route path="/" element = {<Home/>}></Route>
      <Route path="/login" element = {<Login/>}></Route>
      <Route path="/logout" element = {<Logout/>}></Route>
      <Route path="/orders" element = {<Orders/>}></Route>
      <Route path="/neworder" element = {<NewOrder/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
