export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const initialState = {
  userNameOrEmail: "",
  isAuthenticated: false,
};
export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        userNameOrEmail: action.payload.userNameOrEmail,
        isAuthenticated: true,
      };
    default:
      return state;
  }
}
