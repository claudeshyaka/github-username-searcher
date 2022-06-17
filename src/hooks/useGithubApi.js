/* eslint-disable import/no-anonymous-default-export */
// Import
import { useContext } from "react";
import { Context as GitHubContext } from "../context/GithubContext";

// useGithubApi Hook
export default () => {

  const {
    fetchUserProfile,
    fetchUserFollowers,
    fetchUserRepos,
    fetchRateLimit,
  } = useContext(GitHubContext);

  // Async function to call actions from the github data context.
  const githubRequests = async (username) => {
  
    await Promise.allSettled([
      fetchUserProfile(username),
      fetchUserFollowers(username),
      fetchUserRepos(username),
      fetchRateLimit(),
    ]);
  }

  return [githubRequests];
};