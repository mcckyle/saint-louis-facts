//Filename: jest.setup.js

class IntersectionObserver
{
    constructor(callback, options) {}
    observe() { return null; }
    unobserve() { return null; }
    disconnect() { return null; }
}

Object.defineProperty(window, 'IntersectionObserver', {
    writable: true,
    configurable: true,
    value: IntersectionObserver,
});

Object.defineProperty(global, 'IntersectionObserver', {
    writable: true,
    configurable: true,
    value: IntersectionObserver,
});
