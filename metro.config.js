const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const { withNativeWind } = require('nativewind/metro');

const baseConfig = getDefaultConfig(__dirname);

const svgConfig = {
  transformer: {
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  },
  resolver: {
    assetExts: baseConfig.resolver.assetExts.filter(ext => ext !== 'svg'),
    sourceExts: [...baseConfig.resolver.sourceExts, 'svg'],
  },
};

const mergedConfig = mergeConfig(baseConfig, svgConfig);

module.exports = withNativeWind(mergedConfig, { input: './src/global.css' });
