module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      ['test', 'add', 'fix', 'remove', 'docs', 'clean', 'style', 'ci', 'update'],
    ],
  },
  prompt: {
    questions: {
      type: {
        description: "Select the type of change that you're committing",
        enum: {
          remove: {
            description: '削除（ファイル、コードの一部）',
            emoji: '🔥',
            value: 'remove',
          },
          ci: {
            description: 'CI関連の追加、変更',
            emoji: '🤖',
            value: 'ci',
          },
          docs: {
            description: 'ドキュメントの更新',
            emoji: '✏️',
            value: 'docs',
          },
          add: {
            description: '新規（ファイル）機能追加',
            emoji: '✨',
            value: 'add',
          },
          fix: {
            description: 'バグ修正',
            emoji: '🐛',
            value: 'fix',
          },
          update: {
            description: '機能修正（バグではない）',
            emoji: '⚡️',
            value: 'update',
          },
          clean: {
            description: '整理（リファクタリング等）',
            emoji: '♻',
            value: 'clean',
          },
          style: {
            description: 'UIなどのstyle追加、変更',
            emoji: '💄',
            value: 'style',
          },
          test: {
            description: 'テストコードの追加、変更',
            emoji: '🧪',
            value: 'test',
          },
        },
      },
      subject: {
        description: 'Write a short, imperative tense description of the change',
      },
    },
  },
}
