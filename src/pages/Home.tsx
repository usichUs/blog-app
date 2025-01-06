import { fetchPosts } from "../api/fetchPosts";
import { Loader } from "../components/Loader";
import { PostList } from "../components/post/PostList";

export const Home = () => {
  const { data, error } = fetchPosts({ url: "/api/posts" });

  return (
    <div>
      <h1 className="blog__title">The Blog</h1>
      <div className="container">
        {error ? (
          <h2> Error: {error}</h2>
        ) : data ? (
          <PostList posts={data} />
        ) : (
          <Loader size="400" />
        )}
      </div>
    </div>
  );
};
