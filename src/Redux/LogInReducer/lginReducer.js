export let lginReducer = (state = { LOGINstatus: 1  , WaitingPageStatus : 0}, action) => {
  switch (action.type) {
    case "setState": {
      state.LOGINstatus = action.payload;
      return { ...state };
    }

    default:
      return { ...state };
  }
};
