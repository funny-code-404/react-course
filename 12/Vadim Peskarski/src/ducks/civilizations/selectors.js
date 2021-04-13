export const civilizations = ({ civilizations }) => (
  civilizations.civilizations
);

export const civilization = (state) => (id) => (
  state.civilizations.civilizations.filter(element => element.id === id)
);
