const presets = [
    [
      "@babel/preset-env",
      {
        modules: false,
        targets: "> 0.25%, not dead",
        corejs: "3", // 声明corejs版本
        useBuiltIns: "usage"
      }
    ],
  ];
  
  module.exports = { presets };