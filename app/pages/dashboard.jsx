import Header from "@/components/header";
import Main from "@/components/main";
import Sidebar from "@/components/sidebar";
import React from "react";
import styled from "styled-components";

const Dashboard = ({ address }) => {
    return (
        <Wrapper>
            <Sidebar />
            <MainContainer>
                <Header walletAddress={address}/>
                <Main />
            </MainContainer>
        </Wrapper>
    )
};

const Wrapper = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
    background-color: #00111c;
    color: white;
    overflow: hidden;
`;

const MainContainer = styled.div`
    flex: 1;
`


export default Dashboard;