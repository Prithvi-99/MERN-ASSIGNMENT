import PropTypes from "prop-types";

const UserCard = ({ name, email }) => {
  return (
    <div className="max-w-sm p-6 bg-white rounded-2xl shadow-lg border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
      <p className="text-gray-600 mt-2">{email}</p>
    </div>
  );
};

UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default UserCard;
