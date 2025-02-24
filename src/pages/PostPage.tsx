import { useParams } from "react-router";
import { fetchPost } from "../api/fetchPost";
import { fetchComments } from "../api/fetchComments";
import { CommentList } from "../components/comment/CommentList";
import { OpenedPostCard } from "../components/post/OpenedPostCard";
import { Loader } from "../components/Loader";
import { ErrorPage } from "./ErrorPage";

export const PostPage = () => {
  const { id } = useParams<{ id: string }>();

  const postId = Number(id);
  if (!id || isNaN(postId) || postId < 1 || postId > 100) {
    return (
      <ErrorPage error="Invalid post ID. Please provide an ID between 1 and 100." />
    );
  }

  const { data, error } = fetchPost({
    url: "/api/posts",
    post_id: id,
  });

  const { data: comments, error: commentsError } = fetchComments({
    url: "/api/posts",
    post_id: id,
  });

  if (error) {
    return <ErrorPage error={error} />;
  }

  if (commentsError) {
    return <ErrorPage error={commentsError} />;
  }

  return (
    <div className="container post-page">
      {data ? <OpenedPostCard {...data} /> : <Loader size="200" />}
      {comments ? <CommentList comments={comments} /> : <Loader size="200" />}
    </div>
  );
};
