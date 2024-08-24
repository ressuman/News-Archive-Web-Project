import PropTypes from "prop-types";

export default function NewsDetailLayout({ children, modal }) {
  return (
    <>
      {modal}
      {children}
    </>
  );
}

NewsDetailLayout.propTypes = {
  children: PropTypes.node.isRequired,
  modal: PropTypes.node,
};
