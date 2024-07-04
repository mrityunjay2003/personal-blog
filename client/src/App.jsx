import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Posts from "./components/Posts";
import './index.css';
import Dashboard from "./pages/admin/Dashboard";
import Login from "./pages/admin/Login";
import NotFound from "./pages/public/NotFound";
import Post from "./pages/public/Post";
import SearchResults from "./pages/public/SearchResults";
const router = createBrowserRouter([
  {
    path: "/",
    element: <><Navbar /><Hero /><Posts /></>
  },
  {
    path: "/post/:_id",
    element: <><Navbar /><Post /></>
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: "*",
    element: <NotFound />
  },
  {
    path: "/results",
    element: <SearchResults />
  },
  {
    path: "/dashboard",
    element: <Dashboard />
  }
])

const App = () => {
  return (
    <div className="min-h-screen bg-noise">
      <RouterProvider router={router} />
      <Footer />
    </div>
  )
}

export default App;
