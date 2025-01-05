import { PostComment } from "../entities/Comment";
import { CommentCard } from "./CommentCard";

type CommentListProps = {
  comments: PostComment[];
};

export const CommentList = ({ comments }: CommentListProps) => {
  return (
    <>
      {comments.map((el) => (
        <CommentCard {...el} />
      ))}
    </>
  );
};
