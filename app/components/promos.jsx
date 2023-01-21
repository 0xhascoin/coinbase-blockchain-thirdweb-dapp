import React from 'react'
import styled from 'styled-components';

const Promos = () => {
    return (
        <Wrapper>
            <OfferCard>
                <Title>Yield earned</Title>
                <Description>
                    Earn up to 2.8% APY on your crypto.
                </Description>
                <Placeholder />
                <Additional style={{ fontSize: '1.3rem' }}>
                    $0.000066 <span>2.84% APY</span>
                </Additional>
            </OfferCard>
            <OfferCard>
                <Title>Learn and Earn</Title>
                <Description>
                    Earn up to 2.8% APY on your crypto.
                </Description>
                <Placeholder />
                <Additional style={{ fontSize: '1rem', color: '#3773f5' }}>
                    Verify Identity
                </Additional>
            </OfferCard>
        </Wrapper>
    )
};

const Wrapper = styled.div`
    margin-top: 2rem;
    padding-right: 1rem;
`;

const OfferCard = styled.div`
    width: 21rem;
    height: 9rem;
    border: 1px solid #282b2f;
    margin-bottom: 1rem;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
`;

const Title = styled.div`
    font-weight: 400;
    font-size: 1.1rem;
    margin-bottom: .1rem;
`;

const Description = styled.div`
    font-size: .9rem;
    margin-top: 1rem;
`;

const Placeholder = styled.div`
    flex: 1;
`;

const Additional = styled.div`
    font-size: .9rem;
    font-weight: 400;
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > span {
        color: #8a919e !important;
        font-size: .9rem;
    }
`;

export default Promos