import { postsReducer } from '../ducks/posts/reducer';
import { albumsReducer } from '../ducks/albums/reducer';

export const rootReducer = {
  posts: postsReducer,
  albums: albumsReducer,
};
