import React from 'react';
import styled from 'styled-components';
import Card from '../UI/Card';
import { cards } from '../UI/assets/modesAssets';
import Helmet from 'react-helmet';

const SMainPage = styled.div`
  width: calc(100% - 200px);
  margin-left: 200px;
  padding: 10px;
  text-align: center;
`;

const SCardsWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`;

const SMainLogo = styled.div`
  margin: 0 0 20px 0;
  padding: 10px;
  font-size: 1.5rem;
  border-bottom: 2px #ffffffd8 solid;
`;

const Main = () => {
  return (
    <>
      <Helmet>
        <title>Darkdustry | Main</title>
        <meta name='description' content='Mindustry v7 Server' />
        <meta
          name='keywords'
          content='Mindustry, mindustrygame, tower-defense, game'
        />
      </Helmet>
      <SMainPage>
        <SMainLogo>
          <h1>Darkdustry</h1>
          <span>Mindustry v7 Server</span>
        </SMainLogo>
        <h2>Множество игровых режимов</h2>
        <SCardsWrapper>
          {cards.map(card => (
            <Card
              key={card.mode}
              mode={card.mode}
              ipPort={card.ipPort}
              description={card.description}
              image={card.image}
            />
          ))}
        </SCardsWrapper>
      </SMainPage>
    </>
  );
};

export default Main;
