import { Badge } from "./Badge";
import { Categories } from "./CardConfig";
import { getRandomCategories } from "./utils/getRandomCategories";

export const BadgeList = () => {
  const randomCategories = getRandomCategories({
    categories: Categories,
    count: 3,
  });

  return (
    <div className="badges-wrapper">
      {randomCategories.map((el) => (
        <Badge title={el} key={el} />
      ))}
    </div>
  );
};
