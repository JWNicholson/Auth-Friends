import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Friend from './Friend';
import { getFriends } from '../actions/actions';
import styled from "styled-components";

const FriendsButton = styled.button`
    background-color:cyan;
    border:4px solid darkcyan;
    font-size: 16px;
    height:38px;
    font-weight:bold;
`;

const FriendsList = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    width:90%;
`;

class FriendList extends React.Component {

    constructor(props){
        super(props);
    }

    componentDidMount() {
        this.props.getFriends();
    }

    render(){
        return(
            <div>

                {this.props.isFetching && <p className="props-fetching">Fetching friends</p>}
                {this.props.friends &&
                    <FriendsList>
                        <div className="header">
                            <h2>Friend List</h2>
                            <Link to='/add'><FriendsButton>Add a friend</FriendsButton></Link>
                        </div>
                        {this.props.friends.map(friend => (
                            <Friend key={friend.id} name={friend.name} age={friend.age} email={friend.email} />
                        ))}
                    </FriendsList>
                }

            </div>
        )
    }

}

const mapStateToProps = state => ({
    friends: state.friends,
    isFetching: state.isFetching,
    isPosting: state.isPosting,
    error: state.error
});

export default connect(mapStateToProps, {getFriends})(FriendList);