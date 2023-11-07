module.exports = {
  plugins: {
    "postcss-preset-env": {
      stage: 0,
      autoprefixer: {
        flexbox: "no-2009",
      },
      features: {
        "nesting-rules": true,
      },
    },
    // Other PostCSS plugins if needed...
  },
};
