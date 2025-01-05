import { useParams } from "react-router";
import { fetchPost } from "../api/fetchPost";
import { PostCard } from "../components/PostCard";
import { fetchComments } from "../api/fetchComments";
import { CommentList } from "../components/CommentList";

export const PostPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data, error } = fetchPost({
    url: "/api/posts",
    post_id: id ? id : "",
  });

  const { data: comments, error: commentsError } = fetchComments({
    url: "api/posts",
    post_id: id ? id : "",
  });

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return <div>No data found</div>;
  }

  if (!comments) {
    return <div>No comments</div>;
  }

  return (
    <>
      <PostCard {...data} />
      <CommentList comments={comments} />
    </>
  );
};
