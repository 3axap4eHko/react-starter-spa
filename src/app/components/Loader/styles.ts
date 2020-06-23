import { createUseStyles } from 'react-jss';

export default createUseStyles({
  '@global': {
    '#nprogress': {
      pointerEvents: 'none'
    },
    '#nprogress .bar': {
      background: '#29d',
      position: 'fixed',
      zIndex: '1031',
      top: '0',
      left: '0',
      width: '100%',
      height: 2
    },
    '#nprogress .peg': {
      display: 'block',
      position: 'absolute',
      right: 0,
      width: 100,
      height: '100%',
      boxShadow: '0 0 10px #29d, 0 0 5px #29d',
      opacity: '1.0',
      webkitTransform: 'rotate(3deg) translate(0px, -4px)',
      msTransform: 'rotate(3deg) translate(0px, -4px)',
      transform: 'rotate(3deg) translate(0px, -4px)'
    },
    '#nprogress .spinner': {
      display: 'block',
      position: 'fixed',
      zIndex: '1031',
      top: 15,
      right: 15
    },
    '#nprogress .spinner-icon': {
      width: 18,
      height: 18,
      boxSizing: 'border-box',
      border: 'solid 2px transparent',
      borderTopColor: '#29d',
      borderLeftColor: '#29d',
      borderRadius: '50%',
      webkitAnimation: 'nprogress-spinner 400ms linear infinite',
      animation: 'nprogress-spinner 400ms linear infinite'
    },
    '.nprogress-custom-parent': {
      overflow: 'hidden',
      position: 'relative'
    },
    '.nprogress-custom-parent #nprogress .spinner, .nprogress-custom-parent #nprogress .bar': {
      position: 'absolute'
    },
    '@keyframes nprogress-spinner': {
      '0%': {
        webkitTransform: 'rotate(0deg)',
        transform: 'rotate(0deg)'
      },
      '100%': {
        webkitTransform: 'rotate(360deg)',
        transform: 'rotate(360deg)'
      }
    }
  }
});
