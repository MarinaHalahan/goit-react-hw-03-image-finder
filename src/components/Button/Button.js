import { Button } from './Button.styled';
import PropTypes from 'prop-types';

export const ButtonMore = ({ onClick }) => {
  return <Button onClick={onClick}>Load more</Button>;
};

ButtonMore.propTypes = {
  onClick: PropTypes.func,
};
