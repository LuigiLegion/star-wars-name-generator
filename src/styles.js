// Initializations
const burgerStyles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    right: '14px',
    top: '14px',
  },
  bmBurgerBars: {
    background: '#ffffff',
    boxShadow: '0 0 2px #ffffff, 0 0 5px #ffffff',
  },
  bmBurgerBarsHover: {
    background: '#a90000',
  },
  bmCrossButton: {
    height: '24px',
    width: '24px',
  },
  bmCross: {
    background: '#ffffff',
    boxShadow: '0 0 2px #ffffff, 0 0 5px #ffffff',
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%',
  },
  bmMenu: {
    background: '#373a47',
    fontSize: '1.15em',
  },
  bmMorphShape: {
    fill: '#373a47',
  },
  bmItemList: {
    color: '#b8b7ad',
    backgroundColor: '#000000',
    boxShadow: '0 0 2px #000000, 0 0 5px #000000',
    padding: '0.8em',
  },
  bmItem: {
    display: 'inline-block',
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)',
  },
};

const generateNamesStyle = {
  paddingRight: '0px',
  paddingLeft: '0px',
};

const displayNamesStyle = {
  paddingRight: '15px',
  paddingLeft: '15px',
};

// Exports
export { burgerStyles, generateNamesStyle, displayNamesStyle };
