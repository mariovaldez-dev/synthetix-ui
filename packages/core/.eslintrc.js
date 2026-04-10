module.exports = {
  root: true,
  extends: ["@mylib/eslint-config/react"],
  parserOptions: {
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
  },
};