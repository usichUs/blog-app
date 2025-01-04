import { useState, useEffect } from "react";
import { Post } from "../entities/Post";

type fetchPostsProps = {
  url: string;
};

export const fetchPosts = ({ url }: fetchPostsProps) => {
  const [posts, setPosts] = useState<Post[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`couldnt fetch data; status: ${res.status}`);
        }
        return res.json();
      })
      .then((res) => {
        setPosts(res);
        setError(null)
      })
      .catch((error) =>{
        setError(error.message)
      });
  }, [url]);

  return {posts, error};
};
