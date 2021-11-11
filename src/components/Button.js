import PropTypes from "prop-types";

function Button({ color, text, onClick }) {
  return (
    <button
      className="btn"
      style={{ backgroundColor: color }}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

Button.defaultProps = {
  color: "black",
  text: "Button",
};

Button.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
};

export default Button;
