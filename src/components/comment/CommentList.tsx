import { PostComment } from "../../entities/PostComment";
import { CommentCard } from "./CommentCard";

type CommentListProps = {
  comments: PostComment[];
};

export const CommentList = ({ comments }: CommentListProps) => {
  return (
    <div className="post__comments-wrapper">
      {comments.map((el) => (
        <CommentCard {...el} key={el.id} />
      ))}
    </div>
  );
};
