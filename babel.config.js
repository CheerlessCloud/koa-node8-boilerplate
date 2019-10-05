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
        corejs: '3',
        shippedProposals: true,
        loose: false,
      },
    ],
  ],
  plugins: [],
};
