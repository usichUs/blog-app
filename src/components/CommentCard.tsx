import { PostComment } from "../entities/Comment";

export const CommentCard = ({ name, email, body }: PostComment) => {
  return (
    <>
      <p>{name}</p>
      <p>{email}</p>
      <p>{body}</p>
    </>
  );
};
