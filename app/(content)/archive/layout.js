import PropTypes from "prop-types";

export default function Archive({ archive, latest }) {
  return (
    <div>
      <h1>News Archive</h1>
      <section id="archive-filter">{archive}</section>
      <section id="archive-latest">{latest}</section>
    </div>
  );
}

Archive.propTypes = {
  archive: PropTypes.node.isRequired,
  latest: PropTypes.node.isRequired,
};
