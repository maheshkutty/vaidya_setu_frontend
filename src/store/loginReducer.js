const loginReducer = (
    state = { uid: "", errMsg: null, accessToken: "", email: "", sid : "" },
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
  