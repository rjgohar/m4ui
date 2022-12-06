import { MUIBASEURL } from "../../HTTP/urls";

export const postSignUp = async (payload) => {
  await MUIBASEURL.post("/api/v1/auth/signUp", payload, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
  });
};
