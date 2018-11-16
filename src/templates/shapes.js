import PropTypes from 'prop-types';

const positionShape = {
  x: PropTypes.number,
  y: PropTypes.number
};

const sizeShape = {
  width: PropTypes.number,
  height: PropTypes.number
};

const circleShape = {
  ...positionShape,
  dia: PropTypes.number
};

const rectShape = {
  ...positionShape,
  ...sizeShape
};

export default {
  positionShape,
  sizeShape,
  circleShape,
  rectShape
};