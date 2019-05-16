module.exports = function(api) {
  const babelEnv = api.env();
  const presets = ["module:metro-react-native-babel-preset"];

  const plugins = babelEnv == "production" ? ["ignite-ignore-reactotron"] : [];

  return {
    presets,
    plugins
  };
};
