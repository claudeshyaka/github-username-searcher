/* eslint-disable import/no-anonymous-default-export */
// Import
import { useContext } from "react";
import { Context as GitHubContext } from "../context/GithubContext";

// useGithubApi Hook
export default () => {

  const {
    state: { remaining },
    fetchUserProfile,
    fetchUserFollowers,
    fetchUserRepos,
    fetchRateLimit,
  } = useContext(GitHubContext);

  // Async function to call actions from the github data context.
  const githubRequests = async (username) => {
  
    const res = await Promise.allSettled([fetchRateLimit()]);

    if (res[0].status === "fulfilled"){ // Check if Promise has returned  
      if (remaining > 0) { // Check if number of request has not been exceed
        await Promise.allSettled([
          fetchUserProfile(username),
          fetchUserFollowers(username),
          fetchUserRepos(username),
        ]);
      }
    }
  }

  return [githubRequests];
};