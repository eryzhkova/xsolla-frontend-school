import styled, { css } from 'styled-components';

export interface ICardStyles {
  image: string;
}

export const Card = styled.div<ICardStyles>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 320px;
  border-radius: 6px;
  padding: 40px;
  margin: 20px;
  width: 520px;
  ${(props) => 
    props.image && css`
      background: url(${props.image});
  `}
  
`;

export const TopWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Name = styled.p`
  color: #FFFFFF;
  font-size: 48px;
  font-weight: 900;
  line-height: 66px;
  margin: 0;
`;

export const Date = styled.div`
  width: 80px;
  height: 80px;
  border: 2px solid #FFFFFF;
  box-sizing: border-box;
  border-radius: 6px;
  
  color: #FFFFFF;
  font-size: 48px;
  padding: 13px 9px;
`;

export const FavoriteIcon = styled.img`
  width: 14px;
  height: 18px;
`;