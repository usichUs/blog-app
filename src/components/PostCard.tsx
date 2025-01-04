import { Post } from "../entities/Post";
import blogImage from "../assets/blog_img.png";
import { BadgeList } from "./BadgeList";

export const PostCard = ({ title, body }: Post) => {
  return (
    <div className="blog__post">
      <img src={blogImage} alt="blog image" />
      <h2>{title}</h2>
      <p className="blog__text">{body}</p>
      <BadgeList />
    </div>
  );
};
