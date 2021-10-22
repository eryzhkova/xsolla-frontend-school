import React from 'react';
import favoriteIcon from '../../assets/icons/favorite.svg';
import notFavoriteIcon from '../../assets/icons/notFavorite.svg';
import * as UI from './styles';

interface ICardProps {
  name: string;
  date: string;
  city: string;
  genre: string;
  image: string;
}

const Card: React.FC<ICardProps> = (props) => {
  const { name, date, image } = props;
  const isFavorite = false;

  return (
    <UI.Card image={image}>
      <UI.TopWrapper>
        <UI.Date>14</UI.Date>
        <UI.FavoriteIcon src={isFavorite ? favoriteIcon : notFavoriteIcon} alt="Избранное" />
      </UI.TopWrapper>
      <UI.Name>{name}</UI.Name>
    </UI.Card>
  )
}

export default Card;