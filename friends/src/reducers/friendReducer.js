import * as actions from '../actions/actions';

const initialState = {
    friends: [],
    isFetching: false,
    isPosting: false,
    error: ''
}

export default function friendReducer(state = initialState, action) {
    switch (action.type){

        // get friends
        case actions.FETCH_FRIENDS_START:
            return { ...state, friends: [], isFetching: true, isPosting: false, error: ''};

        case actions.FETCH_FRIENDS_SUCCESS:
             return { ...state, friends: action.payload, isFetching: false, isPosting: false, error: '' };

        case actions.FETCH_FRIENDS_FAIL:
            return {...state, friends: [], isFetching: false, isPosting: false, error: action.payload};
   

    //addFriend
    case actions.ADD_FRIENDS_START:
        return { ...state, friends:[], isFetching: false, isPosting: true, error:''};
    
    case action.ADD_FRIENDS_SUCCESS:
        return { ...state, friends: action.payload, isPosting: false, isPosting: false, error:''};

    case actions.ADD_FRIENDS_FAIL:
        return { ...state, friends:[], isFetching: false, isPosting: false, error: action.payload};

    default: return state;
  }
}