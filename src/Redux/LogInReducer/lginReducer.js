export let lginReducer = (state = { stt: 1 }, action) => {
  switch (action.type) {
    case "setState": 
    {
      state.stt = action.payload;
      return { ...state };
    }
    
    default:
      return { ...state };
  }
};
