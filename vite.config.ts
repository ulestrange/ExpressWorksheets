import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true, // Enables global test functions like describe, it, expect without importing them
    environment: 'node',
    clearMocks: true,
    restoreMocks: true,
  },
});