module.exports = {
  prompt: ({inquirer, prompter}) => {
    return inquirer
      .prompt([
        {
          name: 'type',
          choices: ['common', 'domain'],
          message: 'What type of component do you want to create?',
          type: 'select',
        },
        {
          name: 'name',
          message: "What's the name of component?",
          type: 'input',
        },
        {
          name: 'hasHook',
          initial: true,
          message: 'Do you want to use hooks?',
          type: 'confirm',
        },
        {
          name: 'hasContext',
          initial: true,
          message: 'Do you want to use context?',
          type: 'confirm',
        },
        {
          name: 'hasQuery',
          initial: true,
          message: 'Do you want to use query',
          type: 'confirm',
        },
        {
          name: 'hasParent',
          message: 'Does this component have a parent component?',
          type: 'confirm',
        },
      ])
      .then(({hasContext, hasHook, hasParent, hasQuery, name, type}) => {
        if (hasParent) {
          return prompter
            .prompt({
              name: 'parentName',
              message: 'Please enter the name of the parent component.',
              type: 'input',
            })
            .then(({parentName}) => {
              return prompter
                .prompt({
                  name: 'path',
                  editable: true,
                  initial: `src/component/${
                    type === 'common'
                      ? `Common/${parentName}/element/${name}`
                      : `${parentName}/element/${name}`
                  }`,
                  message: 'Do you want to create a component on this path?',
                  type: 'input',
                })
                .then(({path}) => {
                  return {name, hasContext, hasHook, hasQuery, path}
                })
            })
        } else {
          return prompter
            .prompt({
              name: 'path',
              editable: true,
              initial: `src/component/${type === 'common' ? `Common/${name}` : name}`,
              message: 'Do you want to create a component on this path?',
              type: 'input',
            })
            .then(({path}) => {
              if (path) {
                return {name, hasContext, hasHook, hasQuery, path}
              }
            })
        }
      })
  },
}
