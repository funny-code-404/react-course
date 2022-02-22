import { initialState as initialPostsState } from '../ducks/posts/reducer';
import { initialState as initialAlbumsState } from '../ducks/albums/reducer';

export const initialState = {
  posts: initialPostsState,
  albums: initialAlbumsState,
};
