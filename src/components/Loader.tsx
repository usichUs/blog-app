import { Circles } from "react-loader-spinner";

type LoaderProps = {
  size: string;
};

export const Loader = ({ size }: LoaderProps) => {
  return (
    <div className="loader">
      <Circles
        height={size}
        width={size}
        color="#fff"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};
