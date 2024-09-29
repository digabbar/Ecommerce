module.exports = {
  plugins: [
    [
      'babel-plugin-inline-import',
      {
        extensions: ['.svg'],
      },
    ],
  ],
  presets: ['module:@react-native/babel-preset'],
};
