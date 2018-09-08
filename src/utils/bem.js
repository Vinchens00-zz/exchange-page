import { flatten, kebabCase } from 'lodash';

export const objectToArray = obj =>
  Object.keys(obj)
    .filter(i => obj[i])
    .map(i => kebabCase(i));

export const parse = data => {
  if (!data) return [];

  let ret = data;

  if (typeof data === 'string' || typeof data === 'number') {
    ret = [data];
  } else if (!Array.isArray(data)) {
    if (Object.prototype.hasOwnProperty.call(data, 'toString')) {
      ret = [data];
    } else {
      ret = objectToArray(data);
    }
  }

  ret = ret
    .filter(Boolean)
    .map(v => (typeof v === 'object' ? objectToArray(v) : v));

  return flatten(ret);
};

const cn = block => {
  return (element = '', mods = [], externalClasses = []) => {
    const cl = element ? `${block}__${element}` : block;
    const modifiers = parse(mods).map(mod => `${cl}--${mod}`);
    const externalClassList = parse(externalClasses);

    return [cl]
      .concat(modifiers)
      .concat(externalClassList)
      .join(' ');
  };
};

export default cn;
