export const postReducer = (state = { list: [{ title: 'test' }] }, action) => {
  console.log(action);
  switch (action.type) {
    case 'POST_ADD':
      return {
        ...state,
        list: action.payload,
      };
    default:
      return state;
  }
};
