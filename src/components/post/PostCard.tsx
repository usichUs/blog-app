import { Post } from "../../entities/Post";
import { BadgeList } from "../badge/BadgeList";
import { Link } from "react-router";

export const PostCard = ({ title, body, id }: Post) => {
  return (
    <Link to={`/posts/${id}`}>
      <div className="blog__post">
        <h2>{title}</h2>
        <p className="blog__text">{body}</p>
        <BadgeList />
      </div>
    </Link>
  );
};
