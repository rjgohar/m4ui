import { MUIBASEURL } from "../../HTTP/urls";

export const newsletter = async (payload) => {
  const res = await MUIBASEURL.post("api/v1/auth/email", payload, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
  });
  return res;
};
