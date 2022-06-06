import React from 'react';
import styled from 'styled-components';
import { ICard } from './../../interfaces';

const SCard = styled.div`
  width: 300px;
  height: 530px;
  margin: 15px 0;
  padding: 5px 15px;
  text-align: center;
  background: #161616;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  transition: 0.5s;
  :hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;

const SCardName = styled.div`
  margin-bottom: 10px;
  padding: 5px;
  font-size: 1.2rem;
  border-bottom: 2px #2a2a2a solid;
`;

const SCardImage = styled.div`
  margin-bottom: 10px;
  img {
    width: 270px;
    height: 270px;
  }
`;

const SCardDescription = styled.div`
  padding: 5px;
  font-size: 0.9rem;
  border-top: 2px #2a2a2a solid;
`;

const Card = (props: ICard) => {
  return (
    <SCard>
      <SCardName>
        <span>{props.mode}</span>
      </SCardName>
      <SCardImage>
        <img src={props.image} alt='' />
      </SCardImage>
      <SCardDescription>
        {props.ipPort}
        <br />
        {props.description}
      </SCardDescription>
    </SCard>
  );
};

export default Card;
