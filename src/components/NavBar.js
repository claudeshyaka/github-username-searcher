// Imports
import React, { useContext, useEffect } from "react";
import styled from "styled-components";

import { Context as GitHubContext } from "../context/GithubContext";

// Function component
const NavBar = () => {
  // business logic
  const {
    fetchRateLimit,
  } = useContext(GitHubContext);

  // eslint-disable-next-line
  useEffect(() => {
    fetchRateLimit();
  }, []);

  // JSX
  return (
      <Wrapper>
          <h4>Github User Search</h4>
      </Wrapper>
  );
};

// CSS styling
const Wrapper = styled.nav`
    padding: 1.5rem;
    margin-bottom: 4rem;
    background: var(--clr-grey-10);
    text-align: center;
    display: grid;
    grid-template-columns: auto auto 100px;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    h4 {
      margin-bottom: 0;
      font-weight: 600;
    }
    img {
      width: 35px !important;
      height: 35px;
      border-radius: 50%;
      object-fit: cover;
    }
    button {
      background: transparent;
      border: transparent;
      font-size: 1.2rem;
      text-transform: capitalize;
      letter-spacing: var(--spacing);
      color: var(--clr-grey-5);
      cursor: pointer;
    }
`;
export default NavBar;