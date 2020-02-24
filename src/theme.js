export const theme = {
  space: [
    0,
    4,
    8,
    16,
    32,
    64,
    128,
    256,
    512
  ],
  fonts: {
    body: '"Source Sans Pro", "Helvetica Neue", Helvetica, Roboto, Arial, sans-serif',
    heading: 'Bitter, "Open Sans", serif',
    monospace: 'Menlo, monospace'
  },
  fontSizes: [
    12,
    14,
    16,
    20,
    24,
    32,
    48,
    64,
    96
  ],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125
  },
  colors: {
    // elements
    background: '#F9F9F9',
    base: '#212121',
    black: '#000',
    focus: '#f9c642',
    link: '#004795',
    linkVisited: '#004795',
    muted: '#D6D7D9',
    primary: '#0071BB',
    secondary: '#E31C3D',
    text: '#323A45',
    white: '#FFF',
    // primary
    primaryAlt: '#02bfe7',
    primaryAltDark: '#00a6d2',
    primaryAltDarkest: '#046b99',
    primaryAltLight: '#9bdaf1',
    primaryAltLightest: '#e1f3f8',
    primaryDarker: '#003e73',
    primaryDarkest: '#112e51',
    // secondarys
    secondaryDark: '#cd2026',
    secondaryDarkest: '#981b1e',
    secondaryLight: '#e59393',
    secondaryLightest: '#f9dede',
    // grays
    gray: '#5b616b',
    grayCoolLight: '#dce4ef',
    grayDark: '#323a45',
    grayLight: '#f1f1f1',
    grayLightAlt: '#eeeeee',
    grayLighter: '#d6d7d9',
    grayMedium: '#757575',
    grayWarmDark: '#494440',
    grayWarmLight: '#e4e2e0',
    // golds
    gold: '#fdb81e',
    goldDarker: '#988530',
    goldLight: '#f9c642',
    goldLighter: '#fad980',
    goldLightest: '#fff1d2',
    // greens
    green: '#2e8540',
    greenDarker: '#195c27',
    greenLight: '#4aa564',
    greenLighter: '#94bfa2',
    greenLightest: '#e7f4e4',
    // cool blues
    coolBlue: '#205493',
    coolBlueLight: '#4773aa',
    coolBlueLighter: '#8ba6ca',
    coolBlueLightest: '#dce4ef',
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      backgroundColor: 'background',
    },
    buttons: {
      primary: {
        fontWeight: 'bold',
        color: 'white',
        bg: 'primary',
        '&:hover': {
          bg: 'goldDarker',
        },
      },
      secondary: {
        fontWeight: 'bold',
        color: 'background',
        bg: 'secondary',
        '&:hover': {
          bg: 'goldDarker',
        },
      },
    },
    h1: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: '2.2em'
    },
    h2: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: '1.875em'
    },
    h3: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: '1.3em'
    },
    h4: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: '1.0625em'
    },
    h5: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: '1em'
    },
    h6: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: '0.9375em'
    },
    p: {
      color: 'text',
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body'
    },
    a: {
      color: 'primary'
    },
    pre: {
      fontFamily: 'heading',
      fontWeight: 'body',
      fontSize: '1.25em',
      overflowX: 'auto',
      code: {
        color: 'inherit'
      }
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit'
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0
    },
    th: {
      textAlign: 'left',
      borderBottomStyle: 'solid'
    },
    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid'
    },
    img: {
      maxWidth: '100%'
    },
    ul: {
      listStyle: 'none'
    },
    li: {
      margin: '20px 0',
    },
    header: {
      color: 'secondary',
      backgroundColor: 'focus',
    },
  }
};

export default theme
