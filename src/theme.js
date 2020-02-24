export const theme = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: '"Source Sans Pro", "Helvetica Neue", Helvetica, Roboto, Arial, sans-serif',
    heading: 'Bitter, "Open Sans", serif',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    bold: 700,
    heading: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
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
      backgroundColor: 'background',
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
    },
    h1: {
      color: 'text',
      fontFamily: 'heading',
      fontSize: '2.2em',
      fontWeight: 'heading',
      lineHeight: 'heading',
    },
    h2: {
      color: 'text',
      fontFamily: 'heading',
      fontSize: '1.875em',
      fontWeight: 'heading',
      lineHeight: 'heading',
    },
    h3: {
      color: 'text',
      fontFamily: 'heading',
      fontSize: '1.3em',
      fontWeight: 'heading',
      lineHeight: 'heading',
    },
    h4: {
      color: 'text',
      fontFamily: 'heading',
      fontSize: '1.0625em',
      fontWeight: 'heading',
      lineHeight: 'heading',
    },
    h5: {
      color: 'text',
      fontFamily: 'heading',
      fontSize: '1em',
      fontWeight: 'heading',
      lineHeight: 'heading',
    },
    h6: {
      color: 'text',
      fontFamily: 'heading',
      fontSize: '0.9375em',
      fontWeight: 'heading',
      lineHeight: 'heading',
    },
    p: {
      color: 'text',
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
    },
    a: {
      color: 'primary',
      outline: theme => `${theme.colors.focus} auto 5px`,
      '&:focus': {},
    },
    pre: {
      fontFamily: 'heading',
      fontSize: '1.25em',
      fontWeight: 'body',
      overflowX: 'auto',
      code: {
        color: 'inherit',
      },
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit',
    },
    table: {
      borderCollapse: 'separate',
      borderSpacing: 0,
      width: '100%',
    },
    th: {
      borderBottomStyle: 'solid',
      textAlign: 'left',
    },
    td: {
      borderBottomStyle: 'solid',
      textAlign: 'left',
    },
    img: {
      maxWidth: '100%',
    },
    ul: {
      listStyle: 'square',
    },
    li: {
      margin: '20px 0',
    },
    header: {
      backgroundColor: 'focus',
      color: 'secondary',
    },
  },
  // form element styles
  forms: {
    label: {
      color: 'text',
      fontSize: '16px',
      marginBottom: '5px',
    },
    input: {
      border: theme => `1px solid ${theme.colors.gray}`,
      borderColor: 'gray',
      borderRadius: '0',
      boxSizing: 'border-box',
      color: '#212121',
      display: 'block',
      fontSize: 'fontSize.2',
      height: 'auto',
      lineHeight: '1',
      maxWidth: '460px',
      padding: '12px 13px',
      '&:focus': {
        borderColor: 'focus',
        boxShadow: theme => `0 0 0 1px ${theme.colors.focus}`,
        outline: 'none',
      },
    },
    select: {
      border: theme => `1px solid ${theme.colors.gray}`,
      borderRadius: '0',
      maxWidth: '460px',
      '&:focus': {
        borderColor: 'focus',
        boxShadow: theme => `0 0 0 1px ${theme.colors.focus}`,
        outline: 'none',
      },
    },
    textarea: {
      border: theme => `1px solid ${theme.colors.gray}`,
      borderColor: 'gray',
      borderRadius: '0',
      maxWidth: '460px',
      '&:focus': {
        borderColor: 'focus',
        boxShadow: theme => `0 0 0 1px ${theme.colors.focus}`,
        outline: 'none',
      },
    },
    slider: {
      bg: 'muted',
      color: 'primary',
      maxWidth: '460px',
    },
    checkbox: {
      color: 'base',
      fontWeight: '100',
      height: '35px',
      maxWidth: '460px',
      width: '35px',
      'input:unchecked ~ &': {
        // checked background
        border: theme => `1px solid ${theme.colors.gray}`,
      },
      'input:checked ~ &': {
        // checked background
        color: 'primary',
      },
      'input:focus ~ &': {
        borderColor: 'focus',
        boxShadow: theme => `0 0 0 1px ${theme.colors.focus}`,
        outline: 'none',
      },
    },
    radio: {
      'input:checked ~ &': {
        // checked background
        color: 'primary',
      },
      'input:focus ~ &': {
        outline: 'none',
      },
    },
  },
  // button styles
  buttons: {
    primary: {
      bg: 'primary',
      borderRadius: '5px',
      color: 'white',
      fontWeight: '700',
      '&:hover': {
        bg: 'primaryDarker',
      },
      '&:focus': {
        bg: 'primaryDarker',
        outlineColor: 'focus',
      },
      '&:active': {
        bg: 'primaryDarkest',
      },
    },
    secondary: {
      bg: 'white',
      border: theme => `2px solid ${theme.colors.primary}`,
      borderRadius: '5px',
      color: 'primary',
      fontWeight: '700',
      '&:hover': {
        bg: 'white',
        border: theme => `2px solid ${theme.colors.primaryDarker}`,
        color: 'primaryDarker',
      },
      '&:focus': {
        bg: 'primaryDarker',
        outlineColor: 'focus',
      },
      '&:active': {
        bg: 'white',
        border: theme => `2px solid ${theme.colors.primaryDarkest}`,
        color: 'primaryDarkest',
      },
    },
    green: {
      bg: 'green',
      borderRadius: '5px',
      color: 'white',
      fontWeight: '700',
      '&:hover': {
        bg: 'greenDarker',
      },
      '&:focus': {
        bg: 'greenDarker',
        outlineColor: 'focus',
      },
      '&:active': {
        bg: 'greenDarker',
      },
    },
  },
};

export default theme;
