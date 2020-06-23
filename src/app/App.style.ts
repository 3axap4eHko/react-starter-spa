import { createUseStyles } from 'react-jss';
import { Theme } from './theme';

export default createUseStyles<Theme>(theme => ({
  '@global': {
    'html, body, #__app': {
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      minHeight: '100%',
      margin: 0,
    },
    '#app': {
      alignItems: 'center',
      width: 600,
    },
    '*': {
      fontFamily: 'Roboto',
    },
    a: {
      color: theme.color
    }
  },
  content: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
}));
