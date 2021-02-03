export const dogsSelector = (state) => ({
    data: state.dogs.data
});

export const dogPhotoSelector = (state) => ({
    data: state.dogs.dogRandomPhoto
});