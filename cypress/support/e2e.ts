// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

import './commands.ts';
import '../e2e/hooks/common.ts';
import { slowCypressDown } from 'cypress-slow-down';
import support from 'cypress-timestamps/support.js';

if (Cypress.config('isInteractive')) slowCypressDown(25);
support({
  terminal: true,
  error: true,
  commandLog: true,
  elapsed: false,
});
