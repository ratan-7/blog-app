import { BrowserRouter, Routes, Route } from "react-router-dom"
import Signup from "./pages/Signup/Signup"
import Login from "./pages/Login/Login"
import Dashboard from "./pages/Dashboard/Dashboard"
import CreatePost from "./pages/CreatePost/CreatePost"
import PostDetails from "./pages/PostDetails/PostDetails";


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
          <Route path="/post/:id" element={<PostDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
