const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS ='SET_USERS';

let initialState = {
    users: [
        // { id: 1, followed: false, fullname: 'Dmitry', status: 'Iam a boss', location: {city:'Minsk', country: 'Belarus'} },
        // { id: 2, followed: true, fullname: 'Alexander', status: 'Iam a boss too', location: {city:'Moscow', country: 'Russia'} },
        // { id: 3, followed: false, fullname: 'Andrew', status: 'Iam a engineer', location: {city:'Kovrov', country: 'Russia'} },

    ]
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
     case FOLLOW:  
      return {
          ...state, 
          users: state.users.map(  u => {
              if (u.id ===action.userId) {
                  return {...u, followed: true}
              }
              return u;
              })
            }
     
          case UNFOLLOW:
            return {...state, 
            users: state.users.map( u => {
                if (u.id ===action.userId) {
                    return {...u, followed: false}
                }
                return u;
                })
              }

              case SET_USERS: {
                  return {...state, users:[...state.users, ...action.users]}
              }

              default:
                  return state;
    }

}

export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unfollowAC = (userId) =>({ type: UNFOLLOW, userId})
export const setUsersAC = (users) =>({ type: SET_USERS, users})


export default usersReducer;