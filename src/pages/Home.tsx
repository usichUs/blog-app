import { fetchPosts } from "../api/fetchPosts";
import { PostList } from "../components/PostList";

export const Home = () => {
  const { posts, error } = fetchPosts({ url: "/api/posts" });

  return (
    <div>
      <h1 className="blog__title">The Blog</h1>
      <div className="container">
        {" "}
        {error ? (
          <h2> Error: {error}</h2>
        ) : posts ? (
          <PostList posts={posts} />
        ) : (
          <p>..loading</p>
        )}
      </div>
    </div>
  );
};
