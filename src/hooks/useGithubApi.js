/* eslint-disable import/no-anonymous-default-export */
import { useContext } from "react";
import { Context as GitHubContext } from "../context/GithubContext";

export default () => {

  const {
    fetchUserProfile,
    fetchUserFollowers,
    fetchUserRepos,
  } = useContext(GitHubContext);

  const githubRequests = async (username) => {
    await Promise.allSettled([
      fetchUserProfile(username),
      fetchUserFollowers(username),
      fetchUserRepos(username),
    ]);
  }

  return [githubRequests];
};