module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: ['./src/'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@components': './src/components',
          '@store': './src/store',
          '@app-types': './src/types',
          '@routes': './src/routes',
          '@pages': './src/pages',
          '@hooks': './src/hooks',
          '@services': './src/services',
          '@utils': './src/utils',
          '@assets': './src/assets',
        },
      },
    ],
  ],
};
