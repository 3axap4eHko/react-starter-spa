import { createUseStyles } from "react-jss";

export default createUseStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 10px',
  },
  title: {},
  nav: {
    display: 'flex',
    flex: 1,
  },
  list: {
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-end',
    listStyle: 'none',
    '& > *': {
      margin: 5,
    },
  },
});
