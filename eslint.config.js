import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import globals from 'globals';
import cypressPlugin from 'eslint-plugin-cypress';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.ts'],
    plugins: {
      cypress: cypressPlugin,
    },
    languageOptions: {
      parser: tseslint.parser,
      globals: {
        ...globals.node,
        ...globals.browser,
        ...cypressPlugin.configs.globals.languageOptions.globals,
      },
    },
    rules: {
      'cypress/no-unnecessary-waiting': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
      'cypress/no-assigning-return-values': 'error',
      'cypress/no-async-tests': 'error',
      'cypress/unsafe-to-chain-command': 'error',
    },
  }
);
