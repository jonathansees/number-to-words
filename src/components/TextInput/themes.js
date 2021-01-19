import theme from 'styled-theming';
import themes, { mapTheme } from '../../utils/themes/index';

export const focusColor = theme.variants('mode', 'variant', {
  primary: mapTheme(themes, 'primary'),
});

export const focusBackground = theme.variants('mode', 'variant', {
  primary: mapTheme(themes, 'mainLight'),
});

export const textColor = theme.variants('mode', 'variant', {
  primary: mapTheme(themes, 'mainDark'),
});

export const backgroundColor = theme.variants('mode', 'variant', {
  primary: mapTheme(themes, 'mainLight'),
});

export const borderColor = theme.variants('mode', 'variant', {
  primary: mapTheme(themes, 'mainDark'),
});

export const focusBorderColor = theme.variants('mode', 'variant', {
  primary: mapTheme(themes, 'primary'),
});

export const hoverBackgroundColor = theme.variants('mode', 'variant', {
  primary: mapTheme(themes, 'primary', 'darken', '0.1'),
  passive: mapTheme(themes, 'neutral', 'darken', '0.1'),
  special: mapTheme(themes, 'warning', 'darken', '0.1'),
  destructive: mapTheme(themes, 'danger', 'darken', '0.1'),
});

export const activeBackgroundColor = theme.variants('mode', 'variant', {
  primary: mapTheme(themes, 'primary', 'darken', '0.05'),
  passive: mapTheme(themes, 'neutral', 'darken', '0.05'),
  special: mapTheme(themes, 'warning', 'darken', '0.05'),
  destructive: mapTheme(themes, 'danger', 'darken', '0.05'),
});

export const invertHoverBackgroundColor = theme.variants('mode', 'variant', {
  primary: mapTheme(themes, 'primary', 'lighten', '0.1'),
  passive: mapTheme(themes, 'neutral', 'lighten', '0.1'),
  special: mapTheme(themes, 'warning', 'lighten', '0.1'),
  destructive: mapTheme(themes, 'danger', 'lighten', '0.1'),
});

export const invertActiveBackgroundColor = theme.variants('mode', 'variant', {
  primary: mapTheme(themes, 'primary', 'lighten', '0.4'),
  passive: mapTheme(themes, 'neutral', 'lighten', '0.2'),
  special: mapTheme(themes, 'warning', 'lighten', '0.4'),
  destructive: mapTheme(themes, 'danger', 'lighten', '0.2'),
});

export const padding = theme.variants('mode', 'size', {
  small: mapTheme(themes, '', 'constant', 0),
  medium: mapTheme(themes, 'spatialUnits', 'array', '1'),
  large: mapTheme(themes, 'spatialUnits', 'array', '2'),
});

export const sidePadding = theme.variants('mode', 'size', {
  small: mapTheme(themes, 'spatialUnits', 'array', '5'),
  medium: mapTheme(themes, 'spatialUnits', 'array', '5'),
  large: mapTheme(themes, 'spatialUnits', 'array', '5'),
});

export const minHeight = theme.variants('mode', 'size', {
  small: mapTheme(themes, 'spatialUnits', 'array', '6'),
  medium: mapTheme(themes, 'spatialUnits', 'array', '9'),
  large: mapTheme(themes, 'spatialUnits', 'array', '12'),
});

export const fontSize = theme.variants('mode', 'size', {
  small: mapTheme(themes, 'typography.size_1.size'),
  medium: mapTheme(themes, 'typography.size_3.size'),
  large: mapTheme(themes, 'typography.size_4.size'),
});

export const fontHeight = theme.variants('mode', 'size', {
  small: mapTheme(themes, 'typography.size_1.height'),
  medium: mapTheme(themes, 'typography.size_3.height'),
  large: mapTheme(themes, 'typography.size_4.height'),
});
