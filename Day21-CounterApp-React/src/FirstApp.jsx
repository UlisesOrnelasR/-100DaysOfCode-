import PropTypes from "prop-types";

export const FirstApp = ({ title, subTitle, name }) => {
  // console.log(props);

  return (
    <>
      <h2>{title}</h2>
      <p>{subTitle}</p>
      <p>{name}</p>
    </>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  name: PropTypes.string,
};

FirstApp.defaultProps = {
  title: "No hay titutlo",
  subTitle: "no hay subtitulo",
  name: "Ulises Ornelas",
};
