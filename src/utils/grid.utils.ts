import { grid as theme } from 'theme/foundations/grid.theme';

export const getColSpan = (span: number = 12) => {
  return (span / theme.grid.columns) * 100 + '%';
};
