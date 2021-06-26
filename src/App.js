import FetchedPosts from "./components/FetchedPosts";
import PostForm from "./components/PostForm";
import Posts from "./components/Posts";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row bg-danger m-1">
          <div className="col">
            <PostForm />
          </div>
        </div>
        <div className="row">
          <div className="col bg-primary m-1">
            <h2>Синхронные посты</h2>
            <Posts posts={[]} />
          </div>
          <div className="col bg-warning m-1">
            <h2>Асинхронные посты</h2>
            <FetchedPosts posts={[]} />
          </div>
        </div>
      </div>
    </div>
  );
}
