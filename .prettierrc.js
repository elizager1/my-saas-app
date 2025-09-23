/** @type {import('prettier').Config} */
module.exports = {
  semi: true,
  trailingComma: 'es5',
  singleQuote: true,
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  endOfLine: 'lf',
  arrowParens: 'avoid',
  bracketSpacing: true,
  bracketSameLine: false,
  quoteProps: 'as-needed',
  plugins: ['prettier-plugin-tailwindcss'],
  // tailwindConfig: './tailwind.config.ts', // Will auto-detect
  tailwindFunctions: ['clsx', 'cn'],
};
