const loginReducer = (
    state = { errMsg: null, accessToken: "", email: "", id : "", refreshToken:"", role:"" },
    action
  ) => {
    switch (action.type) {
      case "LOGIN_USER":
        return action.payload;
      default:
        return state;
    }
  };
  
  export default loginReducer;
  