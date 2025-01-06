import { PostCard } from "./PostCard";
import { Post } from "../../entities/Post";

type PostListProps = {
  posts: Post[];
};

export const PostList = ({ posts }: PostListProps) => {
  return (
    <>
      <h3 className="blog__subtitle">All blog posts</h3>
      <div className="blog__posts-wrapper">
        {" "}
        {posts.map((el) => (
          <PostCard {...el} key={el.id} />
        ))}
      </div>
    </>
  );
};
