import { PostComment } from "../entities/Comment";
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

// https://jsonplaceholder.typicode.com/posts/1/comments
// api/posts/1/comments
