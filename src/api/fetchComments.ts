import { PostComment } from "../entities/PostComment";
import { useFetch } from "../hooks/useFetch";

type fetchPostsProps = {
  url: string;
  post_id: string;
};

export const fetchComments = ({ url, post_id }: fetchPostsProps) => {
  const postUrl: string = url + `/${post_id}` + "/comments";
  console.log(postUrl);
  return useFetch<PostComment[]>({ url: postUrl });
};
