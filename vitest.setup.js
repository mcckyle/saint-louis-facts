//Filename: vitest.setup.js
//Date: 4 August 2026
//Author: Kyle McColgan
//Description: This file contains the Vitest setup config for unit testing purposes.

import * as matchers from '@testing-library/jest-dom/matchers';
import { expect, beforeEach, vi } from 'vitest';

expect.extend(matchers);

//Fix matchMedia errors globally for all tests...
beforeEach(() => {
    Object.defineProperty(window, 'matchMedia', {
        writable: true,
        value: vi.fn().mockImplementation((query) => ({
            matches: false, //Fallback default (Standard animations enabled).
            media: query,
            onchange: null,
            addListener: vi.fn(), //Backward compatibility.
            removeListener: vi.fn(),
            addEventListener: vi.fn(),
            removeEventListener: vi.fn(),
            dispatchEvent: vi.fn(),
        })),
    });
});
