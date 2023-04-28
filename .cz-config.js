module.exports = {
  types: [
    { value: 'feat', name: 'feat: 增加新功能' },
    { value: 'fix', name: 'fix: 修复 bug' },
    {
      value: 'style',
      name: 'style: 不影响代码含义的改动，例如去掉空格、改变缩进、增删分号',
    },
    {
      value: 'refactor',
      name: 'refactor: 代码重构时使用，既不是新增功能也不是代码的bud修复',
    },
    { value: 'revert', name: 'revert: 撤销某次提交' },
    {
      value: 'chore',
      name: 'chore: 杂项，其他不需要修改源代码或不需要修改测试代码的修改',
    },
    { value: 'docs', name: 'docs: 只改动了文档相关的内容' },
    { value: 'perf', name: 'perf: 提高性能的修改' },
    { value: 'test', name: 'test: 添加或修改测试代码' },
    { value: 'ci', name: 'ci: 持续集成的配置文件或者脚本的修改' },
    {
      value: 'build',
      name: 'build: 构建工具或者外部依赖包的修改，比如更新依赖包的版本',
    },
  ],

  scopes: [
    { name: 'tabler-ui' },
    { name: 'tabler-react' },
    { name: 'tabler-vue' },
  ],

  messages: {
    type: "Select the type of change that you're committing:",
    scope: "\n Select the scope of change that you're committing:",
    // used if allowCustomScopes is true
    customScope: 'Denote the custom scope:',
    subject: 'Write a SHORT, IMPERATIVE tense description of the change:\n',
    body: 'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
    breaking: 'List any BREAKING CHANGES (optional):\n',
    footer:
      'List any ISSUES CLOSED by this change (optional). E.g.: #31, #34:\n',
    confirmCommit: 'Are you sure you want to proceed with the commit above?',
  },

  allowCustomScopes: true,
};
