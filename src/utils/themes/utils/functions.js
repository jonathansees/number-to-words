import { darken, lighten } from 'polished';
import keys from './keys';

const mapTheme = (themes, detail, effect, factor) => {
  const obj = {};
  keys.forEach((key) => {
    let returnValue;
    const getValue = (object, objectKeys) => objectKeys.split('.').reduce((o, k) => (o || {})[k], object);
    const value = getValue(themes[key], detail);

    switch (effect) {
      case 'darken':
        returnValue = darken(factor, value);
        break;
      case 'lighten':
        returnValue = lighten(factor, value);
        break;
      case 'array':
        returnValue = value[factor];
        break;
      case 'constant':
        returnValue = factor;
        break;
      default:
        returnValue = value;
    }

    obj[key] = returnValue;
  });

  return obj;
};

export default mapTheme;
