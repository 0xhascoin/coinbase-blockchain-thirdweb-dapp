import React from 'react'
import styled from 'styled-components';
import Portfolio from './portfolio';
import Promos from './promos';

const Main = () => {
  return (
    <Wrapper>
        <Portfolio />
        <Promos />
    </Wrapper>
  )
};

const Wrapper = styled.div`
    display: flex;
    max-height: calc(100vh - 94px);
    overflow: hidden;
    overflow-y: scroll;
    
    ::-webkit-scrollbar {
      display: none;
    }

    & div {
        border-radius: 0.4rem;
    }
`;

export default Main;