import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { checkUserSessionAction } from "../Features/signIn/signIn.action";

const useCheckSession = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUserSessionAction());
  }, [dispatch]);
};

export default useCheckSession;
