module.exports = {
  retainLines: true,
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
        useBuiltIns: 'usage',
        shippedProposals: true,
        loose: false,
      },
    ],
  ],
  plugins: [],
};
