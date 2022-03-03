export const getUsersListFromServer = ({ data }) => {
  return data.map(({ phone, username, website, ...rest }) => ({
    ...rest,
    companyName: rest.company,
  }));
};

export const getPostsListFromServer = (response) => {
  return response.data;
};

export const getReviewrsListFromServer = (response) => {
  return response.data;
};
