import { MUIBASEURL } from "../../HTTP/urls";

export const postLogIn = async (payload) => {
  const res = await MUIBASEURL.post("api/v1/auth/signIn", payload, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
  });
  return res;
};

export const checkSessionAPI = async () => {
  const res = await MUIBASEURL.get("api/v1/auth/checkSession", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("mui4uJWTtoken")}`,
    },
  });
  return res;
};
