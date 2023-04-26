module.exports = function (api) {
  api.cache(true);

  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: [".src"],
          alias: {
            src: "./src",
            server: "./src/server",
            components: "./src/components",
            constants: "./src/constants",
            // redux: "./src/redux",
            screens: "./src/screens",
            tabs: "./src/tabs",
          },
        },
      ],
    ],
  };
};
