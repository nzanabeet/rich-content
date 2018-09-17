const presetEnvESM = [
  '@babel/preset-env',
  {
    modules: false,
    loose: true
  }
];

const presetEnvCommonJS = [
  '@babel/preset-env',
  {
    loose: true
  }
];

const commonPresets = [
  '@babel/preset-react'
];

const commonPlugins = [
  '@babel/transform-runtime',
  ['@babel/plugin-proposal-decorators', {legacy: true}],
  ['@babel/plugin-proposal-class-properties', { loose: true }],
];

const testPlugins = [
  '@babel/plugin-transform-modules-commonjs'
];

module.exports = {
  presets: [presetEnvESM, ...commonPresets],
  plugins: [...commonPlugins],
  env: {
    commonjs: {
      presets: [presetEnvCommonJS, ...commonPresets],
      plugins: [...commonPlugins]
    },
    test: {
      presets: [presetEnvCommonJS, ...commonPresets],
      plugins: [...testPlugins]
    }
  }
};
