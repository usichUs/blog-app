import { FC } from "react";

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export const PostCard: FC<Post> = ({ id, title, body }) => {
  return (
    <>
      <h2>{title}</h2>
      <h3>Пост №{id}</h3>
      <p>{body}</p>
    </>
  );
};
