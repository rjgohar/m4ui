import { MUIBASEURL } from "../../HTTP/urls";
import { Octokit, App } from "octokit";
import { configure } from "@testing-library/react";

const config = {
  headers: {
    "content-type": "application/vnd.github+json",
  },
};

const octokit = new Octokit({
  auth: process.env.GITHUB,
});

export const github = async (payload) => {
  const res = await octokit.request(
    "POST /repos/KevinHermansDZTT/test_issues/issues",
    payload,
    config
  );
  return res;
};

// await octokit.request("POST /repos/{owner}/{repo}/issues", {
//   owner: "OWNER",
//   repo: "REPO",
//   title: "Found a bug",
//   body: "I'm having a problem with this.",
//   assignees: ["octocat"],
//   milestone: 1,
//   labels: ["bug"],
// });

export const getGithub = async () => {
  const res = await octokit.request(
    "GET /repos/KevinHermansDZTT/test_issues/issues?author:KevinHermansDZTT",
    {
      owner: "KevinHermansDZTT",
      repo: "test_issues",
    }
  );
  return res.data;
};
