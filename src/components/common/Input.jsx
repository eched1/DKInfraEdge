import PropTypes from 'prop-types';

const Input = ({ label, id, className = '', ...props }) => (
  <div className="flex flex-col">
    <label htmlFor={id} className="mb-1">
      {label}
    </label>
    <input id={id} className={`border p-2 ${className}`} {...props} />
  </div>
);

Input.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Input.defaultProps = {
  className: '',
};

export default Input;
