module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugin: ['react-native-reanimated/plugin'],
  };
};
