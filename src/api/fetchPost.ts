import { Post } from "../entities/Post";
import { useFetch } from "../hooks/useFetch";

type fetchPostProps = {
  url: string;
  post_id: string;
};

export const fetchPost = ({ url, post_id }: fetchPostProps) => {
  const postUrl: string = url + `/${post_id}`;
  return useFetch<Post>({ url: postUrl });
};
