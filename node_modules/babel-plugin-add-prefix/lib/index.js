let addPrefix = path => (prefix = "_") => {
  let name = path.node.name;
  path.scope.rename(name);
}

module.exports = function ({ types: t }) {
  return {
    visitor: {
      Identifier(path, { opts }) {
        const options = Object.assign({
          func: true,
          var: true,
          spec: "_"
        }, opts)

        const type = path.getStatementParent().type;
        if (type == 'FunctionDeclaration') {
          if (options.func) {
            addPrefix(path)(options.spec)
          }
        }
        if (type == 'ExpressionStatement') {
          if (options.var) {
            addPrefix(path)(options.spec)
          }
        }
      }
    }
  };
}