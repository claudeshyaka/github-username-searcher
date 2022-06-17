// Imports
import React from "react";
import styled from 'styled-components';

import UserProfileCard from "./UserProfileCard";
import UserFollowersCard from "./UserFollowersCard";
import HistoryItemsCard from "./HistoryItemsCard";
import UserReposCard from "./UserReposCard";

// Function component
const User = () => {
  // business logic

  // JSX
  return (
    <section className="section">
      <Wrapper className="section-center">
          <UserProfileCard/>
          <UserReposCard/>
          <UserFollowersCard/>
          <HistoryItemsCard/>
      </Wrapper>
    </section>
  );
};

// CSS styling
const Wrapper = styled.div`
  padding-top: 2rem;
  display: grid;
  gap: 3rem 2rem;
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export default User;