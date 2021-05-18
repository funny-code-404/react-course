const { alias } = require("react-app-rewire-alias");

module.exports = function override(config) {
  alias({
    "@components": "src/components",
    "@constants": "src/constants",
    "@ducks": "src/ducks",
    "@routes": "src/routes",
    "@store": "src/store",
    "@utils": "src/utils",
  })(config);

  return config;
};
