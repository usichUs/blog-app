type getRndCtgProps = {
  categories: string[];
  count?: number;
};

export function getRandomCategories({ categories, count = 3 }: getRndCtgProps) {
  const shuffled = [...categories].sort(() => Math.random() - 0.5);

  return shuffled.slice(0, count);
}
