import React, { useContext } from "react";
import styled from 'styled-components';
import { GoRepo, GoGist } from "react-icons/go";
import { FiUsers, FiUserPlus} from "react-icons/fi";

import {Context as GitHubContext} from '../context/GithubContext';
import ItemCard from "./ItemCard";
import mockProfileData from '../context/mockUserProfile';


const UserInfo = () => {
  const { state: { profileData } } = useContext(GitHubContext);
  const { 
    public_repos, 
    followers, 
    following, 
    public_gists 
  } = (profileData!= null ? profileData : mockProfileData);

  const items = [
    {
      id: 1,
      icon: <GoRepo className="icon"></GoRepo>,
      label: "repos",
      value: public_repos,
      color: 'pink',
    },
    {
      id: 2,
      icon: <FiUsers className="icon"></FiUsers>,
      label: "followers",
      value: followers,
      color: 'green',
    },
    {
      id: 3,
      icon: <FiUserPlus className="icon"></FiUserPlus>,
      label: "following",
      value: following,
      color: 'purple',
    },
    {
      id: 4,
      icon: <GoGist className="icon"></GoGist>,
      label: "gists",
      value: public_gists,
      color: 'yellow',
    },
  ]

  // console.log("User Data is Here", userProfile);
    return (
      <Wrapper className="section-center">
        {items.map((item)=> {
          return <ItemCard key={item.id} {...item}/>
        })}
      </Wrapper>
    );
};




const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem 2rem;
  @media (min-width: 640px) {
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  }
  .item {
    border-radius: var(--radius);
    padding: 1rem 2rem;
    background: var(--clr-grey-10);
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 1rem;
    align-items: center;
    span {
      width: 3rem;
      height: 3rem;
      display: grid;
      place-items: center;
      border-radius: 50%;
    }
    .icon {
      font-size: 1.5rem;
    }
    h3 {
      margin-bottom: 0;
      letter-spacing: 0;
    }
    p {
      margin-bottom: 0;
      text-transform: capitalize;
    }
  }
`;

export default UserInfo;