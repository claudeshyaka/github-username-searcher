// Imports
import createDataContext from './createDataContext'
import githubApi from '../services/github'

// Reducer
const gitHubReducer = (state, action) => {
    switch (action.type) {
        case 'fetch_user_profile_success':
            return { ...state, profileData: action.payload, isValidUser: true };
        case "add_searched_user":
            if (state.searchedUsers.some((user) => {
                return user.id === action.payload.id;
            })){
                return state;
            }
            return { ...state, searchedUsers: [...state.searchedUsers, action.payload] };            
        case 'fetch_user_profile_fail':
            return { ...state, isValidUser: false };
        case 'fetch_user_repos_success':
            return { ...state, reposData: action.payload };
        case "fetch_user_followers_success":
            return { ...state, followersData: action.payload };
        default:
            return state;
    }
};


// Actions
// Fetch user profile data
const fetchUserProfile = (dispatch) => async (username) => {
    try {
        const response = await githubApi.get(`/users/${username}`);

        // dispatch user profile data.
        dispatch({ 
            type: 'fetch_user_profile_success',
            payload: response.data
        });

        // add user profile data to searched user array.
        dispatch({
            type: 'add_searched_user',
            payload: response.data,
        });

    } catch(error) {
        dispatch({ 
            type: 'fetch_user_profile_fail',
        });
    }
};

// Fetch users followers data
const fetchUserFollowers = (dispath) => async(username) => {
    try {
        const response = await githubApi.get(`/users/${username}/followers?per_page=50`)
        dispath({
            type: "fetch_user_followers_success",
            payload: response.data,
        });
    } catch (error) {
        dispath({
            type: "fetch_user_followers_fail",
        });
    }
}

// Fetch user repos data.
const fetchUserRepos = (dispatch) => async (username) => {
    try {
        const response = await githubApi.get(`/users/${username}/repos?per_page=50`);

        dispatch({ 
            type: 'fetch_user_repos_success',
            payload: response.data
        });
    } catch (error) {
        dispatch({ 
            type: 'fetch_user_repos_fail',
        });
    }
};


// export
export const { Context, Provider } = createDataContext(
    gitHubReducer,
    {
        fetchUserProfile, 
        fetchUserRepos, 
        fetchUserFollowers,
    },
    {
        profileData: null, 
        reposData: [],
        followersData: [],
        searchedUsers: [],
        requests: 0,
        loading: false,
        isValidUser: false,
    }
)