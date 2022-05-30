// body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
// email: "Eliseo@gardner.biz"
// id: 1
// name: "id labore ex et quam laborum"

// postId: 1

export const getSomeCommentsListFromServer = ({ data }) =>
  data.slice(0, 5).map(({ postId, ...rest }) => ({
    ...rest,
    commentBody: rest.body,
  }));

export const getSomeCommentsThunkListFromServer = ({ data }) =>
  data.slice(50, 60).map(getCommentDetailsThunkFromServer);

export const getCommentDetailsThunkFromServer = ({ postId, ...rest }) => ({
  ...rest,
  commentUserEmail: rest.email,
});
