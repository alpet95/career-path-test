import { ContainerProps } from "../../types";

const Container = ({ children }: ContainerProps) => {
  return <div className="w-full h-full px-[5%] py-0">{children}</div>;
};

export default Container;
