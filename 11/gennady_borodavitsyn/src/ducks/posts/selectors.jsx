export const postsSelector = (state) => state.posts.data;

export const isPostsError = (state) => state.posts.error;

export const isPostsFetching = (state) => state.posts.isFetching;
