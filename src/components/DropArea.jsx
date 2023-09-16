import PropTypes from 'prop-types';

function DropArea({ children }) {
  return <div>{children}</div>;
}

DropArea.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default DropArea;
