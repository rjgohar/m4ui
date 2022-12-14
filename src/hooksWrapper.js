import useCheckSession from "./hooks/checkSession";

const HooksWrapper = ({ children }) => {
  useCheckSession();

  return <>{children}</>;
};

export default HooksWrapper;
