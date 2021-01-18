import theme from 'styled-theming';
import mapTheme from './utils/functions';
import Sonatype from './Sonatype';
import Blue from './Blue';
import Cyan from './Cyan';
import Gray from './Gray';
import Green from './Green';
import Salmon from './Salmon';
import SeaGreen from './SeaGreen';
import SlateGray from './SlateGray';
import DarkBlue from './DarkBlue';
import DarkCyan from './DarkCyan';
import DarkGray from './DarkGray';
import DarkGreen from './DarkGreen';
import DarkSalmon from './DarkSalmon';
import DarkSeaGreen from './DarkSeaGreen';
import DarkSlateGray from './DarkSlateGray';
import LightBlue from './LightBlue';
import LightCyan from './LightCyan';
import LightGray from './LightGray';
import LightGreen from './LightGreen';
import LightSalmon from './LightSalmon';
import LightSeaGreen from './LightSeaGreen';
import LightSlateGray from './LightSlateGray';

const themes = {
  Sonatype,
  Blue,
  Cyan,
  Gray,
  Green,
  Salmon,
  SeaGreen,
  SlateGray,
  DarkBlue,
  DarkCyan,
  DarkGray,
  DarkGreen,
  DarkSalmon,
  DarkSeaGreen,
  DarkSlateGray,
  LightBlue,
  LightCyan,
  LightGray,
  LightGreen,
  LightSalmon,
  LightSeaGreen,
  LightSlateGray,
};

export default themes;

export { mapTheme };

export const textColor = theme.variants('mode', 'variant', {
  primary: mapTheme(themes, 'mainLight'),
  passive: mapTheme(themes, 'mainDark'),
  special: mapTheme(themes, 'mainLight'),
  destructive: mapTheme(themes, 'mainLight'),
});

export const secondaryTextColor = theme.variants('mode', 'variant', {
  primary: mapTheme(themes, 'mainDark'),
  passive: mapTheme(themes, 'mainLight'),
  special: mapTheme(themes, 'mainDark'),
  destructive: mapTheme(themes, 'mainDark'),
});

export const primaryColor = theme.variants('mode', 'variant', {
  primary: mapTheme(themes, 'primary'),
  passive: mapTheme(themes, 'neutral'),
  special: mapTheme(themes, 'warning'),
  destructive: mapTheme(themes, 'danger'),
});

export const primaryColorDark = theme.variants('mode', 'variant', {
  primary: mapTheme(themes, 'primary', 'darken', '0.1'),
  passive: mapTheme(themes, 'neutral', 'darken', '0.1'),
  special: mapTheme(themes, 'warning', 'darken', '0.1'),
  destructive: mapTheme(themes, 'danger', 'darken', '0.1'),
});

export const primaryColorLight = theme.variants('mode', 'variant', {
  primary: mapTheme(themes, 'primary', 'lighten', '0.2'),
  passive: mapTheme(themes, 'neutral', 'lighten', '0.2'),
  special: mapTheme(themes, 'warning', 'lighten', '0.2'),
  destructive: mapTheme(themes, 'danger', 'lighten', '0.2'),
});

export const neutralColor = theme.variants('mode', 'variant', {
  primary: mapTheme(themes, 'neutral'),
});

export const activeBackgroundColor = theme.variants('mode', 'variant', {
  primary: mapTheme(themes, 'primary', 'darken', '0.05'),
  passive: mapTheme(themes, 'neutral', 'darken', '0.05'),
  special: mapTheme(themes, 'warning', 'darken', '0.05'),
  destructive: mapTheme(themes, 'danger', 'darken', '0.05'),
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

export const leftSidePadding = theme.variants('mode', 'size', {
  small: mapTheme(themes, 'spatialUnits', 'array', '2'),
  medium: mapTheme(themes, 'spatialUnits', 'array', '2'),
  large: mapTheme(themes, 'spatialUnits', 'array', '2'),
});

export const rightSidePadding = theme.variants('mode', 'size', {
  small: mapTheme(themes, 'spatialUnits', 'array', '9'),
  medium: mapTheme(themes, 'spatialUnits', 'array', '9'),
  large: mapTheme(themes, 'spatialUnits', 'array', '9'),
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

export const innerFocusColor = theme.variants('mode', 'variant', {
  primary: mapTheme(themes, 'mainLight'),
});

export const focusBackground = theme.variants('mode', 'variant', {
  primary: mapTheme(themes, 'mainLight'),
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
