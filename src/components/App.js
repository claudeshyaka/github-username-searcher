import React, {useState, useEffect} from "react";

import SearchBar from "./SearchBar";

const App = () => {
    const [profiles, setProfiles] = useState([])
    const [selectedProfile, setSelectedProfile] = useState(null)

    useEffect(() => {
        onTermSubmit('claudeshyaka')
    }, []);

    const onTermSubmit = async term => {
        const response = "" 

        setProfiles(response.data.items)
        setSelectedProfile(response.data.items[0])
    };

    const onProfileSelect = profile => {
        setSelectedProfile(profile)
    }

    return (
        <div className="ui container">
            <SearchBar onFormSubmit={onTermSubmit}/>
            <div className="ui grid">
                <p>Username Info</p>
            </div>
        </div>
    );
};

export default App;