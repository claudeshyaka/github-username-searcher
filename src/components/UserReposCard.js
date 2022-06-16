import React, { useContext } from 'react';
import styled from 'styled-components';
import { GoRepo } from "react-icons/go";


import { Context as GithubContext } from '../context/GithubContext';

const UserReposCard = () => {

  const { 
    state: { reposData }
  } = useContext(GithubContext);  

  return (
    <Wrapper>
      <div className="repos">
        {/* <h3>Repos items</h3> */}
        {reposData.map((repo, index) => {
          const {
            name, 
            html_url, 
            language,
          } = repo

          return (
            <article key={index}>
              <GoRepo className="icon"/>
              <div>
                <a href={html_url}>
                    <h4>{name}</h4>
                </a>
                <span>{language}</span>
              </div>
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
    content: 'Repos';
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
  .repos {
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
    .icon {
        font-size: 1.5rem;
      }
    h4 {
      margin-bottom: 0;
    }
    a {
      color: var(--clr-primary-5);
      cursor: pointer;
      &:hover {
        background: var(--clr-primary-5);
        color: var(--clr-primary-7);
      }
    }
  }
`;
export default UserReposCard;