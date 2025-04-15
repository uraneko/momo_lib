/// <reference types="vitest" />
import { defineConfig } from 'vitest/config'

export default defineConfig({
	test: {
		include: ["src/**/*.ts", "tests/*.test.ts", "tests/*.spec.ts"]
	},
})
