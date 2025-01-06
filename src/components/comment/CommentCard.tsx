import { PostComment } from "../../entities/PostComment";

export const CommentCard = ({ name, email, body }: PostComment) => {
  return (
    <div className="post__comment">
      <p className="comment__email">{email}</p>
      <p className="comment__name">{name}</p>
      <p className="comment__body">{body}</p>
    </div>
  );
};
