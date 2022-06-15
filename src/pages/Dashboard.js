// Dashboard is the landing of our application
import React from 'react';

import NavBar from '../components/NavBar';
import SearchBar from '../components/SearchBar';
import UserInfo from '../components/UserInfo';
import User from '../components/User'

const Dashboard = () => {

    return (
        <main> 
            <NavBar/>
            <SearchBar/>
            <UserInfo/>
            <User/>
        </main>
    )
}

export default Dashboard;