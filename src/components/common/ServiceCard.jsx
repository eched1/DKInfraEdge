import PropTypes from 'prop-types';

const ServiceCard = ({ title, description }) => (
  <div className="border rounded p-4 shadow hover:shadow-lg transition">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p>{description}</p>
  </div>
);

ServiceCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ServiceCard;
