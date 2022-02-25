export const albumsSelector = (state) => state.albums.data;

export const isAlbumsError = (state) => state.albums.error;

export const isAlbumsFetching = (state) => state.albums.isFetching;
