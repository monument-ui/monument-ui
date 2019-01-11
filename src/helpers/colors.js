const colors = {
  red: {
    default: '#f44336',
    light: ['#ef5350', '#e57373', '#ef9a9a', '#ffcdd2', '#ffebee'],
    dark: ['#e53935', '#d32f2f', '#d32f2f', '#b71c1c']
  },
  pink: {
    default: '#ef5350',
    light: ['#ec407a', '#f06292', '#f48fb1', '#f8bbd0', '#fce4ec'],
    dark: ['#ef5350', '#ef5350', '#ef5350', '#ef5350']
  },
  purple: {
    default: '#9c27b0',
    light: ['#ab47bc', '#ba68c8', '#ce93d8', '#e1bee7', '#f3e5f5'],
    dark: ['#8e24aa', '#7b1fa2', '#6a1b9a', '#4a148c']
  },
  deepPurple: {
    default: '#673ab7',
    light: ['#7e57c2', '#9575cd', '#b39ddb', '#d1c4e9', '#ede7f6'],
    dark: ['#5e35b1', '#512da8', '#4527a0', '#311b92']
  },
  indigo: {
    default: '#3f51b5',
    light: ['#5c6bc0', '#7986cb', '#9fa8da', '#c5cae9', '#e8eaf6'],
    dark: ['#3949ab', '#303f9f', '#283593', '#1a237e']
  },
  blue: {
    default: '#2196f3',
    light: ['#42a5f5', '#64b5f6', '#90caf9', '#bbdefb', '#e3f2fd'],
    dark: ['#1e88e5', '#1976d2', '#1565c0', '#0d47a1']
  },
  lightBlue: {
    default: '#03a9f4',
    light: ['#29b6f6', '#4fc3f7', '#81d4fa', '#b3e5fc', '#e1f5fe'],
    dark: ['#039be5', '#0288d1', '#0277bd', '#01579b']
  },
  cyan: {
    default: '#00bcd4',
    light: ['#26c6da', '#4dd0e1', '#80deea', '#b2ebf2', '#e0f7fa'],
    dark: ['#00acc1', '#0097a7', '#00838f', '#006064']
  },
  teal: {
    default: '#009688',
    light: ['#26a69a', '#4db6ac', '#80cbc4', '#b2dfdb', '#e0f2f1'],
    dark: ['#00897b', '#00796b', '#00695c', '#004d40']
  },
  green: {
    default: '#4caf50',
    light: ['#66bb6a', '#81c784', '#a5d6a7', '#c8e6c9', '#e8f5e9'],
    dark: ['#43a047', '#388e3c', '#2e7d32', '#1b5e20']
  },
  lightGreen: {
    default: '#8bc34a',
    light: ['#9ccc65', '#aed581', '#c5e1a5', '#dcedc8', '#f1f8e9'],
    dark: ['#7cb342', '#689f38', '#558b2f', '#33691e']
  },
  lime: {
    default: '#cddc39',
    light: ['#d4e157', '#dce775', '#e6ee9c', '#f0f4c3', '#f9fbe7'],
    dark: ['#c0ca33', '#afb42b', '#9e9d24', '#827717']
  },
  yellow: {
    default: '#ffeb3b',
    light: ['#ffee58', '#fff176', '#fff59d', '#fff9c4', '#fffde7'],
    dark: ['#fdd835', '#fbc02d', '#f9a825', '#f57f17']
  },
  amber: {
    default: '#ffc107',
    light: ['#ffca28', '#ffd54f', '#ffe082', '#ffecb3', '#fff8e1'],
    dark: ['#ffb300', '#ffa000', '#ff8f00', '#ff6f00']
  },
  orange: {
    default: '#ff9800',
    light: ['#ffa726', '#ffb74d', '#ffcc80', '#ffe0b2', '#fff3e0'],
    dark: ['#fb8c00', '#f57c00', '#ef6c00', '#e65100']
  },
  deepOrange: {
    default: '#ff5722',
    light: ['#fbe9e7', '#ffccbc', '#ffab91', '#ff8a65', '#ff7043'],
    dark: ['#f4511e', '#e64a19', '#d84315', '#bf360c']
  },
  brown: {
    default: '#795548',
    light: ['#8d6e63', '#a1887f', '#bcaaa4', '#d7ccc8', '#efebe9'],
    dark: ['#6d4c41', '#5d4037', '#4e342e', '#3e2723']
  },
  grey: {
    default: '#9e9e9e',
    light: ['#bdbdbd', '#e0e0e0', '#eeeeee', '#f5f5f5', '#fafafa'],
    dark: ['#757575', '#616161', '#424242', '#212121']
  },
  blueGrey: {
    default: '#607d8b',
    light: ['#78909c', '#90a4ae', '#b0bec5', '#cfd8dc', '#eceff1'],
    dark: ['#546e7a', '#455a64', '#37474f', '#263238']
  },
  black: '#000',
  white: '#fff'
};

const mixes = {
  gold: [colors.amber.light[0], colors.amber.light[4]],
  midnight: [colors.deepPurple.dark[2], colors.indigo.dark[0]],
  fire: [colors.red.dark[3], colors.deepOrange.dark[1]],
  sand: [colors.orange.light[0], colors.yellow.default],
  waves: [colors.lightBlue.default, colors.cyan.light[1]],
  jelly: [colors.pink.default, colors.purple.light[0]],
  wood: [colors.brown.dark[0], colors.deepOrange.light[1]],
  grass: [colors.green.light[0], colors.lightGreen.dark[1]],
  plasma: [colors.purple.dark[3], colors.purple.dark[0]],
  ruby: [colors.red.dark[3], colors.red.dark[0]]
};

colors.mixes = mixes;

export default colors;
