import React from 'react';
import * as UI from './styles';
import Card from '../Card';

const Wrapper: React.FC = () => {

  const cardInfo = {
      id: "01",
      name: "Rave Autumn",
      date: "14.09.2019",
      city: "Amsterdam",
      genre: "Electronic",
      image: "https://cdn3.xsolla.com/files/uploaded/113250/826adbf1a19ba19e6ba9af9308d2b309.png"
  };

  return (
    <UI.Wrapper>
      <UI.Title>Event Listing</UI.Title>
      <div>
        <label>City: </label>
        <label>Month: </label>
      </div>
      <UI.CardsWrapper>
        <Card {...cardInfo} />
        <Card {...cardInfo} />
        <Card {...cardInfo} />
        <Card {...cardInfo} />
      </UI.CardsWrapper>
    </UI.Wrapper>
  )
}

export default Wrapper;