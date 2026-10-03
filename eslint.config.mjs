import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    // Three.js/R3F scene graphs are imperative by design: useFrame mutates
    // refs and Object3D transforms every tick, and procedural geometry
    // seeds randomness once in useMemo. Both are standard R3F patterns that
    // the React Compiler-oriented hooks rules (written for plain React
    // state) misidentify as bugs.
    files: ["components/three/**/*.tsx", "lib/network-generator.ts"],
    rules: {
      "react-hooks/immutability": "off",
      "react-hooks/purity": "off",
      "react-hooks/set-state-in-effect": "off",
    },
  },
]);

export default eslintConfig;
