import React from 'react';
import styled from 'styled-components';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const HeaderStyled = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: #fff;
  border-bottom: 1px solid lightgrey;
  width: 100%;
  height: 120px;
  margin-top: 44px;
  padding-bottom: 15px;
  @media (min-width: 1280px) {
    width: 1280px;
   }
    span {
    align-self: flex-end;
    font-size: 11px;
    font-weight: bold;
    letter-spacing: 1px;
    }

`;

const HeaderDate = styled.div `
   margin-left: 25px;
   flex: 1;
`;

const HeaderTitle = styled.div `
   font-size: 60px;
   font-family: Didot, serif;
   font-weight: bold;
   flex: 8;
   text-align: center;
   color: #000;

`;

const HeaderTemp = styled.div `
  text-align: right;
  margin-right: 25px;
  flex: 1;
`;






















const Header = () => {
  return (
    <HeaderStyled>
      <HeaderDate>August 10, 2018</HeaderDate>
      <HeaderTitle>Lambda Times</HeaderTitle>
      <HeaderTemp>98°</HeaderTemp>
    </HeaderStyled>
  )
}

export default Header