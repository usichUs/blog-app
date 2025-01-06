import { Post } from "../../entities/Post";
import { BadgeList } from "../badge/BadgeList";

export const OpenedPostCard = ({ title, body }: Post) => {
  return (
    <div className="blog__post">
      <h2>{title}</h2>
      <p className="blog__text">{body}</p>
      <BadgeList />
    </div>
  );
};
