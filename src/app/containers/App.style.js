export default theme => ({
  '@global': {
    'html, body, #app': {
      color: theme.color,
      backgroundColor: theme.backgroundColor,
      minHeight: '100%',
      height: '100%',
      margin: 0,

    },
    '#app': {
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
    },
    '*': {
      fontFamily: 'Roboto',
    },
    a: {
      color: theme.color,
    },
    '.page-animation': {
      transition: 'all 1000ms ease-in-out',
      width: '100%',
    },
    '.page-enter-start': {
      position: 'absolute',
      top: 500,
      zIndex: 100,
      opacity: 0,
    },
    '.page-enter-active': {
      position: 'absolute',
      top: 500,
      zIndex: 100,
      opacity: 0,
    },
    '.page-enter-done': {
      position: 'absolute',
      top: 0,
      zIndex: 100,
      opacity: 1,
    },
    '.page-exit-start': {
      position: 'absolute',
      top: 0,
      opacity: 0.9,
    },
    '.page-exit-active': {
      position: 'absolute',
      top: 500,
      opacity: 0,
    },
    '.page-exit-done': {
      position: 'absolute',
      top: 500,
      opacity: 0,
    },
  },
  root: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    width: 600,
  },
  content: {
    position: 'relative',
    display: 'flex',
    flex: 1,
  },
});
