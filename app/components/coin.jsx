import React from 'react'
import styled from 'styled-components'
import { BsThreeDotsVertical } from 'react-icons/bs';
import Image from 'next/image';

const Coin = ({ coin }) => {
  return (
    <Wrapper>
        <div>
            <div style={{ flex: 3 }}>
                <NameCol>
                    <CoinIcon>
                        <Image src={coin.logo} alt={coin.name} style={{ maxWidth: '50px', height: 'auto', borderRadius: '5px' }} />
                    </CoinIcon>
                    <div style={{ marginLeft: '20px'}}>
                        <Primary>{coin.name}</Primary>
                        <Secondary>{coin.sign}</Secondary>
                    </div>
                </NameCol>
            </div>
            <div style={{ flex: 2 }}>
                <Primary>
                    {"$"}
                    {coin.balanceUsd}
                </Primary>
                <Secondary>
                    {coin.balanceCoin} {coin.sign}
                </Secondary>
            </div>
            <div style={{ flex: 1 }}>
                <Primary>
                    {"$"}
                    {coin.priceUsd}
                </Primary>
                <div style={{ color: coin.change < 0 ? '#f0616d' : '#26ad75'}}>
                    {coin.change > 0 ? '+' : '-'}
                    {coin.change}%
                </div>
            </div>
            <div style={{ flex: 1 }}>
                {coin.allocation}%
            </div>
            <div style={{ flex: 0 }}>
                <BsThreeDotsVertical />
            </div>
        </div>
    </Wrapper>
  )
};

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;

    & > div {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 2rem;
        /* border: 1px solid orange; */
    }
`;

const NameCol = styled.div`
    display: flex;
    align-items: center;  
    /* border: 1px solid red; */
`;

const CoinIcon = styled.div`
    width: 1.8rem;
    margin-right: 1rem;
`;

const Primary = styled.div`
    margin-bottom: 0.1rem;
`;

const Secondary = styled.div`
    color: #8a919e;
    font-size: 0.8rem;
`;


export default Coin;