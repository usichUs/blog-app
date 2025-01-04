type BadgeProps = {
  title: string;
};

export const Badge = ({ title }: BadgeProps) => {
  return (
    <div className="badge">
      <p>{title}</p>
    </div>
  );
};
