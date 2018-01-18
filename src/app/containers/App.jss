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
  },
  root: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    width: 600,
  },
});