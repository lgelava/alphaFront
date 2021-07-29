import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Admin from "./components/admin/Admin";
import BlogAdmin from "./components/admin/BlogAdmin";
import ProductsAdmin from "./components/admin/ProductsAdmin";
import Posts from "./components/blog/Posts";
import PostInner from "./components/blog/PostInner";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/admin" component={Admin} />
        <Route path="/admin/blog" component={BlogAdmin} />
        <Route path="/admin/products" component={ProductsAdmin} />
        <Route path="/blog" component={Posts} />
        <Route path="/postInner/:id" component={PostInner} />
      </Router>
    </div>
  );
}

export default App;
