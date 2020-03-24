import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const HeaderWrapper = styled.div`
   display:flex;
   justify-content:center;
   background-color:black;
`;

const HeaderWrapperH1 = styled.h1`
    color:aliceblue;
   margin-left: 100px;
`;

const TopNav = styled.div`
    display:flex;
   width:40%;
    justify-content:space-evenly;
    margin:auto;
`;

const FriendsButton = styled.button`
    background-color:cyan;
    border:4px solid darkcyan;
    font-size: 16px;
    height:38px;
    font-weight:bold;
`;

export default function Header() {
    return (
    <HeaderWrapper>
        <Link to='/friends' className="logo"><HeaderWrapperH1>My friends list</HeaderWrapperH1></Link>
        <TopNav>
            <Link to='/friends'><FriendsButton>Friends</FriendsButton></Link>
            <Link to='/add'><FriendsButton>Add a friend</FriendsButton></Link>
            <Link to='/login'><FriendsButton className="login-button">Log In</FriendsButton></Link>
        </TopNav>
    </HeaderWrapper>
    )
}