/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react';
import styled from 'styled-components';

import { Context as GithubContext } from '../context/GithubContext';
import useGithubApi from '../hooks/useGithubApi';

const HistoryItemsCard = () => {

  const { state: { searchedUsers }} = useContext(GithubContext);
  const [githubRequests] = useGithubApi();

  return (
    <Wrapper>
      <div className="terms">
        {searchedUsers.map((user, index) => {
          const {
            name,
            avatar_url,
            login,
          } = user

          return (
            <article key={index}>
              <img src={avatar_url} alt={login}/>
              <a href="#" onClick={(event)=>{
                event.preventDefault();
                githubRequests(login);
              }}>
                <h4>{name}</h4>
                <p>{login}</p>
              </a>
            </article>
          );
        })}
      </div>
    </Wrapper>
  );
};
  
const Wrapper = styled.article`
  background: var(--clr-grey-10);
  border-top-right-radius: var(--radius);
  border-bottom-left-radius: var(--radius);
  border-bottom-right-radius: var(--radius);
  position: relative;
  &::before {
    content: 'searched users';
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(-100%);
    background: var(--clr-grey-10);
    color: var(--clr-grey-5);
    border-top-right-radius: var(--radius);
    border-top-left-radius: var(--radius);
    text-transform: capitalize;
    padding: 0.5rem 1rem 0 1rem;
    letter-spacing: var(--spacing);
    font-size: 1rem;
  }
  .terms {
    overflow: scroll;
    height: 260px;
    display: grid;
    grid-template-rows: repeat(auto-fill, minmax(45px, 1fr));
    gap: 1.25rem 1rem;
    padding: 1rem 2rem;
  }
  article {
    transition: var(--transition);
    padding: 0.15rem 0.5rem;
    border-radius: var(--radius);
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    column-gap: 1rem;
    img {
      height: 100%;
      width: 45px;
      border-radius: 50%;
      object-fit: cover;
    }
    h4 {
      margin-bottom: 0;
    }
    a {
      color: var(--clr-grey-5);
    }
    p {
      margin-bottom: 0;
    }
  }
`;
export default HistoryItemsCard;