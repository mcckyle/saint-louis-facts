//File name: vitest.setup.js
//Date: 17 June 2026
//Author: Kyle McColgan
//Description: This file contains the Vitest setup config for unit testing purposes.

import * as matchers from '@testing-library/jest-dom/matchers';
import { expect } from 'vitest';
expect.extend(matchers);
