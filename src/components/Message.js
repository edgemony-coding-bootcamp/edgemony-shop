import PropTypes from 'prop-types';
import './Message.scss';
const Message = ({ msg }) => {
	return <div className='Message'>{msg}</div>;
};

Message.propTypes = {
	products: PropTypes.string.isRequired,
};

export default Message;
