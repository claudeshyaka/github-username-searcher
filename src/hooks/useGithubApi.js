/* eslint-disable import/no-anonymous-default-export */
import { useContext } from "react";
import { Context as GitHubContext } from "../context/GithubContext";

export default () => {

  const {
    state: { remaining },
    fetchUserProfile,
    fetchUserFollowers,
    fetchUserRepos,
    fetchRateLimit,
  } = useContext(GitHubContext);

  const githubRequests = async (username) => {
    const res = await Promise.allSettled([fetchRateLimit()]);
    
    if (res[0].status === "fulfilled"){
      if (remaining > 0) {
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