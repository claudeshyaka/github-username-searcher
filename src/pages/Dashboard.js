// Dashboard is the landing of our application
// Imports
import React, { useContext } from 'react';
import styled from 'styled-components';

import NavBar from '../components/NavBar';
import SearchBar from '../components/SearchBar';
import UserInfo from '../components/UserInfo';
import User from '../components/User'
import { Context as GithubContext } from '../context/GithubContext';

// Function component
const Dashboard = () => {
  // business logic
  const {
    state: { profileData, isValidUser },
  } = useContext(GithubContext);
  
  // JSX
  return (
    <main>
      <NavBar/>
      <SearchBar/>
      <Wrapper>
        {
          (profileData==null) 
          ? <div className="dash">
              <h1>Hi!</h1>
              <h3>Enter username to start!</h3>
            </div> 
          : <>{ 
              !isValidUser
              ? <div className="dash">
                  <h1>Error 404!</h1>
                  <h3>User Not Found!</h3> 
                </div>
              : <>
                  <UserInfo/>
                  <User/>
                </>
            }</>
        }
      </Wrapper>
    </main>
  )
}

// CSS styling
const Wrapper = styled.section`
    min-height: 40vh;
    display: grid;
    // h1 {
    //   color: var(--clr-grey-8);
    //   font-size: 4rem;
    //   margin-bottom: 3rem;
    // }
    // h3 {
    //   margin-bottom: 1.5rem;
    // }
    .emogi {
      font-size: 4rem;
    }

    .dash {
      place-items: center;
      display: grid;
      color: var(--clr-grey-8);
      text-align: center;
    }
`;

export default Dashboard;