import { PostComment } from "../entities/PostComment";
import { useFetch } from "../hooks/useFetch";

type fetchCommentsProps = {
  url: string;
  post_id: string;
};

export const fetchComments = ({ url, post_id }: fetchCommentsProps) => {
  const postUrl: string = url + `/${post_id}` + "/comments";
  return useFetch<PostComment[]>({ url: postUrl });
};
