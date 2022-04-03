import { theme } from 'theme';
import { constants } from './constants';

const { BG_COLOR_TOKEN } = constants;

// helper to update the color value of custom css variables
export const setColorToken = (newColor: string, token = BG_COLOR_TOKEN) => {
  document.documentElement.style.setProperty(token, theme.colors[newColor]);
};
