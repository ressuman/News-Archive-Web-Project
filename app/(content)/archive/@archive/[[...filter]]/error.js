"use client";

import PropTypes from "prop-types";

export default function CatchAllSegmentRouteError({ error }) {
  return (
    <div id="error">
      <h2>An error occurred</h2>
      <p>Invalid path.</p>
      <p>{error.message}</p>
    </div>
  );
}

CatchAllSegmentRouteError.propTypes = {
  error: PropTypes.shape({
    message: PropTypes.string.isRequired,
  }).isRequired,
};
