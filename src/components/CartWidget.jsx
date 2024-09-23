const CartWidget = () => {
  return (
    <div style={styles.cartContainer}>
      <img 
        src="https://cdn-icons-png.flaticon.com/512/34/34627.png" 
        alt="Carrito de Compras" 
        style={styles.cartIcon}
      />
      <span style={styles.itemCount}>0</span>
    </div>
  );
};

const styles = {
  cartContainer: {
    position: 'relative',
    display: 'inline-block',
  },
  cartIcon: {
    width: '30px',
    height: '30px',
  },
  itemCount: {
    position: 'absolute',
    top: '-5px',
    right: '-10px',
    backgroundColor: 'red',
    color: 'white',
    borderRadius: '50%',
    padding: '2px 6px',
    fontSize: '12px',
  },
};

export default CartWidget;
