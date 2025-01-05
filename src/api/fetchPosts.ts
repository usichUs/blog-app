import { Post } from "../entities/Post";
import { useFetch } from "../hooks/useFetch";

type fetchPostsProps = {
  url: string;
};

export const fetchPosts = ({ url }: fetchPostsProps) => {
  return useFetch<Post[]>({ url });
};
