const { snakeCase, capitalize } = require('lodash');
const { stringifyRequest } = require('loader-utils');
const { stringifySymbol } = require('svg-sprite-loader/lib/utils');

module.exports = function runtimeGenerator({ symbol, config, context }) {
  const { spriteModule, symbolModule } = config;
  const spriteRequest = stringifyRequest({ context }, spriteModule);
  const symbolRequest = stringifyRequest({ context }, symbolModule);
  const parentComponentDisplayName = 'SpriteSymbolComponent';
  const formattedSymbolId = capitalize(snakeCase(symbol.id));
  const displayName = `${formattedSymbolId}${parentComponentDisplayName}`;


  return `
    import React from 'react';
    import SpriteSymbol from ${symbolRequest};
    import sprite from ${spriteRequest};
    
    const symbol = new SpriteSymbol(${stringifySymbol(symbol)});
    sprite.add(symbol);
    export default class ${displayName} extends React.Component {
      render() {
        return (
          <svg {...this.props}>
            <use xlinkHref={\`#${symbol.id}\`} />
          </svg>);
      }
    }
  `;
};