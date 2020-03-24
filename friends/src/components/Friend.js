import React from 'react';
import styled from 'styled-components';

const FriendCard = styled.div`
    border:1px solid gray;
    margin:36px;
    background-color:aliceblue;
    padding:14px;
    border-radius:8px;
`;

export default function Friend(props) {
    return (
    <FriendCard>
        <h3>{props.name}</h3>
        <p>{props.age}</p>
        <p>{props.email}</p>
    </FriendCard>
    )
}