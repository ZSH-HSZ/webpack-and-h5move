import { getData } from '../service/post_api';
export const loadPosts = async (dispatch) => {
  const res = await getData();
  dispatch({
    type: 'POST_ADD',
    payload: res,
  });
};
