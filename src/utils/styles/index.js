import { colors } from './colors';
import { spatialUnits } from './spatial';
import { typography } from './mixins/typography';

export * from './colors';
export * from './spatial';
export * from './mixins/typography';

export default {
  ...colors,
  spatialUnits,
  typography,
};
