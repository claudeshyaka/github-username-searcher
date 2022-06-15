import createDataContext from './createDataContext'
import githubApi from '../services/github'

// mock Data
// import mockProfileData from './mockUserProfile';
import mockRepos from './mockRepos';

// Add reducer
const gitHubReducer = (state, action) => {
    switch (action.type) {
        case 'fetch_user_profile':
            return { ...state, profileData: action.payload };
        case 'fetch_user_repos':
            return { ...state, reposData: action.payload };
        case "fetch_requests_limit":
            return { ...state, requests: action.payload }; 
        case "fetch_user_followers":
            return { ...state, followersData: action.payload };
        default:
            return state;
    }
};

// Add actions to dispatch
const fetchUserProfile = (dispatch) => async (username) => {

    try {
        const response = await githubApi.get(`/users/${username}`);
        console.log("User Data:", response);

        dispatch({ 
            type: 'fetch_user_profile',
            payload: response.data
        });
    } catch(error) {
        console.log(error);
    }
};

const fetchUserFollowers = (dispath) => async(username) => {
    try {
        const response = await githubApi.get(`/users/${username}/followers?per_page=50`)
        dispath({
            type: "fetch_user_followers",
            payload: response.data,
        })
    } catch (error) {
        console.log(error);
    }
}

const fetchUserRepos = (dispatch) => () => {
    const response = mockRepos;

    dispatch({ 
        type: 'fetch_user_repos',
        payload: response
    })
}

// Get Rate limits 
const fetchRequestsLimit = (dispatch) => async () =>{
    try {
        const { data } = await githubApi.get("/rate_limit");

        const { remaining } = data.rate
        console.log(remaining);
        
        if (remaining > 0){
            dispatch({
                type: "fetch_requests_limit",
                payload: remaining,
            })
        }
        else {
            // throw an error.
        }

    } catch (error) {
        console.log(error)
    }
}  

// export
export const { Context, Provider } = createDataContext(
    gitHubReducer,
    {
        fetchUserProfile, 
        fetchUserRepos, 
        fetchRequestsLimit,
        fetchUserFollowers,
    },
    {
        profileData: null, 
        reposData: null,
        followersData: null,
        requests: 0,
        loading: false,
    }
)