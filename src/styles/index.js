export const colors = {
  primary: '#B90000',
  accent: '#B90000',
  icons: 'rgba(29,32,36,0.85)',
  background: '#ffffff',
  backgroundHighlight: '#f4f4f4',
  shadow: '#000000',
  gray85: 'rgba(29,32,36,0.85)',
  gray65: 'rgba(29,32,36,0.65)',
  gray45: 'rgba(29,32,36,0.45)',
  gray15: 'rgba(29,32,36,0.15)',
  gray09: 'rgba(29,32,36,0.09)',
  gray04: 'rgba(29,32,36,0.04)',
  grayDisabled: '#a6a6a7',
};

export default {
  scene: {
    backgroundColor: colors.background,
    shadowColor: colors.shadow,
  },
  scrollView: {
    backgroundColor: colors.background,
  },
  defaultButton: {
    backgroundColor: colors.accent,
    height: 50,
    borderRadius: 5,
    marginBottom: 2,
    paddingHorizontal: 5,
  },
  defaultContainerButton: {
    marginVertical: 10,
  },
  view: {},
};

export const baseComponent = {
  wrapper: {
    flex: 1,
  },
};

export const DEFAULT_MARGIN = 16;
