/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true, //单引号
        semi: false, //五分号
        printWidth: 80, // 每行宽度最多80个字符
        trailingComma: 'none', //不加对象|数组最后的逗号
        endOfLine: 'auto' //换行符号不限制（win mac不一致）
      }
    ],
    'vue/multi-word-component-names': [
      'warn',
      {
        ignores: ['index'] //vue组件名称多单词组成（忽略index.vue）
      }
    ],
    'vue/no-setup-props-destructure': ['off'], //关闭props解构的校验
    'vue/no-multiple-template-root': 'off',
    // 添加未定义变量错误提示，create-vue@3.6.3关闭
    'no-undef': 'error'
  }
}
