type ErrorPageProps = {
  error: string;
};

export const ErrorPage = ({ error }: ErrorPageProps) => {
  return (
    <div className="container">
      <div className="error">
        <h1 className="error__msg">
          Oops, something went wrong: <span>{error}</span>
        </h1>
      </div>
    </div>
  );
};
