import { FaExclamationTriangle } from 'react-icons/fa';
import './ErrorMessage.css';

const ErrorMessage = ({ message }) => {
  return (
    <div className="error-container">
      <FaExclamationTriangle className="error-icon" />
      <p className="error-text">{message || 'An error occurred. Please try again.'}</p>
    </div>
  );
};

export default ErrorMessage;
