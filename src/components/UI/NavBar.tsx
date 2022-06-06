import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaDiscord, FaHome, FaTrophy, FaCoins } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SNavBar = styled.nav`
  position: fixed;
  height: 100%;
  width: 200px;
  padding: 10px;
  text-align: center;
  background: #161616;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  transition: 0.5s;
  :hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;

const SServerContent = styled.div`
  min-height: calc(100% - 60px);
`;

const SShortInfo = styled.div`
  border-bottom: 2px #2a2a2a solid;
`;

const SOuterLinks = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 10px;
  font-size: 1.5rem;
`;

const SInnerLinks = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const SLink = styled.div`
  height: 60px;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 15px 0;
  background: #2a2a2a;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  transition: 0.5s;
  :hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;

const SUserShortInfo = styled.div`
  height: 60px;
`;

const NavBar = () => {
  return (
    <SNavBar>
      <SServerContent>
        <SShortInfo>
          <h1>Darkdustry</h1>
          <span>Mindustry v7 server</span>
          <SOuterLinks>
            <a
              href='https://discord.gg/W8FjQXSDXR'
              target='_blank'
              rel='noreferrer'>
              <FaDiscord />
            </a>
            <a
              href='https://github.com/Darkdustry-Coders'
              target='_blank'
              rel='noreferrer'>
              <FaGithub />
            </a>
          </SOuterLinks>
        </SShortInfo>
        <SInnerLinks>
          <SLink>
            <Link to='main'>
              <FaHome /> | Home
            </Link>
          </SLink>
          <SLink>
            <Link to='second'>
              <FaTrophy /> | Second
            </Link>
          </SLink>
          <SLink>
            <Link to='third'>
              <FaCoins /> | Third
            </Link>
          </SLink>
        </SInnerLinks>
      </SServerContent>
      <SUserShortInfo>UserProfile</SUserShortInfo>
    </SNavBar>
  );
};

export default NavBar;
