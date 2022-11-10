import React from 'react';

const Navbar = (props) => {
  return (
    <div style={styles.nav}>
      <div style={styles.cartIconContainer}>
        <img style={styles.cartIcon} src="https://cdn-icons-png.flaticon.com/512/2121/2121815.png" alt="cart-icon" />
        <div style={styles.cartCount}>{props.count}</div>
      </div>
    </div>
  );
}

const styles = {
  cartIcon: {
    height: 32,
    marginRight: 20
  },
  nav: {
    padding: '0px 10px 0px 0px',
    height: 70,
    background: '#4267b2',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  cartIconContainer: {
    position: 'relative'
  },
  cartCount: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '27px',
    height: '27px',
    background: 'yellow',
    borderRadius: '50%',
    position: 'absolute',
    right: 0,
    top: -9
  }
};


export default Navbar;