import { useState, useEffect } from "react";
import { Post } from "../components/PostCard";

type fetchPostsProps = {
  url: string;
};

export const fetchPosts = ({ url }: fetchPostsProps) => {
  const [posts, setPosts] = useState<Post[] | null>(null);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => setPosts(res));
  }, [url]);
  return posts;
};
