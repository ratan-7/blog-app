import { BrowserRouter, Routes, Route } from "react-router-dom"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import CreatePost from "./pages/CreatePost"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/signup"
            element={<Signup />}
          >

          </Route>

          <Route
            path="/"
            element={<Login />}
          ></Route>

          <Route
            path="/dashboard"
            element={<Dashboard />}
          ></Route>

          <Route
            path="/post"
            element={<CreatePost />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
