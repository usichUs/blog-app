import { FC } from "react";
import { PostCard, Post } from "./PostCard";

type PostListProps = {
  data: NonNullable<Post[] | null>;
};

export const PostList: FC<PostListProps> = ({ data }) => {
  return (
    <>
      {data.map((el) => (
        <PostCard {...el} key={el.id} />
      ))}
    </>
  );
};
