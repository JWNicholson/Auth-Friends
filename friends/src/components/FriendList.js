import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Friend from './Friend';
import { getFriends } from '../actions/actions';

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
                    <div className="friend-list">
                        <div className="header">
                            <h2>Friend List</h2>
                            <Link to='/add'><button>Add a friend</button></Link>
                        </div>
                        {this.props.friends.map(friend => (
                            <Friend key={friend.id} name={friend.name} age={friend.age} email={friend.email} />
                        ))}
                    </div>
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