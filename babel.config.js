module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '^@pages(.+)': './pages/\\1',
          '^@components(.+)': './components/\\1',
          '^@images(.+)': './images/\\1',
          '^@CTypes(.+)': './types/\\1',
          '^@lib(.+)': './lib/\\1',
        },
        extensions: [
          '.ios.js',
          '.android.js',
          '.js',
          '.jsx',
          '.json',
          '.tsx',
          '.ts',
          '.native.js',
        ],
      },
    ],
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    'jest-hoist',
  ],
}
