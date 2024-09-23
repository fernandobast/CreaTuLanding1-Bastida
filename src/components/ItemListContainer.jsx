import PropTypes from 'prop-types';  

const ItemListContainer = ({ greeting }) => {
  return (
    <div style={styles.container}>
      <h2>{greeting}</h2>
      <p>Aquí se mostrará el catálogo de productos próximamente.</p>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '30px',
  },
};

ItemListContainer.propTypes = {
  greeting: PropTypes.string.isRequired,  
};

export default ItemListContainer;